export function setupResume() {
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));

  // Handle PDF download (you'll need to add your actual resume PDF)
  const downloadBtn = document.querySelector('.resume-header .btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      // If no PDF is available yet, prevent download
      if (!downloadBtn.getAttribute('href')) {
        e.preventDefault();
        alert('Resume PDF is currently being updated. Please check back later!');
      }
    });
  }
}