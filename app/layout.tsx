import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Environment Guard — Prevent Production Keys in Dev",
  description: "Scan repositories and local environments to detect production API keys being used in non-production contexts. CLI tools and GitHub Actions included."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4cfe1492-8e32-4b78-b915-2367cb7ac56f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
