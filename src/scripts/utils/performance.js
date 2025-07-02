export class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }
  
  init() {
    // Web Vitals
    if ('PerformanceObserver' in window) {
      this.observeLCP();
      this.observeFID();
      this.observeCLS();
      this.observeFCP();
      this.observeTTFB();
    }
    
    // Custom metrics
    this.measureLoadTime();
  }
  
  observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        console.log('LCP:', this.metrics.lcp);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP not supported');
    }
  }
  
  observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        this.metrics.fid = firstEntry.processingStart - firstEntry.startTime;
        console.log('FID:', this.metrics.fid);
      });
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID not supported');
    }
  }
  
  observeCLS() {
    try {
      let clsValue = 0;
      let clsEntries = [];
      
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = clsEntries[0];
            const lastSessionEntry = clsEntries[clsEntries.length - 1];
            
            if (entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
              clsValue += entry.value;
              clsEntries.push(entry);
            } else {
              clsValue = entry.value;
              clsEntries = [entry];
            }
            
            this.metrics.cls = clsValue;
            console.log('CLS:', this.metrics.cls);
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS not supported');
    }
  }
  
  observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
          console.log('FCP:', this.metrics.fcp);
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP not supported');
    }
  }
  
  observeTTFB() {
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        this.metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', this.metrics.ttfb);
      }
    } catch (e) {
      console.warn('TTFB not supported');
    }
  }
  
  measureLoadTime() {
    window.addEventListener('load', () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        this.metrics.loadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
        console.log('Load Time:', this.metrics.loadTime);
      }
    });
  }
  
  getMetrics() {
    return this.metrics;
  }
  
  sendMetrics() {
    // Send metrics to analytics service
    if (window.gtag) {
      Object.entries(this.metrics).forEach(([metric, value]) => {
        window.gtag('event', 'web_vitals', {
          metric_name: metric,
          metric_value: value,
          metric_unit: 'ms'
        });
      });
    }
  }
}