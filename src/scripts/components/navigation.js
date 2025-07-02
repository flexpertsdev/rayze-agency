export class Navigation {
  constructor() {
    this.header = document.querySelector('.header');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.isOpen = false;
    this.lastScroll = 0;
    
    this.init();
  }
  
  init() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMenu());
    }
    
    // Scroll behavior
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Close menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
    document.body.classList.toggle('nav-open', this.isOpen);
    
    // Animate toggle lines
    const lines = this.navToggle.querySelectorAll('.nav-toggle-line');
    if (this.isOpen) {
      lines[0].style.transform = 'rotate(45deg) translateY(6px)';
      lines[1].style.transform = 'rotate(-45deg) translateY(-6px)';
    } else {
      lines[0].style.transform = '';
      lines[1].style.transform = '';
    }
  }
  
  closeMenu() {
    this.isOpen = false;
    document.body.classList.remove('nav-open');
    
    const lines = this.navToggle.querySelectorAll('.nav-toggle-line');
    lines[0].style.transform = '';
    lines[1].style.transform = '';
  }
  
  handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Add background on scroll
    if (currentScroll > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
    
    // Hide/show on scroll
    if (currentScroll > this.lastScroll && currentScroll > 100) {
      this.header.classList.add('hidden');
    } else {
      this.header.classList.remove('hidden');
    }
    
    this.lastScroll = currentScroll;
  }
}