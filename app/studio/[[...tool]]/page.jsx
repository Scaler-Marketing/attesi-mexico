"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { useEffect } from "react";

const STUDIO_CSS = `
  /* Hide Structure / Vision tool tabs */
  [data-ui="NavbarTabsMenu"],
  [data-ui="ToolMenuButton"] { display: none !important; }

  /* Sidebar rows taller */
  [data-ui="PaneItem"] { min-height: 3rem !important; }

  /* Folder + chevron icons larger */
  [data-ui="PaneItem"] svg {
    width: 1.375rem !important;
    height: 1.375rem !important;
    min-width: 1.375rem !important;
  }

  /* List item text */
  [data-ui="PaneItem"] [data-ui="Text"] span {
    font-size: 0.9375rem !important;
    font-weight: 500 !important;
  }

  /* Publish button — warm brown */
  [data-ui="Button"][data-tone="primary"] {
    background-color: #9b6a3c !important;
    border-color: #9b6a3c !important;
  }
  [data-ui="Button"][data-tone="primary"]:hover {
    background-color: #7d5530 !important;
    border-color: #7d5530 !important;
  }

  /* Selected item highlight */
  [data-ui="PaneItem"][data-selected="true"] {
    background-color: rgba(155, 106, 60, 0.15) !important;
  }

  /* Input focus ring */
  [data-ui="TextInput"]:focus-within,
  [data-ui="TextArea"]:focus-within {
    box-shadow: 0 0 0 1px #9b6a3c !important;
  }
`;

export default function StudioPage() {
  useEffect(() => {
    if (document.getElementById("attesi-studio-css")) return;
    const style = document.createElement("style");
    style.id = "attesi-studio-css";
    style.textContent = STUDIO_CSS;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return <NextStudio config={config} />;
}
