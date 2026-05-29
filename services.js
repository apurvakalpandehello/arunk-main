//NAVBAR
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");

  function toggleMenu() {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  navToggle.addEventListener("click", toggleMenu);
  navOverlay.addEventListener("click", toggleMenu);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      navOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

// ==========================================
// 2. HERO PREMIUM WRAP (GSAP & 3D TILT)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Entrance Animation
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        tl.from(".hero-shape", {
            duration: 2,
            opacity: 0,
            scale: 0.5,
            stagger: 0.5,
            ease: "power4.out"
        })
        .from(".hero-mini-tag", {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=1")
        .from(".title-line", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "expo.out"
        }, "-=0.5")
        .from(".hero-description-box, .hero-actions", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        }, "-=0.5");
    }

    // 3D Tilt Effect for Hero Card
    const card = document.querySelector('.card-glass');
    const wrap = document.querySelector('.hero-premium-wrap');

    if (card && wrap) {
        wrap.addEventListener('mousemove', (e) => {
            if(window.innerWidth > 1024) {
                let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });

        wrap.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            card.style.transition = "all 0.5s ease";
        });

        wrap.addEventListener('mouseenter', () => {
            card.style.transition = "none";
        });
    }
});

// ==========================================
// 3. SECTIONS WORKSPACE (ALL SERVICES PARALLAX & TILT)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // सर्व इमेजेस एकाच वेळी सिलेक्ट करून पॅरालॅक्स इफेक्ट लावणे (एरर टाळण्यासाठी)
    const allImages = document.querySelectorAll('.arch-img');
    
    if (allImages.length > 0) {
        window.addEventListener('scroll', () => {
            allImages.forEach(img => {
                img.style.transform = `scale(1) translateY(${window.scrollY * 0.12}px)`;
            });
        }, { passive: true });
    }

    // सर्व कंटेंट पॅनेल्सना लूपद्वारे 3D टिल्ट इफेक्ट लावणे
    const allPanels = document.querySelectorAll('.content-panel');
    
    allPanels.forEach(panel => {
        panel.addEventListener('mousemove', e => {
            const r  = panel.getBoundingClientRect();
            const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
            const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
            panel.style.transition = 'transform 0.12s ease';
            panel.style.transform  = `perspective(1200px) rotateX(${-dy * 1.5}deg) rotateY(${dx * 1.5}deg)`;
        });

        panel.style.backfaceVisibility = 'hidden'; // स्मूथ ॲनिमेशनसाठी

        panel.addEventListener('mouseleave', () => {
            panel.style.transition = 'transform 0.65s cubic-bezier(0.23,1,0.32,1)';
            panel.style.transform  = '';
        });
    });
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
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before entering viewport
  };

  const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    appearanceObserver.observe(element);
  });
});