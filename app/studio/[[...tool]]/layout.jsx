export const metadata = {
  title: "Attesi Mexico — Studio",
  robots: "noindex",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioLayout({ children }) {
  return (
    <>
      <style>{`
        /* ─── Hide tool tabs (Structure / Vision) ─────────────────── */
        [data-ui="NavbarTabsMenu"],
        [data-ui="ToolMenuButton"] {
          display: none !important;
        }

        /* ─── Global SVG icon sizing — targets ALL icons in Studio ── */
        /* Broad catch-all: every svg inside the studio root */
        body svg {
          width: 1.25rem !important;
          height: 1.25rem !important;
          min-width: 1.25rem !important;
          min-height: 1.25rem !important;
        }

        /* Slightly larger for top navbar */
        header svg,
        [data-ui="Navbar"] svg {
          width: 1.375rem !important;
          height: 1.375rem !important;
          min-width: 1.375rem !important;
          min-height: 1.375rem !important;
        }

        /* Rich-text toolbar — slightly smaller so they fit */
        [role="toolbar"] svg {
          width: 1.125rem !important;
          height: 1.125rem !important;
          min-width: 1.125rem !important;
          min-height: 1.125rem !important;
        }

        /* ─── Sidebar list item sizing ────────────────────────────── */
        [data-ui="PaneItem"] {
          min-height: 3rem !important;
        }
        [data-ui="PaneItem"] [data-ui="Text"]:first-child {
          font-size: 1rem !important;
          font-weight: 500 !important;
        }

        /* ─── Brand accent ────────────────────────────────────────── */
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

        /* Selected list item highlight */
        [data-ui="PaneItem"][data-selected="true"] {
          background-color: rgba(155, 106, 60, 0.15) !important;
        }
      `}</style>
      <div style={{ height: "100dvh", overflow: "auto" }}>
        {children}
      </div>
    </>
  );
}
