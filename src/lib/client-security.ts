/**
 * Client-side security utilities for DataGen website
 * These functions work in the browser environment
 */

// Security configuration for client-side
export const CLIENT_SECURITY_CONFIG = {
  MAX_INPUT_LENGTH: {
    NAME: 100,
    EMAIL: 254,
    PHONE: 20,
    MESSAGE: 2000,
    GENERAL: 500
  },
  PATTERNS: {
    NAME: /^[a-zA-Z\s\-'\.]+$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\+?[\d\s\-\(\)]{10,15}$/,
    ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
    SAFE_TEXT: /^[a-zA-Z0-9\s\-_.,!?()]+$/
  }
};

/**
 * Sanitize input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/file:/gi, '') // Remove file: protocol
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return CLIENT_SECURITY_CONFIG.PATTERNS.EMAIL.test(email) && 
         email.length <= CLIENT_SECURITY_CONFIG.MAX_INPUT_LENGTH.EMAIL;
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  return CLIENT_SECURITY_CONFIG.PATTERNS.PHONE.test(phone) && 
         phone.length <= CLIENT_SECURITY_CONFIG.MAX_INPUT_LENGTH.PHONE;
}

/**
 * Validate name format
 */
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  return CLIENT_SECURITY_CONFIG.PATTERNS.NAME.test(name) && 
         name.length >= 2 && 
         name.length <= CLIENT_SECURITY_CONFIG.MAX_INPUT_LENGTH.NAME;
}

/**
 * Validate message content
 */
export function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;
  return message.length >= 10 && 
         message.length <= CLIENT_SECURITY_CONFIG.MAX_INPUT_LENGTH.MESSAGE;
}

/**
 * Detect suspicious patterns in input
 */
export function detectSuspiciousInput(input: string): { suspicious: boolean; reasons: string[] } {
  const reasons: string[] = [];
  
  if (!input || typeof input !== 'string') {
    return { suspicious: false, reasons: [] };
  }
  
  // SQL injection patterns
  if (/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/i.test(input)) {
    reasons.push('SQL injection pattern detected');
  }
  
  // XSS patterns
  if (/<script|javascript:|on\w+=/i.test(input)) {
    reasons.push('XSS pattern detected');
  }
  
  // Path traversal
  if (/\.\.\/|\.\.\\/.test(input)) {
    reasons.push('Path traversal pattern detected');
  }
  
  // Command injection
  if (/[;&|`$(){}[\]\\]/.test(input)) {
    reasons.push('Command injection pattern detected');
  }
  
  // Excessive length
  if (input.length > CLIENT_SECURITY_CONFIG.MAX_INPUT_LENGTH.GENERAL) {
    reasons.push('Input too long');
  }
  
  return { suspicious: reasons.length > 0, reasons };
}

/**
 * Generate a simple random string (client-side)
 */
export function generateRandomString(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Simple hash function for client-side use
 */
export function simpleHash(str: string): string {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36);
}

/**
 * Validate form data comprehensively
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Validate name
  if (!isValidName(data.name)) {
    errors.push('Name must be 2-100 characters and contain only letters, spaces, hyphens, apostrophes, and periods');
  }
  
  // Check for suspicious patterns in name
  const nameCheck = detectSuspiciousInput(data.name);
  if (nameCheck.suspicious) {
    errors.push('Name contains invalid characters');
  }
  
  // Validate email
  if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Check for suspicious patterns in email
  const emailCheck = detectSuspiciousInput(data.email);
  if (emailCheck.suspicious) {
    errors.push('Email contains invalid characters');
  }
  
  // Validate phone (optional)
  if (data.phone && data.phone.trim() !== '') {
    if (!isValidPhone(data.phone)) {
      errors.push('Please enter a valid phone number');
    }
    
    const phoneCheck = detectSuspiciousInput(data.phone);
    if (phoneCheck.suspicious) {
      errors.push('Phone number contains invalid characters');
    }
  }
  
  // Validate message
  if (!isValidMessage(data.message)) {
    errors.push('Message must be 10-2000 characters long');
  }
  
  // Check for suspicious patterns in message
  const messageCheck = detectSuspiciousInput(data.message);
  if (messageCheck.suspicious) {
    errors.push('Message contains invalid content');
  }
  
  return { valid: errors.length === 0, errors };
}

/**
 * Sanitize all form data
 */
export function sanitizeContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): typeof data {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    phone: data.phone ? sanitizeInput(data.phone) : '',
    message: sanitizeInput(data.message)
  };
}

/**
 * Rate limiting for client-side (using localStorage)
 */
export function checkClientRateLimit(key: string, maxRequests: number = 5, windowMs: number = 3600000): boolean {
  try {
    const now = Date.now();
    const storageKey = `rate_limit_${key}`;
    const stored = localStorage.getItem(storageKey);
    
    if (!stored) {
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, resetTime: now + windowMs }));
      return true;
    }
    
    const data = JSON.parse(stored);
    
    if (now > data.resetTime) {
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, resetTime: now + windowMs }));
      return true;
    }
    
    if (data.count >= maxRequests) {
      return false;
    }
    
    data.count++;
    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
    
  } catch (error) {
    // If localStorage is not available, allow the request
    return true;
  }
}

/**
 * Log security events to console (client-side)
 */
export function logClientSecurityEvent(event: string, details: Record<string, any>): void {
  const logEntry = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  console.warn('[CLIENT-SECURITY]', logEntry);
  
  // In production, you could send this to a logging service
  // fetch('/api/security/log', { method: 'POST', body: JSON.stringify(logEntry) });
}

/**
 * Check if the current environment is secure (HTTPS)
 */
export function isSecureContext(): boolean {
  return window.isSecureContext || window.location.protocol === 'https:';
}

/**
 * Validate URL to prevent open redirects
 */
export function isValidRedirectUrl(url: string): boolean {
  try {
    const urlObj = new URL(url, window.location.origin);
    const allowedDomains = ['datagen.in', 'www.datagen.in', 'docs.datagen.in'];
    return allowedDomains.includes(urlObj.hostname) || urlObj.hostname === window.location.hostname;
  } catch {
    return false;
  }
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Remove potentially dangerous attributes from HTML
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  
  // Remove script tags
  const scripts = div.querySelectorAll('script');
  scripts.forEach(script => script.remove());
  
  // Remove event handlers
  const allElements = div.querySelectorAll('*');
  allElements.forEach(element => {
    Array.from(element.attributes).forEach(attr => {
      if (attr.name.startsWith('on') || attr.name === 'javascript:') {
        element.removeAttribute(attr.name);
      }
    });
  });
  
  return div.innerHTML;
}
