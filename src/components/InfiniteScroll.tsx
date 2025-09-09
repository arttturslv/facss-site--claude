import React from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  speed?: number; // seconds for one complete cycle
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  speed = 30,
  direction = 'left',
  pauseOnHover = true
}) => {
  const animationDirection = direction === 'left' ? 'scroll-left' : 'scroll-right';
  
  return (
    <div className="overflow-hidden">
      <div
        className={`flex ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{
          animation: `${animationDirection} ${speed}s linear infinite`,
        }}
      >
        {/* First set of children */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 shrink-0">
          {children}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 shrink-0 ml-8 sm:ml-12 lg:ml-16">
          {children}
        </div>
      </div>
    </div>
  );
};