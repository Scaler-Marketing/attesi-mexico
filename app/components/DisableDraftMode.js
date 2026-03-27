"use client";
import { useIsPresentationTool } from "next-sanity/hooks";

/**
 * Floating "Exit Preview" button shown when Draft Mode is active.
 * Hidden when inside the Presentation Tool iframe — the Studio controls
 * Draft Mode there, so the button would be redundant.
 */
export default function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  if (isPresentationTool) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        background: "#1a1a1a",
        color: "#fff",
        padding: "0.5rem 1.125rem",
        borderRadius: "2rem",
        fontSize: "0.8125rem",
        fontWeight: 600,
        textDecoration: "none",
        boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
        letterSpacing: "0.01em",
      }}
    >
      Exit Preview
    </a>
  );
}
