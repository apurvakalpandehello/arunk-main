//NAV
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const megaMenuItems = document.querySelectorAll('.nav-item.has-mega-menu');

    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    navToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    megaMenuItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                e.preventDefault(); 
                const isOpen = item.classList.contains('open');
                
                megaMenuItems.forEach(otherItem => otherItem.classList.remove('open'));
                
                if (!isOpen) {
                    item.classList.add('open');
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
            megaMenuItems.forEach(item => item.classList.remove('open'));
        }
    });
});

// =======================
//     hero section
//     =======================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Animation on Load
    const tl = gsap.timeline();

    tl.from(".parallax-img", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    })
    .from(".hero-text-reveal > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
    }, "-=0.8")
    .from(".back-portfolio-btn", {
        x: -30,
        opacity: 0,
        duration: 0.8
    }, "-=1");

    // 2. Mouse Move 3D Effect
    const section = document.querySelector('.hero-3d-section');
    const img = document.querySelector('.parallax-img');

    section.addEventListener('mousemove', (e) => {
        const xVal = (e.clientX / window.innerWidth - 0.5) * 40;
        const yVal = (e.clientY / window.innerHeight - 0.5) * 40;

        gsap.to(img, {
            x: xVal,
            y: yVal,
            duration: 1.2,
            ease: "power1.out"
        });
    });
});


// ===================
//     The Vision
//     ===================

// 1. Initial GSAP Animation on Scroll
gsap.from(".vision-left-content > *", {
    scrollTrigger: {
        trigger: ".vision-brief-section",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power4.out"
});

gsap.from(".brief-card-3d", {
    scrollTrigger: {
        trigger: ".brief-right-aside",
        start: "top 80%",
    },
    rotateY: -30,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

// 2. 3D Mouse Tilt Effect for Brief Card
const briefCard = document.querySelector('.brief-card-3d');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    
    if (window.innerWidth > 1024) {
        briefCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    }
});

// =====================
//     project gallary
//     =====================

const track = document.querySelector('.gallery-track');

track.addEventListener('mouseenter', () => {

    track.style.animationPlayState = 'paused';

});

track.addEventListener('mouseleave', () => {

    track.style.animationPlayState = 'running';

});



//FOOTER
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  // Dynamically assign staggering delay values to grid items
  const columns = document.querySelectorAll(".footer-layout-grid .grid-column");
  columns.forEach((col, index) => {
    col.classList.add(`delay-${index + 1}`);
  });

  // Intersection Observer for Smooth Entry Animations
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before entering viewport
  };

  const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    appearanceObserver.observe(element);
  });
});