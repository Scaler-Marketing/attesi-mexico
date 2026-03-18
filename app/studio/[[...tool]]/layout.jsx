export const metadata = {
  title: "Attesi Mexico — Sanity Studio",
  robots: "noindex",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioLayout({ children }) {
  return (
    <div style={{ height: "100dvh", overflow: "auto" }}>
      {children}
    </div>
  );
}
