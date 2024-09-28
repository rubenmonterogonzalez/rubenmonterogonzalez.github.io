'use client';

import { Toaster } from 'react-hot-toast';
import { Hero } from '@/components/Hero';
import '@/styles/globals.css';

export default function Home() {
  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <div className="container flex flex-col items-center lg:flex-row xl:gap-56">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black">
        </div>
        <div>
          <Toaster />
          <Hero header="Ruben Montero" stroke={false} />
        </div>
      </div>
    </section>

  );
}

