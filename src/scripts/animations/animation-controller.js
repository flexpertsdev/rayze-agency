import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class AnimationController {
  constructor() {
    this.animations = [];
  }
  
  init() {
    this.setupTextAnimations();
    this.setupFadeAnimations();
    this.setupParallax();
  }
  
  setupTextAnimations() {
    // Manza-style text reveal animations
    const textElements = document.querySelectorAll('.span-hlines');
    
    textElements.forEach(element => {
      const lines = element.querySelectorAll('.span-hline');
      
      lines.forEach(line => {
        ScrollTrigger.create({
          trigger: line,
          start: 'top 80%',
          onEnter: () => line.classList.add('is-visible'),
          once: true
        });
      });
    });
    
    // Paragraph line animations
    const plineElements = document.querySelectorAll('.span-plines');
    
    plineElements.forEach(element => {
      const lines = element.querySelectorAll('.span-pline');
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          lines.forEach(line => line.classList.add('is-visible'));
        },
        once: true
      });
    });
  }
  
  setupFadeAnimations() {
    // Fade animations
    const fadeElements = document.querySelectorAll('.fade-in, .fade-up, .scale-in');
    
    fadeElements.forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => element.classList.add('is-visible'),
        once: true
      });
    });
  }
  
  setupParallax() {
    // Parallax elements
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 'medium';
      const speedMap = {
        slow: 0.5,
        medium: 0.75,
        fast: 1.25
      };
      
      gsap.to(element, {
        y: () => window.innerHeight * speedMap[speed],
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }
}