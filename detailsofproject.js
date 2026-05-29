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

// =======================
//     hero section
//     =======================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Animation on Load
  const tl = gsap.timeline();

  tl.from(".parallax-img", {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  })
    .from(
      ".hero-text-reveal > *",
      {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.8",
    )
    .from(
      ".back-portfolio-btn",
      {
        x: -30,
        opacity: 0,
        duration: 0.8,
      },
      "-=1",
    );

  // 2. Mouse Move 3D Effect
  const section = document.querySelector(".hero-3d-section");
  const img = document.querySelector(".parallax-img");

  section.addEventListener("mousemove", (e) => {
    const xVal = (e.clientX / window.innerWidth - 0.5) * 40;
    const yVal = (e.clientY / window.innerHeight - 0.5) * 40;

    gsap.to(img, {
      x: xVal,
      y: yVal,
      duration: 1.2,
      ease: "power1.out",
    });
  });
});

// ===================
//     The Vision
//     ===================

// GSAP Animations
gsap.from(".vision-left-content > *", {
  scrollTrigger: { trigger: ".vision-brief-section", start: "top 80%" },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power4.out",
});

// Highlights Fade In
gsap.from(".highlight-item", {
  scrollTrigger: { trigger: ".key-highlights-wrapper", start: "top 85%" },
  x: -30,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".brief-card-3d", {
  scrollTrigger: { trigger: ".brief-right-aside", start: "top 80%" },
  rotateY: -30,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// 3D Mouse Tilt Effect
const briefCard = document.querySelector(".brief-card-3d");
document.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
  if (window.innerWidth > 1024) {
    briefCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
  }
});
// =====================
//     project gallary
//     =====================

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".gallery-track");
    if (track) {
        // जुने सरकणारे ॲनिमेशन पूर्णपणे थांबवून ठेवणे
        track.style.animationPlayState = "paused";
    }
});

// इमेजेसवर क्लिक झाल्यावर ट्रॅक करण्यासाठी छोटा कोड
const images = document.querySelectorAll('.scroller-inner img');
images.forEach(img => {
    img.addEventListener('click', () => {
        console.log("इमेज पाथ: " + img.src);
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
