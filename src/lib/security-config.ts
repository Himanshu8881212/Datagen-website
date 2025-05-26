/**
 * Centralized security configuration for DataGen website
 */

export const SECURITY_CONFIG = {
  // Rate Limiting
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100, // requests per window
    CONTACT_FORM: {
      WINDOW_MS: 60 * 60 * 1000, // 1 hour
      MAX_REQUESTS: 5 // contact form submissions per hour
    },
    API: {
      WINDOW_MS: 5 * 60 * 1000, // 5 minutes
      MAX_REQUESTS: 50 // API requests per 5 minutes
    }
  },

  // Content Security Policy
  CSP: {
    DEFAULT_SRC: ["'self'"],
    SCRIPT_SRC: [
      "'self'",
      "'unsafe-inline'", // Required for Next.js
      "'unsafe-eval'", // Required for development
      "https://api.emailjs.com",
      "https://cdn.emailjs.com",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com"
    ],
    STYLE_SRC: [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS
      "https://fonts.googleapis.com"
    ],
    IMG_SRC: [
      "'self'",
      "data:",
      "https:",
      "blob:"
    ],
    FONT_SRC: [
      "'self'",
      "data:",
      "https://fonts.gstatic.com"
    ],
    CONNECT_SRC: [
      "'self'",
      "https://api.emailjs.com",
      "https://docs.datagen.in",
      "https://www.google-analytics.com",
      "https://analytics.google.com"
    ],
    FRAME_SRC: ["'self'"],
    OBJECT_SRC: ["'none'"],
    BASE_URI: ["'self'"],
    FORM_ACTION: ["'self'"],
    FRAME_ANCESTORS: ["'none'"]
  },

  // Blocked User Agents (security scanners, bots, etc.)
  BLOCKED_USER_AGENTS: [
    'sqlmap',
    'nikto',
    'nmap',
    'masscan',
    'zap',
    'burp',
    'w3af',
    'acunetix',
    'nessus',
    'openvas',
    'skipfish',
    'wpscan',
    'dirb',
    'dirbuster',
    'gobuster',
    'wfuzz',
    'hydra',
    'medusa',
    'john',
    'hashcat'
  ],

  // Suspicious Paths
  SUSPICIOUS_PATHS: [
    '/admin',
    '/wp-admin',
    '/wp-login',
    '/wp-content',
    '/wp-includes',
    '/phpmyadmin',
    '/pma',
    '/mysql',
    '/.env',
    '/.git',
    '/config',
    '/backup',
    '/backups',
    '/database',
    '/db',
    '/sql',
    '/shell',
    '/cmd',
    '/console',
    '/debug',
    '/test',
    '/tmp',
    '/temp',
    '/upload',
    '/uploads',
    '/files',
    '/file',
    '/download',
    '/downloads',
    '/logs',
    '/log',
    '/error',
    '/errors',
    '/cgi-bin',
    '/scripts',
    '/script',
    '/bin',
    '/etc',
    '/var',
    '/usr',
    '/root',
    '/home',
    '/proc',
    '/sys'
  ],

  // File Upload Security
  UPLOAD: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain'
    ],
    BLOCKED_EXTENSIONS: [
      '.php',
      '.asp',
      '.aspx',
      '.jsp',
      '.js',
      '.html',
      '.htm',
      '.exe',
      '.bat',
      '.cmd',
      '.sh',
      '.ps1',
      '.vbs',
      '.jar',
      '.war',
      '.ear'
    ]
  },

  // Input Validation
  INPUT: {
    MAX_LENGTH: {
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
  },

  // Security Headers
  HEADERS: {
    HSTS_MAX_AGE: 63072000, // 2 years
    CSP_REPORT_URI: '/api/security/csp-report',
    PERMISSIONS_POLICY: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
      'browsing-topics=()',
      'payment=()',
      'usb=()',
      'serial=()',
      'bluetooth=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()'
    ].join(', ')
  },

  // Encryption
  ENCRYPTION: {
    ALGORITHM: 'aes-256-gcm',
    KEY_LENGTH: 32,
    IV_LENGTH: 16,
    TAG_LENGTH: 16
  },

  // JWT Configuration
  JWT: {
    ALGORITHM: 'HS256' as const,
    EXPIRES_IN: '24h',
    ISSUER: 'datagen.in',
    AUDIENCE: 'datagen-users'
  },

  // Session Management
  SESSION: {
    COOKIE_NAME: 'datagen-session',
    MAX_AGE: 24 * 60 * 60 * 1000, // 24 hours
    SECURE: true,
    HTTP_ONLY: true,
    SAME_SITE: 'strict' as const
  },

  // CSRF Protection
  CSRF: {
    TOKEN_LENGTH: 32,
    EXPIRES_IN: 60 * 60 * 1000, // 1 hour
    COOKIE_NAME: 'datagen-csrf'
  },

  // Monitoring and Logging
  MONITORING: {
    LOG_RETENTION_DAYS: 30,
    ALERT_THRESHOLDS: {
      FAILED_LOGINS: 5,
      SUSPICIOUS_REQUESTS: 10,
      RATE_LIMIT_HITS: 3
    }
  }
};

// Environment-specific overrides
if (process.env.NODE_ENV === 'development') {
  // Allow localhost origins in development
  SECURITY_CONFIG.CSP.CONNECT_SRC.push('http://localhost:*');
  SECURITY_CONFIG.CSP.SCRIPT_SRC.push("'unsafe-eval'");
}

export default SECURITY_CONFIG;
