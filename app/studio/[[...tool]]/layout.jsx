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
        /* Hide top-nav tool tabs (Structure / Vision) */
        [data-ui="NavbarTabsMenu"],
        [data-ui="ToolMenuButton"] {
          display: none !important;
        }

        /* Larger sidebar icons */
        [data-ui="NavbarLeft"] button svg,
        [data-ui="NavbarRight"] button svg {
          width: 1.375rem !important;
          height: 1.375rem !important;
        }

        /* List item title sizing */
        [data-ui="PaneItem"] [data-ui="Text"]:first-child {
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
