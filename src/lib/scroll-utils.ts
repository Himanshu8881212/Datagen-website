'use client';

/**
 * Smoothly scrolls to an element with the specified ID
 * @param elementId The ID of the element to scroll to (without the # prefix)
 */
export function scrollToElement(elementId: string) {
  // Remove the # if it's included
  const id = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  
  // Find the element
  const element = document.getElementById(id);
  
  // If element exists, scroll to it
  if (element) {
    // Get the header height to offset the scroll position
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Calculate the element's position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    
    // Scroll to the element with an offset for the header
    window.scrollTo({
      top: elementPosition - headerHeight - 20, // 20px extra padding
      behavior: 'smooth'
    });
  }
}

/**
 * Creates a click handler for navigation links
 * @param elementId The ID of the element to scroll to
 * @param callback Optional callback to execute after scrolling
 */
export function createScrollHandler(elementId: string, callback?: () => void) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(elementId);
    if (callback) callback();
  };
}
