"use client";
import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a number from 0 to `target` when it scrolls into view.
 * Props:
 *   target   {number}  — the final number to count to
 *   suffix   {string}  — text appended after the number (e.g. "+", "s")
 *   prefix   {string}  — text prepended before the number
 *   duration {number}  — animation duration in ms (default 1800)
 *   className {string} — CSS class for the span
 */
export default function CountUp({ target, suffix = "", prefix = "", duration = 1800, className = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
