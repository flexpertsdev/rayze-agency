export const services = [
  {
    id: 'seo',
    title: 'SEO & Technical SEO',
    description: 'Drive organic growth with data-driven SEO strategies and technical optimization.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>`,
    features: [
      'Technical SEO Audits',
      'Core Web Vitals Optimization',
      'Schema Markup Implementation',
      'Content Strategy'
    ],
    link: '/services/seo'
  },
  {
    id: 'ppc',
    title: 'PPC & Paid Media',
    description: 'Maximize ROI with strategic paid advertising across all major platforms.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>`,
    features: [
      'Google Ads Management',
      'Facebook & Instagram Ads',
      'LinkedIn B2B Campaigns',
      'Conversion Rate Optimization'
    ],
    link: '/services/ppc'
  },
  {
    id: 'technical',
    title: 'Technical Marketing',
    description: 'Bridge the gap between marketing and technology with advanced implementations.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>`,
    features: [
      'Marketing Automation',
      'API Integrations',
      'Custom Tracking Solutions',
      'Data Pipeline Development'
    ],
    link: '/services/technical'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Engage audiences with personalized email campaigns that convert.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>`,
    features: [
      'Campaign Strategy',
      'Automation Workflows',
      'A/B Testing',
      'Performance Analytics'
    ],
    link: '/services/email'
  },
  {
    id: 'platforms',
    title: 'Platform Management',
    description: 'Expert management of your marketing technology stack and platforms.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>`,
    features: [
      'HubSpot Administration',
      'Salesforce Integration',
      'Google Analytics Setup',
      'Tag Management'
    ],
    link: '/services/platforms'
  },
  {
    id: 'consulting',
    title: 'Strategy Consulting',
    description: 'Strategic guidance to align your marketing efforts with business goals.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`,
    features: [
      'Marketing Audits',
      'Growth Strategy',
      'Team Training',
      'Process Optimization'
    ],
    link: '/services/consulting'
  }
];

export function renderServiceCards(container) {
  const html = services.map(service => `
    <article class="service-card fade-up">
      <div class="service-icon">
        ${service.icon}
      </div>
      <h3 class="service-title font-heading">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <ul class="service-features mt-4 space-y-2">
        ${service.features.map(feature => `
          <li class="text-sm text-text-grey flex items-center">
            <svg class="w-4 h-4 mr-2 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            ${feature}
          </li>
        `).join('')}
      </ul>
      <a href="${service.link}" class="inline-flex items-center mt-6 text-brand hover:text-brand-dark transition-colors">
        Learn More 
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  `).join('');
  
  container.innerHTML = html;
}