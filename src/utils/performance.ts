/**
 * Web Vitals and Performance Monitoring Utility
 * Tracks Google Core Web Vitals: LCP, FID, CLS, FCP, TTFB
 */

interface MetricDetails {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

/**
 * Send performance data to analytics
 * Replace the endpoint with your actual analytics service
 */
export const sendPerformanceData = (metric: MetricDetails) => {
  // Console logging for development
  if (import.meta.env.DEV) {
    console.log('Web Vital:', {
      name: metric.name,
      value: `${Math.round(metric.value)}ms`,
      rating: metric.rating,
    });
  }

  // Send to your analytics endpoint
  if (navigator.sendBeacon) {
    const body = JSON.stringify(metric);
    navigator.sendBeacon('/api/metrics', body);
  }
};

/**
 * Monitor Core Web Vitals
 */
export const initializeWebVitals = async () => {
  try {
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');

    onCLS(sendPerformanceData);
    onFID(sendPerformanceData);
    onFCP(sendPerformanceData);
    onLCP(sendPerformanceData);
    onTTFB(sendPerformanceData);
  } catch (error) {
    console.warn('Web Vitals library not available:', error);
  }
};

/**
 * Measure component render time
 */
export const measureComponentRender = (componentName: string, fn: () => void) => {
  if (!import.meta.env.PROD) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${componentName} rendered in ${Math.round(end - start)}ms`);
  } else {
    fn();
  }
};

/**
 * Optimize image loading with Intersection Observer
 */
export const setupImageLazyLoading = () => {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach((img) => {
      const src = img.getAttribute('data-src');
      if (src) {
        (img as HTMLImageElement).src = src;
      }
    });
  }
};

/**
 * Prefetch resources for known navigation paths
 */
export const prefetchResources = (urls: string[]) => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Get performance metrics summary
 */
export const getPerformanceSummary = (): Record<string, string> => {
  if (!performance.getEntriesByType) {
    return {};
  }

  const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

  if (!navigationTiming) {
    return {};
  }

  return {
    'DNS Lookup': `${Math.round(navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart)}ms`,
    'TCP Connection': `${Math.round(navigationTiming.connectEnd - navigationTiming.connectStart)}ms`,
    'Time to First Byte': `${Math.round(navigationTiming.responseStart - navigationTiming.requestStart)}ms`,
    'DOM Content Loaded': `${Math.round(navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart)}ms`,
    'Page Load Time': `${Math.round(navigationTiming.loadEventEnd - navigationTiming.loadEventStart)}ms`,
  };
};
