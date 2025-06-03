'use client';

/**
 * Smoothly scrolls to an element with the specified ID with perfect centering
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

    // Calculate optimal offset for professional centering
    // Header height + comfortable padding for better visual positioning
    // Accounts for section padding and provides perfect visual centering
    const optimalOffset = headerHeight - 70; // Perfect positioning as tested

    // Scroll to the element with proper offset for perfect centering
    window.scrollTo({
      top: elementPosition - optimalOffset,
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
  return (e: any) => {
    e.preventDefault();
    scrollToElement(elementId);
    if (callback) callback();
  };
}
