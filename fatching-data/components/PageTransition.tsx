'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      { x: '100%' },
      { x: '0%', duration: 0.5, ease: 'power2.out' }
    );
  }, [pathname]); // Trigger animation on path change

  return (
    <div ref={containerRef} className="page-container">
      {children}
    </div>
  );
};

export default PageTransition;
