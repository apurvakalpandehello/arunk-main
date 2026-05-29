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

// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");

  if (!navToggle || !navMenu || !navOverlay) return;

  function toggleMenu() {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
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

// CONTACT HERO ANIMATION CONTROL (Completely Independent)
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".contact-hero-subtitle");
  const title = document.querySelector(".contact-hero-title");
  const divider = document.querySelector(".contact-hero-divider");
  const desc = document.querySelector(".contact-hero-desc");

  if (title) {
    // Triggers smooth load animation inside the isolated contact hero bounds
    setTimeout(() => {
      if(subtitle) subtitle.classList.add("contact-hero-active");
      title.classList.add("contact-hero-active");
      if(divider) divider.classList.add("contact-hero-active");
      if(desc) desc.classList.add("contact-hero-active");
    }, 200);
  }
});

// FOOTER & SCROLL REVEAL (Safe & Optimized)
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  const columns = document.querySelectorAll(".footer-layout-grid .grid-column");
  columns.forEach((col, index) => {
    col.classList.add(`delay-${index + 1}`);
  });

  const observerOptions = {
    root: null,
    threshold: 0.01,                 // १% भाग दिसताच ट्रिगर होईल
    rootMargin: "0px 0px 150px 0px"  // स्क्रीन संपण्यापूर्वीच लोड कमांड पाठवेल
  };

  const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    appearanceObserver.observe(element);
  });

  // GUARANTEED REVEAL BACKUP MOTOR
  setTimeout(() => {
    animatedElements.forEach((element) => {
      if (!element.classList.contains("active")) {
        element.classList.add("active");
      }
    });
  }, 1200);
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



// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");

  if (!navToggle || !navMenu || !navOverlay) return;

  function toggleMenu() {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
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

// CONTACT HERO ANIMATION CONTROL (Completely Independent)
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".contact-hero-subtitle");
  const title = document.querySelector(".contact-hero-title");
  const divider = document.querySelector(".contact-hero-divider");
  const desc = document.querySelector(".contact-hero-desc");

  if (title) {
    // Triggers smooth load animation inside the isolated contact hero bounds
    setTimeout(() => {
      if(subtitle) subtitle.classList.add("contact-hero-active");
      title.classList.add("contact-hero-active");
      if(divider) divider.classList.add("contact-hero-active");
      if(desc) desc.classList.add("contact-hero-active");
    }, 200);
  }
});

// FOOTER & SCROLL REVEAL (Safe & Optimized)
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  const columns = document.querySelectorAll(".footer-layout-grid .grid-column");
  columns.forEach((col, index) => {
    col.classList.add(`delay-${index + 1}`);
  });

  const observerOptions = {
    root: null,
    threshold: 0.01,                 // १% भाग दिसताच ट्रिगर होईल
    rootMargin: "0px 0px 150px 0px"  // स्क्रीन संपण्यापूर्वीच लोड कमांड पाठवेल
  };

  const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    appearanceObserver.observe(element);
  });

  // GUARANTEED REVEAL BACKUP MOTOR
  setTimeout(() => {
    animatedElements.forEach((element) => {
      if (!element.classList.contains("active")) {
        element.classList.add("active");
      }
    });
  }, 1200);
});


// // INTERACTIVE FORM PROCESSING ENGINE
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("adcplContactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Default Page refresh थाबवण्यासाठी

      const submitBtn = contactForm.querySelector(".form-submit-btn");
      const btnText = contactForm.querySelector(".submit-txt");
      
      // Animations on click state
      btnText.textContent = "Transmitting...";
      submitBtn.style.opacity = "0.7";
      submitBtn.style.pointerEvents = "none";

      // Micro delay to simulate smooth network transmission
      setTimeout(() => {
        alert("Thank you! Your architectural brief has been securely transmitted to ADCPL.");
        contactForm.reset(); // Clear form values
        
        // Reset Button layout state
        btnText.textContent = "Transmit Brief";
        submitBtn.style.opacity = "1";
        submitBtn.style.pointerEvents = "auto";
      }, 1500);
    });
  }
});