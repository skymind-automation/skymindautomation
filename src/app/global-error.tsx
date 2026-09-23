"use client";

// Replaces the root layout when the layout itself throws, so it cannot rely on
// the app's stylesheet, fonts or theme; everything here is inline.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#06070a",
          color: "#f1f2f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <main style={{ maxWidth: 440, padding: 24 }}>
          <h1 style={{ fontSize: 28, fontWeight: 600, margin: "0 0 12px" }}>Something went wrong.</h1>
          <p style={{ color: "#9598a4", lineHeight: 1.6, margin: "0 0 24px" }}>
            The site hit an unexpected error. Please try again in a moment.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#8b8ff7",
              color: "#0b0c1a",
              border: 0,
              borderRadius: 8,
              padding: "10px 18px",
              font: "inherit",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
