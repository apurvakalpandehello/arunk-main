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

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray('.card-section');

cards.forEach((card, i) => {
    // Shevatchya card la opacity animation nako
    if (i !== cards.length - 1) {
        gsap.to(card, {
            scale: 0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false
            }
        });
    } else {
        // Last card sathi fakt pinning
        ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    }
});


//  ==============================
//    our story
// ==============================

// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Main Animation Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".story-section",
        start: "top 75%", // Section screen var 75% aalyavar trigger honar
        toggleActions: "play none none none"
    }
});

// Step 1: First Blueprint Lines Draw honyachi stroke animation
tl.to(".blueprint-stroke", {
    strokeDashoffset: 0,
    duration: 1.8,
    ease: "power2.out"
});

// Step 2: Smooth Transition & Scan Line Reveal (Left to Right wipe)
// Ha part top blue layer la cut karun real image reveal karto
tl.to(".blueprint-overlay", {
    clipPath: "inset(0 100% 0 0)", // Wipe right effect
    duration: 2.2,
    ease: "power3.inOut"
}, "-=0.5"); // overlap animation slightly with line drawing

// Parallel Step: Moving Scan bar synchronized with clip-path
tl.fromTo(".glow-scan-line", 
    { left: "0%" },
    { left: "100%", duration: 2.2, ease: "power3.inOut" },
    "-=2.2"
);

// Optional: Scan line wipe complete zalyavar fading effect
tl.to(".glow-scan-line", {
    opacity: 0,
    duration: 0.3
});


//  ==============================
//    our story
//    ============================== 

// Ensure ScrollTrigger engine is initialized
gsap.registerPlugin(ScrollTrigger);

// Core Animation Sequence Controller
const architectureTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".story-section",
        start: "top 70%", // Triggers precisely when section enters viewport comfortably
        toggleActions: "play none none none"
    }
});

// Phase 1: Draw Blueprint Vector Lines via Stroke Offsets
architectureTimeline.to(".blueprint-stroke", {
    strokeDashoffset: 0,
    duration: 2.0,
    ease: "power2.out"
});

// Phase 2: Wipe Reveal Mask and Move Glow Bar (Synchronized)
architectureTimeline.to(".blueprint-overlay", {
    clipPath: "inset(0 100% 0 0)", // Sweeps out mask boundary left-to-right
    duration: 2.4,
    ease: "power3.inOut"
}, "-=0.6"); // Initiates slightly before line completion for ultra smooth flow

architectureTimeline.fromTo(".glow-scan-line", 
    { left: "0%" },
    { left: "100%", duration: 2.4, ease: "power3.inOut" },
    "-=2.4" // Pairs identical timing constraints directly with block sweep
);

// Fade Scan bar instantly after reveal ends
architectureTimeline.to(".glow-scan-line", {
    opacity: 0,
    duration: 0.4
});

//  ========================
//    Design Process Section
//    ========================

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Center Line Draw Animation on Scroll
gsap.to(".timeline-progress-bar", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true // Draws line exactly linked to user mouse wheel scroll
    }
});

// 2. Card Reveal Animation Loop (Blur-to-Clear + Scale + Fade In)
gsap.utils.toArray(".timeline-item").forEach((item) => {
    
    // Check if card is coming from left or right to calculate slide direction
    const isLeft = item.classList.contains("left-card");
    
    gsap.fromTo(item.querySelector(".timeline-card"), 
        {
            opacity: 0,
            blur: 10,
            filter: "blur(10px)", // Trendy Blur effect
            scale: 0.85,
            x: isLeft ? -60 : 60 // Slides in smoothly from its native direction
        },
        {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 75%", // Triggers when item reaches 75% height of window
                toggleActions: "play none none none"
            }
        }
    );
});

// 3. Initialize Premium Vanilla Tilt for 3D Mouse Floating effect on Desktop
if (window.innerWidth > 850) {
    VanillaTilt.init(document.querySelectorAll(".timeline-card"), {
        max: 12, // Tilt power
        speed: 400,
        glare: true,
        "max-glare": 0.15, // Smooth subtle glass glare reflection
        perspective: 1000
    });
}


// ========================
//    Philosophy Section
//    ========================


document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ambient Background Particles Floating Setup
    const particles = document.querySelectorAll(".adcphi-dot");
    const coords = [{top:"15%",left:"10%"}, {top:"75%",left:"20%"}, {top:"45%",left:"50%"}, {top:"20%",left:"80%"}, {top:"80%",left:"85%"}];
    
    particles.forEach((p, i) => {
        gsap.set(p, { top: coords[i].top, left: coords[i].left });
        gsap.to(p, {
            y: "random(-30, 30)", x: "random(-20, 20)",
            duration: "random(4, 6)", repeat: -1, yoyo: true, ease: "sine.inOut"
        });
    });

    // 2. Data Arrays for Elements Content
    const elementData = [
        { num: "01", title: "Earth" },
        { num: "02", title: "Water" },
        { num: "03", title: "Fire" },
        { num: "04", title: "Air" },
        { num: "05", title: "Space" }
    ];

    // Select DOM nodes
    const scrollBox = document.getElementById("adcphi-scroll-box");
    const slides = document.querySelectorAll(".adcphi-slide");
    const textLinks = document.querySelectorAll(".adcphi-element-lnk");
    const numDisplay = document.getElementById("adcphi-el-number");
    const titleDisplay = document.getElementById("adcphi-el-title");

    let currentIndex = 0;
    const totalElements = elementData.length;
    let isThrottled = false; // Preventing fast accidental double scrolls

    // Function to render active layout states
    function changeElement(nextIndex) {
        if (nextIndex < 0 || nextIndex >= totalElements) return;
        
        // Remove active flags
        slides[currentIndex].classList.remove("active");
        textLinks[currentIndex].classList.remove("active");

        // Update tracking index
        currentIndex = nextIndex;

        // Add active flags to new targets
        slides[currentIndex].classList.add("active");
        textLinks[currentIndex].classList.add("active");

        // UI text update with premium crossfade effect via GSAP
        gsap.to([numDisplay, titleDisplay], {
            opacity: 0, y: -5, duration: 0.2, onComplete: () => {
                numDisplay.textContent = elementData[currentIndex].num;
                titleDisplay.textContent = elementData[currentIndex].title;
                gsap.to([numDisplay, titleDisplay], { opacity: 1, y: 0, duration: 0.3 });
            }
        });
    }

    /* --- CORE FUNCTIONALITY: MOUSE WHEEL SCROLL EVENT INSIDE IMAGE BOX --- */
    scrollBox.addEventListener("wheel", (event) => {
        event.preventDefault(); // Stop main webpage from scrolling away

        if (isThrottled) return;
        isThrottled = true;

        // Detect direction of wheel spin
        if (event.deltaY > 0) {
            // Scrolled Down -> Load Next Image
            if (currentIndex < totalElements - 1) {
                changeElement(currentIndex + 1);
            }
        } else {
            // Scrolled Up -> Load Previous Image
            if (currentIndex > 0) {
                changeElement(currentIndex - 1);
            }
        }

        // Throttle cooldown (600ms matching CSS transitions smoothly)
        setTimeout(() => { isThrottled = false; }, 600);
    }, { passive: false });

    // Click trigger on left text items as an alternative backup feature
    textLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const index = parseInt(link.getAttribute("data-index"));
            changeElement(index);
        });
    });

    // 3. Desktop Active 3D Tilt Setup
    if (window.innerWidth > 991) {
        VanillaTilt.init(document.querySelectorAll(".adcphi-card-3d"), {
            max: 12, speed: 600, perspective: 1200, glare: true, "max-glare": 0.04
        });
    }
});


// ========================
//    Testimonials
//    ========================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC INFINITE FLOATING MOTION ENGINE (GSAP)
    // प्रत्येक कार्ड वेगवेगळ्या गतीने हवेत तरंगत राहील (Asymmetrical Natural Wave Motion)
    const cardsList = document.querySelectorAll(".flttst-card");
    const floatingDurations = [5, 6, 5.5];
    const floatingYDeltas = [-15, -12, -18];

    cardsList.forEach((card, index) => {
        gsap.to(card, {
            y: floatingYDeltas[index],
            duration: floatingDurations[index],
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            // माउस ओव्हर असल्यावर तरंगणे थांबेल जेणेकरून 3D Tilt सुरळीत चालेल
            onStart: function() {
                card.addEventListener("mouseenter", () => gsap.killTweensOf(card, {y: true}));
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        y: floatingYDeltas[index],
                        duration: floatingDurations[index],
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                });
            }
        });
    });

    // 2. PREMIUM 3D HOVER TILT PHYSICS (VANILLA TILT RUNTIME)
    if (window.innerWidth > 991) {
        VanillaTilt.init(document.querySelectorAll(".flttst-card"), {
            max: 12,                  // जास्तीत जास्त टिल्ट होण्याचा कोन (Angle)
            speed: 900,               // टिल्टचा वेग
            perspective: 1200,        // 3D खोलीचा भास (Depth Field)
            glare: true,              // काचेवर चमकणारा लक्झरी रिफ्लेक्शन इफेक्ट
            "max-glare": 0.08,        // चमक नियंत्रित ठेवण्यासाठी
            gyroscope: false
        });

        // 3. DYNAMIC GLOW MOUSE LIGHT TRACKER
        // माउस फिरवला की त्यानुसार कार्डची बॅकग्राउंड शॅडो आणि ग्लो ऑटोमॅटिकली मूव्ह होईल
        cardsList.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                
                card.style.setProperty("--flmouse-x", `${mouseX}px`);
                card.style.setProperty("--flmouse-y", `${mouseY}px`);
            });
        });
    }
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