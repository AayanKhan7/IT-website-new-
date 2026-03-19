
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { initializeWebVitals, setupImageLazyLoading } from "./utils/performance";

// Performance monitoring for Core Web Vitals
if (import.meta.env.PROD) {
  initializeWebVitals();
  
  // Setup lazy loading for images
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupImageLazyLoading);
  } else {
    setupImageLazyLoading();
  }
}

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh',
    background: '#040812',
    color: '#e8efff',
    fontSize: '16px'
  }}>
    <p>Loading...</p>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);
  