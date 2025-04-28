// Handle scroll animations
export function setupAnimations() {
  // Scroll reveal for elements with 'reveal' class
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // How many pixels from the bottom of the viewport to start the animation
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        // Uncomment the line below if you want elements to hide again when scrolled past
        // element.classList.remove('active');
      }
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check to reveal elements that are already in view
  revealOnScroll();
  
  // Handle parallax effects
  setupParallax();
  
  // Handle typed text effect (if needed)
  setupTypedEffect();
}

// Parallax scrolling effect
function setupParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const scrollPosition = window.pageYOffset;
      const speed = element.dataset.speed || 0.5;
      
      // Apply parallax effect
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  });
}

// Typed text effect for headings
function setupTypedEffect() {
  const typedElements = document.querySelectorAll('[data-typed]');
  
  typedElements.forEach(element => {
    const text = element.innerText;
    element.innerText = '';
    
    let i = 0;
    let isDeleting = false;
    let currentText = '';
    let typeSpeed = 100;
    
    function type() {
      if (isDeleting) {
        currentText = text.substring(0, currentText.length - 1);
      } else {
        currentText = text.substring(0, currentText.length + 1);
      }
      
      element.innerText = currentText;
      
      if (!isDeleting && currentText === text) {
        isDeleting = true;
        typeSpeed = 50;
        setTimeout(type, 1000);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        typeSpeed = 100;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 25 : 75);
      }
    }
    
    // Start typing effect
    setTimeout(type, 1000);
  });
}

// Setup scroll indicator
function setupScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      // Hide scroll indicator after scrolling past 300px
      if (window.scrollY > 300) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
    });
    
    // Smooth scroll when clicking scroll indicator
    scrollIndicator.addEventListener('click', () => {
      const targetSection = document.getElementById('projects');
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  }
}

// Initialize scroll indicator
setupScrollIndicator();