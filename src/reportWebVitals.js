import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

export function sendToAnalytics(metric) {
  // Replace this function with your own implementation for sending the metric data to analytics.
  console.log(metric);
}

function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}

export default reportWebVitals;
