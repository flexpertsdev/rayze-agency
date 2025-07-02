import { gsap } from 'gsap';

export class LoadingScreen {
  constructor() {
    this.screen = document.querySelector('.loading-screen');
    this.progress = document.querySelector('.loading-progress');
    this.callbacks = [];
    
    this.init();
  }
  
  init() {
    // Simulate loading
    this.simulateLoading();
  }
  
  simulateLoading() {
    // Animate progress bar
    gsap.to(this.progress, {
      scaleX: 1,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: () => this.hideScreen()
    });
  }
  
  hideScreen() {
    gsap.to(this.screen, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        this.screen.style.display = 'none';
        this.executeCallbacks();
      }
    });
  }
  
  onComplete(callback) {
    this.callbacks.push(callback);
  }
  
  executeCallbacks() {
    this.callbacks.forEach(callback => callback());
  }
}