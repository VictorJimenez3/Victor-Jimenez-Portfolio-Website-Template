// Lightbox functionality
export function setupLightbox() {
  const projectCards = document.querySelectorAll('.project-card');
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  document.body.appendChild(lightbox);

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open lightbox if clicking on action buttons
      if (e.target.closest('.project-actions')) return;
      
      const project = {
        title: card.querySelector('.project-title').textContent,
        description: card.querySelector('.project-description').textContent,
        image: card.querySelector('.project-image img').src,
        tags: Array.from(card.querySelectorAll('.project-tag')).map(tag => tag.textContent),
        demoLink: card.querySelector('.project-actions a:first-child').href,
        codeLink: card.querySelector('.project-actions a:last-child').href
      };

      openLightbox(project);
    });
  });

  // Close lightbox when clicking outside
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox with escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function openLightbox(project) {
  const lightbox = document.querySelector('.lightbox');
  
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="lightbox-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <h2 class="lightbox-title">${project.title}</h2>
      <div class="lightbox-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <p class="lightbox-description">${project.description}</p>
      <div class="lightbox-links">
        <a href="${project.demoLink}" class="btn btn-primary" target="_blank">View Demo</a>
        <a href="${project.codeLink}" class="btn btn-outline" target="_blank">View Code</a>
      </div>
    </div>
  `;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Add close button functionality
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}