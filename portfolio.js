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

// ====================
//     our portfolio
// ====================

document.addEventListener("DOMContentLoaded", () => {
    // Reveal Header Text Animation
    gsap.from(".reveal-text", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power4.out"
    });

    gsap.from(".fade-in-text", {
        duration: 1.5,
        opacity: 0,
        delay: 0.4,
        ease: "power2.out"
    });

    // Animate Cards into view
    gsap.from(".portfolio-card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2, // Ek-maagun-ek cards yetil
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 80%"
        }
    });
});


// =======================
//     featured-projects 
// =======================

/* =========================
   3D HOVER ANIMATION
========================= */

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {

  card.addEventListener('mousemove', e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
      scale(1.02)
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;

  });

});


  // =========================
  //   stats-section
  //   =========================

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Reveal Animation for Header
    gsap.from(".adcpl-stats-header", {
        scrollTrigger: {
            trigger: ".adcpl-stats-section",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 2. Counter Logic with new Class names
    const adcplCounters = document.querySelectorAll('.adcpl-counter');
    
    const runAdcplCounter = (el) => {
        const target = +el.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                el.innerText = Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                el.innerText = target + "+";
            }
        };
        update();
    };

    // Trigger counter on scroll
    ScrollTrigger.create({
        trigger: ".adcpl-stats-grid",
        start: "top 85%",
        onEnter: () => {
            adcplCounters.forEach(counter => runAdcplCounter(counter));
        }
    });

    // 3. Staggered reveal for cards
    gsap.from(".adcpl-stats-card", {
        scrollTrigger: {
            trigger: ".adcpl-stats-grid",
            start: "top 85%"
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
});


// ========================
//     All Projects
// ========================

/**
     * 3D Tilt Interaction
     */
    const plItems = document.querySelectorAll('.portfolio-lux-item');

    plItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Tilt Intensity
            const tiltX = (mouseY - centerY) / 12;
            const tiltY = (centerX - mouseX) / 12;

            item.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
            item.style.boxShadow = `${-tiltY * 3}px ${tiltX * 3}px 50px rgba(0,0,0,0.2)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            item.style.boxShadow = `0 15px 45px rgba(30,61,47,0.08)`;
        });
    });

    /**
     * Scroll Entrance Observer
     */
    const plObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for each card
                setTimeout(() => {
                    entry.target.classList.add('is-revealed');
                }, index * 100);
                plObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    plItems.forEach(item => plObserver.observe(item));


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