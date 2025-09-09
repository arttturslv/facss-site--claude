import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up'
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-12 blur-sm`;
        case 'fade-in':
          return `${baseClasses} opacity-0 blur-sm`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-90 blur-sm`;
        default:
          return `${baseClasses} opacity-0 translate-y-12 blur-sm`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100 blur-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};