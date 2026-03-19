/**
 * Performance Configuration
 * Google Web Vitals targets and optimization settings
 */

/**
 * Core Web Vitals Targets (as per Google standards)
 * - Good: LCP < 2.5s, FID < 100ms, CLS < 0.1
 * - Needs Improvement: LCP 2.5-4s, FID 100-300ms, CLS 0.1-0.25
 * - Poor: LCP > 4s, FID > 300ms, CLS > 0.25
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
  TTFB: {
    good: 800,
    needsImprovement: 1800,
  },
};

/**
 * Image Optimization Settings
 */
export const IMAGE_OPTIMIZATION = {
  enableLazyLoading: true,
  lazyLoadThreshold: '50px',
  responsiveImageSizes: ['320px', '640px', '1024px', '1280px', '1920px'],
  placeholderQuality: 10, // LQIP - Low Quality Image Placeholder
};

/**
 * Bundle Splitting Strategy
 */
export const BUNDLE_CONFIG = {
  splitChunks: {
    // React and Router - critical for app functionality
    react: ['react', 'react-dom', 'react-router'],
    // Animation library
    motion: ['motion'],
    // 3D graphics and visualization
    graphics: ['three', 'postprocessing'],
    // UI component library
    ui: ['@radix-ui', '@emotion'],
    // Other vendors
    vendor: ['node_modules'],
  },
  minChunkSize: 20000, // 20KB minimum chunk size
};

/**
 * CSS Optimization Settings
 */
export const CSS_OPTIMIZATION = {
  // Remove unused CSS with PurgeCSS
  purgeUnused: true,
  // Enable CSS code splitting
  codeSplit: true,
  // Inline critical CSS
  inlineCritical: true,
};

/**
 * Network Optimization
 */
export const NETWORK_OPTIMIZATION = {
  // Prefetch routes for navigation
  prefetchRoutes: ['/about', '/services', '/products'],
  // DNS prefetch for third-party services
  dnsPrefetch: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
  // Preconnect for critical domains
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
};

/**
 * Script Loading Strategy
 */
export const SCRIPT_LOADING = {
  // Load scripts asynchronously by default
  async: true,
  // Defer non-critical scripts
  defer: true,
  // Remove console.log in production
  removeConsoleInProd: true,
};

/**
 * Cache Settings
 */
export const CACHE_CONFIG = {
  // Cache buster version
  version: 'v1',
  // Service Worker enabled
  enableServiceWorker: false, // Can be enabled later
  // Browser cache max age
  cacheDuration: {
    html: '0s', // Don't cache HTML
    js: '31536000s', // Cache JS for 1 year
    css: '31536000s', // Cache CSS for 1 year
    images: '2592000s', // Cache images for 30 days
    fonts: '31536000s', // Cache fonts for 1 year
  },
};

/**
 * Performance Monitoring Settings
 */
export const MONITORING = {
  // Enable Web Vitals reporting
  enableWebVitals: true,
  // Send metrics to analytics
  sendMetrics: true,
  // Metrics endpoint
  metricsEndpoint: '/api/metrics',
  // Enable performance observer
  enablePerformanceObserver: true,
  // Log performance metrics in console (dev only)
  logToConsole: true,
};

/**
 * Get performance configuration
 */
export const getPerformanceConfig = () => ({
  webVitals: WEB_VITALS_THRESHOLDS,
  images: IMAGE_OPTIMIZATION,
  bundle: BUNDLE_CONFIG,
  css: CSS_OPTIMIZATION,
  network: NETWORK_OPTIMIZATION,
  scripts: SCRIPT_LOADING,
  cache: CACHE_CONFIG,
  monitoring: MONITORING,
});
