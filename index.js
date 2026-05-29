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

//HERO
document.addEventListener("DOMContentLoaded", () => {
  const videoCard = document.getElementById("heroVideoCard");
  const frameInitial = document.getElementById("frameInitial");
  const frameExpanded = document.getElementById("frameExpanded");

  if (videoCard && frameInitial && frameExpanded) {
    // Step 1: Let the user see the initial 350x500 layout state for a brief moment
    setTimeout(() => {
      // Step 2: Gradually expand video wrapper to full screen dimensions
      videoCard.classList.add("is-expanded");

      // Fade out the initial compact layout text state midway through expansion
      setTimeout(() => {
        frameInitial.classList.remove("active");
      }, 600);

      // Step 3: Reveal the final branding statement & button when expansion completes
      setTimeout(() => {
        frameExpanded.classList.add("active");
      }, 1800); // Synchronized directly with CSS expansion metrics speed variable
    }, 1200); // 1.2 seconds baseline delay before automation expansion process begins
  }
});

//PHILOSOPHY DESIGN SYSTEM

 document.addEventListener("DOMContentLoaded", () => {

            const masterTrack =
                document.getElementById("philosophyMasterTrack");

            const imageEngine =
                document.getElementById("movingImageEngine");

            const templeFrame =
                document.getElementById("templeFrame");

            const textFrameOne =
                document.getElementById("textFrameOne");

            const textFrameTwo =
                document.getElementById("textFrameTwo");

            if (window.innerWidth <= 1100) return;

            const LERP_FACTOR = 0.04;

            let currentProgress = 0;
            let smoothProgress = 0;
            let rafId = null;

            function clamp(val, min, max) {
                return Math.max(min, Math.min(max, val));
            }

            function easeInOut(t) {
                return t < 0.5
                    ? 2 * t * t
                    : -1 + (4 - 2 * t) * t;
            }

            function lerp(a, b, t) {
                return a + (b - a) * t;
            }

            function applyAnimation(p) {

                const horizontalLeft =
                    26 + Math.cos(p * Math.PI) * 24;

                const verticalArc =
                    Math.sin(p * Math.PI) * -90;

                const spinT1 =
                    clamp((p - 0.20) / 0.60, 0, 1);

                const rotY1 =
                    easeInOut(spinT1) * 360;

                const spinT2 =
                    clamp((p - 0.72) / 0.28, 0, 1);

                const rotY2 =
                    easeInOut(spinT2) * 360;

                const totalRotateY = rotY1 + rotY2;

                const rotateX =
                    Math.sin(p * Math.PI) * 6;

                const scaleVal =
                    1 + Math.sin(p * Math.PI) * 0.08;

                imageEngine.style.left =
                    horizontalLeft + "%";

                imageEngine.style.transform =
                    "translateY(calc(-50% + " +
                    verticalArc + "px))";

                templeFrame.style.transform =
                    "rotateY(" + totalRotateY + "deg) " +
                    "rotateX(" + rotateX + "deg) " +
                    "scale(" + scaleVal + ")";

                if (p <= 0.35) {

                    const t = easeInOut(p / 0.35);

                    textFrameOne.style.opacity = 1 - t;

                    textFrameOne.style.transform =
                        "translateY(" + (t * -40) + "px)";

                    textFrameTwo.style.opacity = 0;

                    textFrameTwo.style.transform =
                        "translateY(50px)";
                }

                else if (p >= 0.65) {

                    textFrameOne.style.opacity = 0;

                    const t =
                        easeInOut((p - 0.65) / 0.35);

                    const op = clamp(t, 0, 1);

                    textFrameTwo.style.opacity = op;

                    textFrameTwo.style.transform =
                        "translateY(" +
                        (40 - op * 40) +
                        "px)";
                }

                else {

                    textFrameOne.style.opacity = 0;
                    textFrameTwo.style.opacity = 0;
                }
            }

            function animationLoop() {

                smoothProgress =
                    lerp(
                        smoothProgress,
                        currentProgress,
                        LERP_FACTOR
                    );

                const diff =
                    Math.abs(
                        currentProgress - smoothProgress
                    );

                applyAnimation(smoothProgress);

                if (diff > 0.0001) {

                    rafId =
                        requestAnimationFrame(animationLoop);
                }

                else {

                    rafId = null;
                }
            }

            window.addEventListener("scroll", () => {

                const rect =
                    masterTrack.getBoundingClientRect();

                const windowHeight =
                    window.innerHeight;

                const totalScrollDist =
                    rect.height - windowHeight;

                currentProgress =
                    clamp(
                        -rect.top / totalScrollDist,
                        0,
                        1
                    );

                if (!rafId) {

                    rafId =
                        requestAnimationFrame(animationLoop);
                }

            }, { passive: true });

            applyAnimation(0);

        });


//SERVIECS
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  if (!track) return;

  let originalCards = Array.from(
    track.querySelectorAll(".carousel-card-wrapper"),
  );
  const totalOriginals = originalCards.length;

  // 1. DYNAMICALLY CLONE CARDS FOR THE INFINITE SMOOTH LOOP
  const cardsToClone = 4;
  for (let i = 0; i < cardsToClone; i++) {
    const clone = originalCards[i].cloneNode(true);
    clone.classList.add("cloned-card");
    track.appendChild(clone);
  }

  // Refresh our lists to include newly made DOM elements
  const allWrappers = track.querySelectorAll(".carousel-card-wrapper");

  // 2. TIMELINE MOTOR VARIABLES
  let scrollSpeed = 2; 
  let currentScrollX = 0;
  let isPaused = false;
  let scrollWidthOfOriginals = 0;

  function calculateMetrics() {
    if (totalOriginals === 0) return;
    const firstCard = allWrappers[0];
    const secondCard = allWrappers[1];

    let cardSpace = firstCard.offsetWidth + 30;
    if (secondCard) {
      cardSpace =
        secondCard.getBoundingClientRect().left -
        firstCard.getBoundingClientRect().left;
    }
    scrollWidthOfOriginals = totalOriginals * cardSpace;
  }

  calculateMetrics();
  window.addEventListener("resize", calculateMetrics);

  // 3. RENDER LOOP
  function renderLoop() {
    if (!isPaused) {
      currentScrollX += scrollSpeed;

      if (currentScrollX >= scrollWidthOfOriginals) {
        currentScrollX = 0;
      }
      track.scrollLeft = currentScrollX;
    }
    requestAnimationFrame(renderLoop);
  }
  requestAnimationFrame(renderLoop);

  // 4. INTERACTION DETECTORS
  track.addEventListener("mouseenter", () => (isPaused = true));
  track.addEventListener("mouseleave", () => {
    currentScrollX = track.scrollLeft; 
    isPaused = false;
  });

  track.addEventListener("touchstart", () => (isPaused = true), {
    passive: true,
  });
  track.addEventListener(
    "touchend",
    () => {
      currentScrollX = track.scrollLeft;
      isPaused = false;
    },
    { passive: true },
  );

  // 5. STABLE 3D FLIP ARCHITECTURE (No layout tilt offsets)
  allWrappers.forEach((wrapper) => {
    const card = wrapper.querySelector(".carousel-3d-card");
    if (!card) return;

    wrapper.addEventListener("mousemove", () => {
      if (wrapper.matches(":hover")) {
        card.style.transform = "rotateY(-180deg)";
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg)";
    });
  });
});

//core team
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".team-card-wrapper");
  if (cards.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.12
  };

  const teamObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cardArray = Array.from(cards);
        const index = cardArray.indexOf(entry.target);
        
        setTimeout(() => {
          entry.target.classList.add("reveal-active");
        }, index * 120);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => teamObserver.observe(card));
});

//award cards
document.addEventListener("DOMContentLoaded", () => {
  const awardCards = document.querySelectorAll(".award-interactive-card");

  if (awardCards.length) {
    const cardObserverOptions = {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Adds a soft delayed sequential entry animation
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100); // 100ms delay between consecutive items

          cardObserver.unobserve(entry.target);
        }
      });
    }, cardObserverOptions);

    // Setup base styles via JS before triggering animation
    awardCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition =
        "opacity 0.8s cubic-bezier(0.25, 1, 0.2, 1), transform 0.8s cubic-bezier(0.25, 1, 0.2, 1)";
      cardObserver.observe(card);
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



