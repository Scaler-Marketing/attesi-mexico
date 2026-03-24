"use client";

import { useEffect } from "react";

export default function ClientAnimations() {
  useEffect(() => {
    let resizeTimer;

    /* ============================================================
       PHASE 1 — Swiper (loads immediately, no GSAP dependency)
       ============================================================ */
    async function initSwiper() {
      const { default: Swiper } = await import("swiper");
      const { Autoplay, EffectFade, Pagination } = await import("swiper/modules");

      new Swiper(".hero-swiper", {
        modules: [Autoplay, EffectFade, Pagination],
        loop: true,
        speed: 600,           // was 1000 — snappier fade like Webflow
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".hero-pagination",
          clickable: true,
        },
      });
    }

    /* ============================================================
       PHASE 2 — GSAP animations (loads after Swiper is running)
       ============================================================ */
    async function initGSAP() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default || gsapModule.gsap;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      /* ---------- Navbar Scroll Behavior ---------- */
      var navbar = document.getElementById("navbar");
      var heroSection = document.getElementById("hero");

      if (navbar && heroSection) {
        ScrollTrigger.create({
          trigger: heroSection,
          start: "center top",
          onEnter: function () {
            navbar.classList.add("navbar--scrolled");
          },
          onLeaveBack: function () {
            navbar.classList.remove("navbar--scrolled");
          },
        });
      }

      /* ---------- Hero Entrance Animation ---------- */
      var heroTitle = document.querySelector(".hero__title");
      var heroSubtitle = document.querySelector(".hero__subtitle");
      var heroButtons = document.querySelector(".hero__buttons");

      if (heroTitle) {
        var heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .to(heroTitle, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          })
          .to(
            heroSubtitle,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(
            heroButtons,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          );
      }

      /* ---------- Scroll Fade-Up Animations ---------- */
      var animateElements = document.querySelectorAll("[data-animate]");

      animateElements.forEach(function (el) {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: function () {
              el.classList.add("is-visible");
            },
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      /* ---------- Intro Heading — Scroll Color Sweep (per-char) ---------- */
      var introHeading = document.getElementById("introHeading");

      if (introHeading) {
        var text = introHeading.textContent;
        var html = "";
        for (var i = 0; i < text.length; i++) {
          var ch = text[i];
          if (ch === " ") {
            html += " ";
          } else {
            html += '<span class="intro-char">' + ch + "</span>";
          }
        }
        introHeading.innerHTML = html;

        var charSpans = introHeading.querySelectorAll(".intro-char");

        gsap.to(charSpans, {
          color: "#b5743a",
          stagger: {
            each: 0.015,
            ease: "none",
          },
          duration: 0.6,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: introHeading,
            start: "top 80%",
            end: "bottom 45%",
            scrub: 1.5,
          },
        });
      }

      /* ---------- Counter Animation ---------- */
      var counters = document.querySelectorAll("[data-count]");

      counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute("data-count"), 10);

        ScrollTrigger.create({
          trigger: counter,
          start: "top 85%",
          once: true,
          onEnter: function () {
            gsap.to(
              { val: 0 },
              {
                val: target,
                duration: 2,
                ease: "power1.out",
                onUpdate: function () {
                  counter.textContent = Math.round(this.targets()[0].val);
                },
              }
            );
          },
        });
      });

      /* ---------- Experiences Carousel ---------- */
      var expTrack = document.querySelector(".experiences__track");
      var expPrev = document.querySelector(".carousel-arrow--prev");
      var expNext = document.querySelector(".carousel-arrow--next");
      var progressBar = document.querySelector(".experiences__progress-bar");
      var expCarouselIndex = 0;

      function getExpVisibleCards() {
        var w = window.innerWidth;
        if (w < 768) return 1;
        if (w < 1024) return 2;
        return 3;
      }

      function updateExpCarousel(animate) {
        if (!expTrack) return;
        var cards = expTrack.children;
        var totalCards = cards.length;
        var visibleCards = getExpVisibleCards();
        var maxIndex = totalCards - visibleCards;

        if (expCarouselIndex > maxIndex) expCarouselIndex = maxIndex;
        if (expCarouselIndex < 0) expCarouselIndex = 0;

        var cardWidth = cards[0].offsetWidth;
        var gap = 24;
        var offset = expCarouselIndex * (cardWidth + gap);

        if (animate === false) {
          gsap.set(expTrack, { x: -offset });
        } else {
          gsap.to(expTrack, {
            x: -offset,
            duration: 0.35,        // was 0.5 — snappier
            ease: "power2.out",
          });
        }

        if (progressBar) {
          var thumbWidth = (visibleCards / totalCards) * 100;
          progressBar.style.width = thumbWidth + "%";
          var maxIdx = totalCards - visibleCards;
          var thumbTravel = maxIdx > 0 ? expCarouselIndex / maxIdx : 0;
          var maxTranslate = ((100 - thumbWidth) / thumbWidth) * 100;
          progressBar.style.transform =
            "translateX(" + thumbTravel * maxTranslate + "%)";
        }
      }

      if (expPrev) {
        expPrev.addEventListener("click", function () {
          expCarouselIndex--;
          updateExpCarousel();
        });
      }
      if (expNext) {
        expNext.addEventListener("click", function () {
          expCarouselIndex++;
          updateExpCarousel();
        });
      }

      /* Draggable progress bar for Experiences — fluid, no snapping during drag */
      var expProgressEl = document.querySelector(".experiences__progress");
      if (expProgressEl && progressBar) {
        var isDragging = false;

        function getExpMaxIndex() {
          if (!expTrack) return 0;
          return expTrack.children.length - getExpVisibleCards();
        }

        function setIndexFromDragX(clientX, snap) {
          var trackEl = document.querySelector(".experiences__progress-track");
          if (!trackEl) return;
          var rect = trackEl.getBoundingClientRect();
          var ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          var maxIdx = getExpMaxIndex();
          /* During drag: use exact ratio for fluid thumb movement.
             On release: snap to nearest card. */
          if (snap) {
            expCarouselIndex = Math.round(ratio * maxIdx);
            updateExpCarousel();
          } else {
            /* Move thumb visually without GSAP snap */
            expCarouselIndex = ratio * maxIdx;  // float during drag
            var cards = expTrack ? expTrack.children : [];
            if (cards.length) {
              var cardWidth = cards[0].offsetWidth;
              var gap = 24;
              var offset = expCarouselIndex * (cardWidth + gap);
              gsap.set(expTrack, { x: -offset });
            }
            /* Update thumb position directly */
            var totalCards = expTrack ? expTrack.children.length : 1;
            var visibleCards = getExpVisibleCards();
            var thumbWidth = (visibleCards / totalCards) * 100;
            var maxTranslate = ((100 - thumbWidth) / thumbWidth) * 100;
            progressBar.style.transform = "translateX(" + ratio * maxTranslate + "%)";
          }
        }

        expProgressEl.addEventListener("mousedown", function (e) {
          isDragging = true;
          document.body.style.userSelect = "none";
          setIndexFromDragX(e.clientX, false);
        });
        window.addEventListener("mousemove", function (e) {
          if (!isDragging) return;
          setIndexFromDragX(e.clientX, false);
        });
        window.addEventListener("mouseup", function (e) {
          if (!isDragging) return;
          isDragging = false;
          document.body.style.userSelect = "";
          setIndexFromDragX(e.clientX, true);  // snap on release
        });
        /* Touch support */
        expProgressEl.addEventListener("touchstart", function (e) {
          isDragging = true;
          setIndexFromDragX(e.touches[0].clientX, false);
        }, { passive: true });
        window.addEventListener("touchmove", function (e) {
          if (!isDragging) return;
          setIndexFromDragX(e.touches[0].clientX, false);
        }, { passive: true });
        window.addEventListener("touchend", function (e) {
          if (!isDragging) return;
          isDragging = false;
          if (e.changedTouches.length) {
            setIndexFromDragX(e.changedTouches[0].clientX, true);
          }
        });
      }

      updateExpCarousel(false);

      /* ---------- Testimonials Horizontal Scroll (1 card at a time) ---------- */
      var testTrack = document.querySelector(".testimonials__track");
      var testDotsContainer = document.querySelector(".testimonials__dots");
      var testPage = 0;

      function getTestVisibleCards() {
        var w = window.innerWidth;
        if (w < 768) return 1;
        if (w < 1024) return 2;
        return 3;
      }

      function buildTestDots() {
        if (!testTrack || !testDotsContainer) return;
        var totalCards = testTrack.children.length;
        var visibleCards = getTestVisibleCards();
        var dotCount = Math.max(1, totalCards - visibleCards + 1);
        testDotsContainer.innerHTML = "";
        for (var d = 0; d < dotCount; d++) {
          var dot = document.createElement("span");
          dot.className = "testimonials__dot" + (d === 0 ? " testimonials__dot--active" : "");
          (function (idx) {
            dot.addEventListener("click", function () {
              testPage = idx;
              updateTestCarousel();
            });
          })(d);
          testDotsContainer.appendChild(dot);
        }
      }

      function updateTestCarousel() {
        if (!testTrack) return;
        var cards = testTrack.children;
        var totalCards = cards.length;
        var visibleCards = getTestVisibleCards();
        var maxPage = totalCards - visibleCards;

        if (testPage > maxPage) testPage = maxPage;
        if (testPage < 0) testPage = 0;

        var cardWidth = cards[0].offsetWidth;
        var gap = 24;
        var offset = testPage * (cardWidth + gap);

        gsap.to(testTrack, {
          x: -offset,
          duration: 0.35,        // was 0.5 — snappier
          ease: "power2.out",
        });

        var dots = testDotsContainer
          ? testDotsContainer.querySelectorAll(".testimonials__dot")
          : [];
        dots.forEach(function (dot, i) {
          dot.classList.toggle("testimonials__dot--active", i === testPage);
        });
      }

      buildTestDots();
      updateTestCarousel();

      /* ---------- Mobile Slide-Out Panel ---------- */
      var hamburger = document.querySelector(".navbar__hamburger");
      var mobilePanel = document.getElementById("mobilePanel");
      var mobileBackdrop = document.getElementById("mobileBackdrop");

      function openPanel() {
        if (!mobilePanel) return;
        mobilePanel.classList.add("active");
        mobileBackdrop.classList.add("active");
        hamburger.classList.add("navbar__hamburger--active");
        hamburger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }

      function closePanel() {
        if (!mobilePanel) return;
        mobilePanel.classList.remove("active");
        mobileBackdrop.classList.remove("active");
        hamburger.classList.remove("navbar__hamburger--active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }

      function togglePanel() {
        if (!mobilePanel) return;
        var isOpen = mobilePanel.classList.contains("active");
        if (isOpen) {
          closePanel();
        } else {
          openPanel();
        }
      }

      if (hamburger) hamburger.addEventListener("click", togglePanel);
      if (mobileBackdrop) mobileBackdrop.addEventListener("click", closePanel);

      /* Accordion toggles */
      var toggles = document.querySelectorAll(".mobile-panel__toggle");
      toggles.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var expanded = btn.getAttribute("aria-expanded") === "true";
          toggles.forEach(function (other) {
            other.setAttribute("aria-expanded", "false");
            var otherSub = other.nextElementSibling;
            if (otherSub) otherSub.classList.remove("open");
          });
          if (!expanded) {
            btn.setAttribute("aria-expanded", "true");
            var sub = btn.nextElementSibling;
            if (sub) sub.classList.add("open");
          }
        });
      });

      if (mobilePanel) {
        mobilePanel.querySelectorAll("a").forEach(function (link) {
          link.addEventListener("click", closePanel);
        });
      }

      /* ---------- Resize Handler ---------- */
      window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          updateExpCarousel(false);
          testPage = 0;
          buildTestDots();
          updateTestCarousel();
        }, 250);
      });
    }

    /* Run Swiper first (fast), then GSAP animations */
    initSwiper();
    initGSAP();

    return () => {
      clearTimeout(resizeTimer);
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      });
    };
  }, []);

  return null;
}
