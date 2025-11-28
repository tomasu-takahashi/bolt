document.addEventListener('DOMContentLoaded', function() {
  
  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;
  
  function closeMobileMenu() {
    if (menuToggle && mobileMenu && mobileMenuOverlay) {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      body.style.overflow = '';
    }
  }
  
  function openMobileMenu() {
    if (menuToggle && mobileMenu && mobileMenuOverlay) {
      menuToggle.classList.add('active');
      mobileMenu.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      body.style.overflow = 'hidden';
    }
  }
  
  if (menuToggle && mobileMenu && mobileMenuOverlay) {
    menuToggle.addEventListener('click', function() {
      if (this.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
    
    mobileMenuOverlay.addEventListener('click', function() {
      closeMobileMenu();
    });

    const menuClose = document.querySelector('.menu-close');
    if (menuClose) {
      menuClose.addEventListener('click', function() {
        closeMobileMenu();
      });
    }
  }
  
  // ===== MOBILE CONTACT BUTTON =====
  const contactBtnMobile = document.querySelector('.contact-btn-mobile');
  
  if (contactBtnMobile) {
    contactBtnMobile.addEventListener('click', function(e) {
      e.preventDefault();
      
      closeMobileMenu();
      
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
  
  // ===== HEADER SCROLL EFFECT =====
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
  
  
  // ===== SMOOTH SCROLL FOR CONTACT BUTTON =====
  const contactBtn = document.querySelector('.contact-btn');
  
  if (contactBtn) {
    contactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
  
  // ===== EMAIL BUTTON =====
  const emailBtn = document.querySelector('.email-btn');
  
  if (emailBtn) {
    emailBtn.addEventListener('click', function(e) {
      e.preventDefault();
    });
  }
  
  // ===== WORK GALLERY HOVER EFFECT =====
  const workItems = document.querySelectorAll('.work-item');
  
  workItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
    });
    
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // ===== FADE IN ON SCROLL =====
  const sections = document.querySelectorAll('section, article, nav.sns');
  
  function fadeInOnScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.85 && sectionBottom > windowHeight * 0.15) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      } 
      else if (sectionBottom <= windowHeight * 0.15) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(-30px)';
      }
      else {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
      }
    });
  }
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  window.addEventListener('scroll', fadeInOnScroll);
  // Trigger on load
  fadeInOnScroll();
  
  
  // ===== SOCIAL ICONS INTERACTION =====
  const socialIcons = document.querySelectorAll('.social-icon');
  
  socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
      }
      
      this.style.transform = 'scale(0.9)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      }, 150);
    });
    
    icon.style.transition = 'color 0.3s ease, transform 0.3s ease';
  });
  
  
  // ===== LOGO ANIMATION ON CLICK =====
  const logo = document.querySelector('.logo');
  
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      const logoIcon = this.querySelector('i');
      if (logoIcon) {
        const originalColor = window.getComputedStyle(logoIcon).color;
        logoIcon.style.transition = 'color 0.4s ease';
        logoIcon.style.color = '#74cfae';
        
        setTimeout(() => {
          logoIcon.style.color = originalColor;
        }, 400);
      }
    });
  }
  
  
  // ===== SKILLS ANIMATION ON SCROLL =====
  const skillsSection = document.querySelector('.our-skills');
  const skillImages = document.querySelectorAll('.skill img');
  
  function animateSkills() {
    if (!skillsSection) return;
    
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.7 && sectionBottom > windowHeight * 0.3) {
      skillImages.forEach((img, index) => {
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
          img.style.opacity = '1';
          img.style.transform = 'scale(1)';
        }, index * 150);
      });
    } else {
      skillImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.5)';
      });
    }
  }
  
  skillImages.forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.5)';
  });
  
  window.addEventListener('scroll', animateSkills);
  animateSkills();  
});
