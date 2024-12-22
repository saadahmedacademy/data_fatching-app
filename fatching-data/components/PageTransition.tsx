'use client'; // Client Component

import { ReactNode, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Track the current route
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Mark as mounted to apply animations
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Run animation only after the component has mounted
      const tl = gsap.timeline();
      tl.fromTo(
        contentRef.current,
        { x: '100%' }, // Start from off-screen right
        { x: '0%', duration: 0.5, ease: 'power2.out' } // Slide into view
      );
    }
  }, [pathname, isMounted]); // Trigger animation on route change

  return (
    <div
      ref={contentRef}
      className="content-wrapper"
      style={{ transform: isMounted ? undefined : 'translateX(100%)' }} // Prevent hydration mismatch
    >
      {children}
    </div>
  );
};

export default PageTransition;
