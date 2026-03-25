"use client";

import { useEffect } from "react";

export default function ClientAnimations() {
  useEffect(() => {
    let resizeTimer;

    /* ============================================================
       PHASE 1 — Swiper (loads immediately)
       ============================================================ */
    async function initSwiper() {
      const { default: Swiper } = await import("swiper");
      const { Autoplay, EffectFade, Pagination } = await import("swiper/modules");

      new Swiper(".hero-swiper", {
        modules: [Autoplay, EffectFade, Pagination],
        loop: true,
        speed: 600,
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
       PHASE 2 — UI interactions (no GSAP, no ScrollTrigger)
       ============================================================ */
    function initUI() {

      /* ---------- Navbar Scroll Behavior (native scroll) ---------- */
      var navbar = document.getElementById("navbar");
      var heroSection = document.getElementById("hero");

      function handleNavbarScroll() {
        if (!navbar) return;
        var threshold = heroSection
          ? heroSection.offsetTop + heroSection.offsetHeight / 2
          : 200;
        if (window.scrollY > threshold) {
          navbar.classList.add("navbar--scrolled");
        } else {
          navbar.classList.remove("navbar--scrolled");
        }
      }

      window.addEventListener("scroll", handleNavbarScroll, { passive: true });
      handleNavbarScroll(); // run once on load

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

        expTrack.style.transition = animate === false ? "none" : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        expTrack.style.transform = "translateX(" + (-offset) + "px)";

        if (progressBar) {
          var thumbWidth = (visibleCards / totalCards) * 100;
          progressBar.style.width = thumbWidth + "%";
          var maxIdx = totalCards - visibleCards;
          var thumbTravel = maxIdx > 0 ? expCarouselIndex / maxIdx : 0;
          var maxTranslate = ((100 - thumbWidth) / thumbWidth) * 100;
          progressBar.style.transform = "translateX(" + thumbTravel * maxTranslate + "%)";
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

      /* Draggable progress bar for Experiences */
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
          if (snap) {
            expCarouselIndex = Math.round(ratio * maxIdx);
            updateExpCarousel();
          } else {
            expCarouselIndex = ratio * maxIdx;
            var cards = expTrack ? expTrack.children : [];
            if (cards.length) {
              var cardWidth = cards[0].offsetWidth;
              var gap = 24;
              var offset = expCarouselIndex * (cardWidth + gap);
              expTrack.style.transition = "none";
              expTrack.style.transform = "translateX(" + (-offset) + "px)";
            }
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
          setIndexFromDragX(e.clientX, true);
        });
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

      /* ---------- Testimonials Carousel ---------- */
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

        testTrack.style.transition = "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        testTrack.style.transform = "translateX(" + (-offset) + "px)";

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

      return function cleanup() {
        window.removeEventListener("scroll", handleNavbarScroll);
      };
    }

    initSwiper();
    var cleanup = initUI();

    return () => {
      clearTimeout(resizeTimer);
      if (cleanup) cleanup();
    };
  }, []);

  return null;
}
