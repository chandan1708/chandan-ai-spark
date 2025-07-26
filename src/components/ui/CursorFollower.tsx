import { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const glowPosRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationIdRef = useRef<number>();

  // Smooth animation function optimized for 144Hz
  const animate = () => {
    // Lerp function for smooth following
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Different easing factors for each element
    const mainFactor = 0.25; // Fastest following
    const trailFactor = 0.12; // Medium following
    const glowFactor = 0.08;  // Slowest following

    // Update positions with smooth interpolation
    currentPosRef.current.x = lerp(currentPosRef.current.x, mouseRef.current.x, mainFactor);
    currentPosRef.current.y = lerp(currentPosRef.current.y, mouseRef.current.y, mainFactor);

    trailPosRef.current.x = lerp(trailPosRef.current.x, mouseRef.current.x, trailFactor);
    trailPosRef.current.y = lerp(trailPosRef.current.y, mouseRef.current.y, trailFactor);

    glowPosRef.current.x = lerp(glowPosRef.current.x, mouseRef.current.x, glowFactor);
    glowPosRef.current.y = lerp(glowPosRef.current.y, mouseRef.current.y, glowFactor);

    // Apply transforms using GPU acceleration
    if (mainCursorRef.current) {
      mainCursorRef.current.style.transform = `translate3d(${currentPosRef.current.x - 16}px, ${currentPosRef.current.y - 16}px, 0)`;
    }

    if (trailRef.current) {
      trailRef.current.style.transform = `translate3d(${trailPosRef.current.x - 20}px, ${trailPosRef.current.y - 20}px, 0)`;
    }

    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${glowPosRef.current.x - 32}px, ${glowPosRef.current.y - 32}px, 0)`;
    }

    // Continue animation loop
    animationIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        setIsVisible(true);
        // Initialize positions to current mouse position
        currentPosRef.current = { x: e.clientX, y: e.clientY };
        trailPosRef.current = { x: e.clientX, y: e.clientY };
        glowPosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.group');

      setIsHovering(!!isInteractive);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Start animation loop
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        ref={mainCursorRef}
        className={`fixed pointer-events-none z-[9999] w-8 h-8 transition-transform duration-200 ease-out will-change-transform ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Outer ring */}
        <div className={`
          w-full h-full rounded-full border transition-all duration-200 ease-out
          ${isHovering ? 'border-accent/80 scale-125' : 'border-primary/50'}
        `} />
        
        {/* Inner dot */}
        <div className={`
          absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2
          transition-all duration-200 ease-out
          ${isHovering ? 'bg-accent scale-150' : 'bg-primary'}
        `} />
      </div>

      {/* Trailing effect */}
      <div
        ref={trailRef}
        className={`fixed pointer-events-none z-[9998] w-10 h-10 will-change-transform transition-opacity duration-300 ${
          isHovering ? 'opacity-60' : 'opacity-30'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className={`
          w-full h-full rounded-full bg-gradient-primary blur-sm transition-transform duration-300
          ${isHovering ? 'scale-150' : 'scale-100'}
        `} />
      </div>

      {/* Ambient glow */}
      <div
        ref={glowRef}
        className={`fixed pointer-events-none z-[9997] w-16 h-16 will-change-transform transition-opacity duration-500 ${
          isHovering ? 'opacity-30' : 'opacity-15'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className={`
          w-full h-16 rounded-full bg-gradient-primary blur-lg transition-transform duration-500
          ${isHovering ? 'scale-200' : 'scale-100'}
        `} />
      </div>
    </>
  );
};

export default CursorFollower;