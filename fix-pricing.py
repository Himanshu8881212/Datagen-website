#!/usr/bin/env python3
"""
Script to replace the old tier-based pricing with credit-based pricing in page.tsx
"""

# Read the pricing section component
with open('src/components/pricing-section.tsx', 'r') as f:
    pricing_component = f.read()

# Extract just the content inside the section tag (excluding the function wrapper)
start_marker = '<section id="pricing"'
end_marker = '</section>'

start_idx = pricing_component.find(start_marker)
end_idx = pricing_component.find(end_marker) + len(end_marker)

pricing_section_content = pricing_component[start_idx:end_idx]

# Read the current page.tsx
with open('src/app/page.tsx', 'r') as f:
    page_content = f.read()

# Find the pricing section in page.tsx
page_start_idx = page_content.find('        {/* Pricing Section */')
page_section_start = page_content.find('<section id="pricing"', page_start_idx)

# Find the end of the pricing section (before FAQ Section)
faq_marker = '        {/* FAQ Section */'
page_section_end_idx = page_content.find(faq_marker)

# Get the content before and after the pricing section
before_pricing = page_content[:page_start_idx]
after_pricing = page_content[page_section_end_idx:]

# Add proper indentation to the pricing section content
indented_pricing = '\n'.join('        ' + line if line.strip() else line 
                              for line in pricing_section_content.split('\n'))

# Construct the new page content
new_page_content = (
    before_pricing +
    '        {/* Pricing Section */}\n' +
    indented_pricing + '\n\n' +
    after_pricing
)

# Write the updated content
with open('src/app/page.tsx', 'w') as f:
    f.write(new_page_content)

print("✅ Successfully updated pricing section in page.tsx")
print(f"   Replaced {page_section_end_idx - page_start_idx} characters")
print(f"   With {len(indented_pricing)} characters of new content")

