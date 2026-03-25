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
       PHASE 2 — UI interactions
       ============================================================ */
    function initUI() {

      /* ---------- Navbar Scroll Behavior ---------- */
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
      handleNavbarScroll();

      /* ============================================================
         CAROUSEL FACTORY
         Creates a fully-featured carousel with:
         - Arrow navigation (prev/next)
         - Disabled arrow states at boundaries (40% opacity, pointer-events none)
         - Drag-to-scroll on the track itself
         - Optional progress bar scrubbing
         ============================================================ */
      function initCarousel(opts) {
        var track       = opts.track;
        var prevBtn     = opts.prev;
        var nextBtn     = opts.next;
        var progressEl  = opts.progressEl;
        var progressBar = opts.progressBar;
        var getVisible  = opts.getVisible;
        var onUpdate    = opts.onUpdate; // optional callback after update

        if (!track) return;

        var index = 0;

        /* ---- Arrow disabled state ---- */
        function updateArrows(maxIndex) {
          if (prevBtn) {
            var atStart = index <= 0;
            prevBtn.style.opacity        = atStart ? "0.4" : "1";
            prevBtn.style.pointerEvents  = atStart ? "none" : "";
          }
          if (nextBtn) {
            var atEnd = index >= maxIndex;
            nextBtn.style.opacity        = atEnd ? "0.4" : "1";
            nextBtn.style.pointerEvents  = atEnd ? "none" : "";
          }
        }

        /* ---- Core update ---- */
        function update(animate) {
          var cards      = track.children;
          var total      = cards.length;
          var visible    = getVisible();
          var maxIndex   = Math.max(0, total - visible);

          if (index > maxIndex) index = maxIndex;
          if (index < 0)        index = 0;

          var cardWidth = cards[0] ? cards[0].offsetWidth : 0;
          var gap       = 24; // matches CSS gap: 1.5rem (24px)
          var offset    = index * (cardWidth + gap);

          track.style.transition = animate === false
            ? "none"
            : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          track.style.transform = "translateX(" + (-offset) + "px)";

          /* Progress bar */
          if (progressBar) {
            var thumbWidth   = (visible / total) * 100;
            progressBar.style.width = thumbWidth + "%";
            var thumbTravel  = maxIndex > 0 ? index / maxIndex : 0;
            var maxTranslate = ((100 - thumbWidth) / thumbWidth) * 100;
            progressBar.style.transform = "translateX(" + thumbTravel * maxTranslate + "%)";
          }

          updateArrows(maxIndex);

          if (onUpdate) onUpdate(index, maxIndex);
        }

        /* ---- Arrow clicks ---- */
        if (prevBtn) {
          prevBtn.addEventListener("click", function () {
            index--;
            update();
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", function () {
            index++;
            update();
          });
        }

        /* ---- Drag-to-scroll on the track ---- */
        var dragStartX  = 0;
        var dragStartIdx = 0;
        var isDragging  = false;

        function onDragStart(clientX) {
          isDragging   = true;
          dragStartX   = clientX;
          dragStartIdx = index;
          track.style.cursor = "grabbing";
          document.body.style.userSelect = "none";
        }

        function onDragMove(clientX) {
          if (!isDragging) return;
          var cards    = track.children;
          var total    = cards.length;
          var visible  = getVisible();
          var maxIndex = Math.max(0, total - visible);
          var cardWidth = cards[0] ? cards[0].offsetWidth : 0;
          var gap       = 24;
          var delta     = clientX - dragStartX;
          // Convert pixel drag to fractional index
          var newIndex  = dragStartIdx - delta / (cardWidth + gap);
          index = Math.max(0, Math.min(maxIndex, newIndex));

          var offset = index * (cardWidth + gap);
          track.style.transition = "none";
          track.style.transform  = "translateX(" + (-offset) + "px)";

          if (progressBar) {
            var thumbWidth   = (visible / total) * 100;
            progressBar.style.width = thumbWidth + "%";
            var thumbTravel  = maxIndex > 0 ? index / maxIndex : 0;
            var maxTranslate = ((100 - thumbWidth) / thumbWidth) * 100;
            progressBar.style.transform = "translateX(" + thumbTravel * maxTranslate + "%)";
          }
        }

        function onDragEnd() {
          if (!isDragging) return;
          isDragging = false;
          track.style.cursor = "";
          document.body.style.userSelect = "";
          // Snap to nearest integer index
          index = Math.round(index);
          update();
        }

        // Mouse
        track.addEventListener("mousedown", function (e) {
          e.preventDefault();
          onDragStart(e.clientX);
        });
        window.addEventListener("mousemove", function (e) {
          onDragMove(e.clientX);
        });
        window.addEventListener("mouseup", function () {
          onDragEnd();
        });

        // Touch
        track.addEventListener("touchstart", function (e) {
          onDragStart(e.touches[0].clientX);
        }, { passive: true });
        window.addEventListener("touchmove", function (e) {
          if (isDragging) onDragMove(e.touches[0].clientX);
        }, { passive: true });
        window.addEventListener("touchend", function () {
          onDragEnd();
        });

        /* ---- Progress bar scrub ---- */
        if (progressEl && progressBar) {
          var scrubbing = false;

          function setFromProgressX(clientX, snap) {
            var trackEl = progressEl.querySelector(".experiences__progress-track, .testimonials__progress-track");
            if (!trackEl) trackEl = progressEl;
            var rect     = trackEl.getBoundingClientRect();
            var ratio    = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            var cards    = track.children;
            var total    = cards.length;
            var visible  = getVisible();
            var maxIndex = Math.max(0, total - visible);

            if (snap) {
              index = Math.round(ratio * maxIndex);
              update();
            } else {
              index = ratio * maxIndex;
              var cardWidth = cards[0] ? cards[0].offsetWidth : 0;
              var gap       = 24;
              var offset    = index * (cardWidth + gap);
              track.style.transition = "none";
              track.style.transform  = "translateX(" + (-offset) + "px)";
              var thumbWidth   = (visible / total) * 100;
              progressBar.style.width = thumbWidth + "%";
              var maxTranslate = ((100 - thumbWidth) / thumbWidth) * 100;
              progressBar.style.transform = "translateX(" + ratio * maxTranslate + "%)";
            }
          }

          progressEl.addEventListener("mousedown", function (e) {
            scrubbing = true;
            document.body.style.userSelect = "none";
            setFromProgressX(e.clientX, false);
          });
          window.addEventListener("mousemove", function (e) {
            if (scrubbing) setFromProgressX(e.clientX, false);
          });
          window.addEventListener("mouseup", function (e) {
            if (!scrubbing) return;
            scrubbing = false;
            document.body.style.userSelect = "";
            setFromProgressX(e.clientX, true);
          });
          progressEl.addEventListener("touchstart", function (e) {
            scrubbing = true;
            setFromProgressX(e.touches[0].clientX, false);
          }, { passive: true });
          window.addEventListener("touchmove", function (e) {
            if (scrubbing) setFromProgressX(e.touches[0].clientX, false);
          }, { passive: true });
          window.addEventListener("touchend", function (e) {
            if (!scrubbing) return;
            scrubbing = false;
            if (e.changedTouches.length) setFromProgressX(e.changedTouches[0].clientX, true);
          });
        }

        /* ---- Initial render ---- */
        update(false);

        /* ---- Return a reset fn for resize ---- */
        return function reset() {
          index = 0;
          update(false);
        };
      }

      /* ---------- Experiences Carousel ---------- */
      var expReset = initCarousel({
        track:       document.querySelector(".experiences__track"),
        prev:        document.querySelector(".carousel-arrow--prev"),
        next:        document.querySelector(".carousel-arrow--next"),
        progressEl:  document.querySelector(".experiences__progress"),
        progressBar: document.querySelector(".experiences__progress-bar"),
        getVisible: function () {
          var w = window.innerWidth;
          if (w < 768)  return 1;
          if (w < 1024) return 2;
          return 3;
        },
      });

      /* ---------- Testimonials Carousel ---------- */
      var testTrack         = document.querySelector(".testimonials__track");
      var testDotsContainer = document.querySelector(".testimonials__dots");
      var testPrev          = document.querySelector(".testimonials__arrow--prev");
      var testNext          = document.querySelector(".testimonials__arrow--next");

      /* Build dot indicators */
      function buildTestDots(currentPage) {
        if (!testTrack || !testDotsContainer) return;
        var total   = testTrack.children.length;
        var visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        var dotCount = Math.max(1, total - visible + 1);
        testDotsContainer.innerHTML = "";
        for (var d = 0; d < dotCount; d++) {
          var dot = document.createElement("span");
          dot.className = "testimonials__dot" + (d === (currentPage || 0) ? " testimonials__dot--active" : "");
          testDotsContainer.appendChild(dot);
        }
      }

      buildTestDots(0);

      var testReset = initCarousel({
        track: testTrack,
        prev:  testPrev,
        next:  testNext,
        getVisible: function () {
          var w = window.innerWidth;
          if (w < 768)  return 1;
          if (w < 1024) return 2;
          return 3;
        },
        onUpdate: function (page) {
          /* Sync dots */
          if (!testDotsContainer) return;
          var dots = testDotsContainer.querySelectorAll(".testimonials__dot");
          dots.forEach(function (dot, i) {
            dot.classList.toggle("testimonials__dot--active", i === Math.round(page));
          });
        },
      });

      /* ---------- Mobile Slide-Out Panel ---------- */
      var hamburger     = document.querySelector(".navbar__hamburger");
      var mobilePanel   = document.getElementById("mobilePanel");
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
        if (isOpen) closePanel(); else openPanel();
      }

      if (hamburger)     hamburger.addEventListener("click", togglePanel);
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
          if (expReset)  expReset();
          if (testReset) {
            buildTestDots(0);
            testReset();
          }
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
