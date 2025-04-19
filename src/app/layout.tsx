import './globals.css';
import { Press_Start_2P } from 'next/font/google';
import { ReactNode } from 'react';

const arcade = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-arcade',
});

export const metadata = {
  title: 'Pong Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${arcade.className} antialiased 
          flex items-center justify-center`}
      >

<nav className="absolute top-4 right-4 flex gap-4">
  <a href="/games" className="text-white underline">
    Partidas
  </a>
  <a href="/register-game" className="text-white underline">
    Registrar Partida
  </a>
</nav>

        {children}
      </body>
    </html>
  );
}
