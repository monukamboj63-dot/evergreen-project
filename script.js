// Modern UI Interactions for Evergreen Jim Corbett

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for nav links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animate hero button
  const heroBtn = document.querySelector('.hero button');
  if (heroBtn) {
    heroBtn.addEventListener('mouseenter', () => {
      heroBtn.style.transform = 'scale(1.08)';
      heroBtn.style.boxShadow = '0 4px 16px #ff9800a0';
    });
    heroBtn.addEventListener('mouseleave', () => {
      heroBtn.style.transform = '';
      heroBtn.style.boxShadow = '';
    });
  }

  // Card hover effect
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.add('hover');
    });
    card.addEventListener('touchend', () => {
      card.classList.remove('hover');
    });
  });

  // Handle booking form submission
  const bookingForm = document.querySelector('form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleFormSubmit);
  }
});

// Simple form submission handler
function handleFormSubmit(e) {
  // Allow default form submission
  // FormSpree will handle the email delivery
}

// CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
