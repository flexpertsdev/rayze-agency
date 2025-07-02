import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Import components
import { Navigation } from './components/navigation.js';
import { AnimationController } from './animations/animation-controller.js';
import { LoadingScreen } from './components/loading-screen.js';
import { renderServiceCards } from './data/services.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Update ScrollTrigger on scroll
lenis.on('scroll', ScrollTrigger.update);

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  // Loading screen
  const loadingScreen = new LoadingScreen();
  
  // Navigation
  const navigation = new Navigation();
  
  // Animation controller
  const animationController = new AnimationController();
  
  // Render service cards
  const servicesGrid = document.querySelector('.services-grid');
  if (servicesGrid) {
    renderServiceCards(servicesGrid);
  }
  
  // Initialize animations after loading
  loadingScreen.onComplete(() => {
    animationController.init();
  });
});