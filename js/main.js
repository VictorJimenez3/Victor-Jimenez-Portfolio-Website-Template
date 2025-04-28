import { setupProjects } from './projects.js';
import { setupAnimations } from './animations.js';
import { setupLightbox } from './lightbox.js';
import { setupResume } from './resume.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Setup projects
  setupProjects();
  
  // Setup animations
  setupAnimations();
  
  // Setup navigation
  setupNavigation();
  
  // Setup contact form
  setupContactForm();
  
  // Setup lightbox
  setupLightbox();
  
  // Setup resume
  setupResume();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Navigation setup
function setupNavigation() {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Handle scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = 'var(--shadow-md)';
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
  });
  
  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate menu toggle
    const spans = menuToggle.querySelectorAll('span');
    if (menuToggle.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Close mobile menu if open
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      
      // Reset menu toggle
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
      
      // Scroll to target
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    });
  });
  
  // Set active nav link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Add offset to make link activate before section hits top
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Add offset
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current link
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
      }
    });
  }
  
  // Initial update of active nav link
  updateActiveNavLink();
}

// Contact form setup
function setupContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', formValues);
      
      // Show success message (in a real app, you'd want to handle this better)
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
}