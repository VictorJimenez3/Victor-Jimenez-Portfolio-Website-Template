// Project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured online store with product listings, shopping cart, and secure checkout.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 2,
    title: 'Portfolio Redesign',
    description: 'A modern, responsive redesign of a personal portfolio using clean aesthetics and smooth animations.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and collaborating with team members.',
    image: 'https://images.pexels.com/photos/6925154/pexels-photo-6925154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'React', 'CSS3', 'Firebase'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecast data, interactive maps, and location search.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'API', 'CSS3', 'Responsive'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'Find and save recipes based on ingredients you have, dietary preferences, and cuisine types.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'API', 'CSS3', 'Responsive'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Track workouts, set goals, and monitor progress with this comprehensive fitness application.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'Chart.js', 'CSS3', 'LocalStorage'],
    demoLink: '#',
    codeLink: '#'
  }
];

// Function to create a project card
function createProjectCard(project) {
  return `
    <div class="project-card reveal">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay">
          <div class="project-actions">
            <a href="${project.demoLink}" class="project-action" title="View Demo" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a href="${project.codeLink}" class="project-action" title="View Code" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-footer">
          <a href="${project.demoLink}" class="project-link" target="_blank">
            View Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Setup projects
export function setupProjects() {
  const projectGrid = document.querySelector('.project-grid');
  
  if (projectGrid) {
    // Generate project cards
    const projectCards = projects.map(project => createProjectCard(project)).join('');
    projectGrid.innerHTML = projectCards;
  }
}