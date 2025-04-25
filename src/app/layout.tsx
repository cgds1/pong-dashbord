// src/app/layout.tsx
import "@/app/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Pong Dashboard",
  description: "Retro gaming dashboard built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
