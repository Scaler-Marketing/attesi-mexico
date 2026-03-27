"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { useEffect } from "react";

const STUDIO_CSS = `
  /* ── Hide Structure / Vision tool tabs ─────────────────────── */
  [data-ui="NavbarTabsMenu"],
  [data-ui="ToolMenuButton"] { display: none !important; }

  /* ── Sidebar list item sizing ────────────────────────────────── */
  [data-ui="PaneItem"] { min-height: 3rem !important; }
  [data-ui="PaneItem"] [data-ui="Text"] span {
    font-size: 0.9375rem !important;
    font-weight: 500 !important;
  }

  /* ── Brand accent ────────────────────────────────────────────── */
  [data-ui="Button"][data-tone="primary"] {
    background-color: #9b6a3c !important;
    border-color: #9b6a3c !important;
  }
  [data-ui="Button"][data-tone="primary"]:hover {
    background-color: #7d5530 !important;
    border-color: #7d5530 !important;
  }

  /* Input focus ring */
  [data-ui="TextInput"]:focus-within,
  [data-ui="TextArea"]:focus-within {
    box-shadow: 0 0 0 1px #9b6a3c !important;
  }

  /* Selected item highlight */
  [data-ui="PaneItem"][data-selected="true"] {
    background-color: rgba(155, 106, 60, 0.15) !important;
  }
`;

export default function StudioPage() {
  useEffect(() => {
    // Remove any stale version first so updates always take effect
    const existing = document.getElementById("attesi-studio-css");
    if (existing) existing.remove();

    const style = document.createElement("style");
    style.id = "attesi-studio-css";
    style.textContent = STUDIO_CSS;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return <NextStudio config={config} />;
}
