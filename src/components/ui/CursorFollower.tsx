import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track hover states for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer glow ring */}
        <div className={`
          w-8 h-8 rounded-full border border-primary/30 
          transition-all duration-300 ease-out
          ${isHovering ? 'border-primary/60 scale-125' : 'border-primary/30'}
        `} />
        
        {/* Inner dot */}
        <div className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-2 h-2 rounded-full bg-primary
          transition-all duration-300 ease-out
          ${isHovering ? 'bg-accent scale-150' : 'bg-primary'}
        `} />
      </div>

      {/* Trailing effect */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-500 ease-out ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`
          w-10 h-10 rounded-full bg-gradient-primary blur-sm
          transition-all duration-500 ease-out
          ${isHovering ? 'scale-150 opacity-40' : 'scale-100 opacity-20'}
        `} />
      </div>

      {/* Ambient glow */}
      <div
        className={`fixed pointer-events-none z-[9997] transition-all duration-700 ease-out ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`
          w-16 h-16 rounded-full bg-gradient-primary blur-lg
          transition-all duration-700 ease-out
          ${isHovering ? 'scale-200 opacity-20' : 'scale-100 opacity-10'}
        `} />
      </div>
    </>
  );
};

export default CursorFollower;