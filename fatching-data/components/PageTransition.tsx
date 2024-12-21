'use client'; // Client Component

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Track the current route
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current,
      { x: '100%' }, // Start from off-screen right
      { x: '0%', duration: 0.5, ease: 'power2.out' } // Slide into view
    );
  }, [pathname]); // Trigger animation on route change

  return (
    <div ref={contentRef} className="content-wrapper">
      {children}
    </div>
  );
};

export default PageTransition;
