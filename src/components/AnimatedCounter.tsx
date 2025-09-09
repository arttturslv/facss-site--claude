import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

// Helper function to format numbers with max 3 digits
const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    const billions = num / 1000000000;
    if (billions >= 100) return `${Math.round(billions)}B`;
    if (billions >= 10) return `${Math.round(billions * 10) / 10}B`;
    return `${Math.round(billions * 100) / 100}B`;
  }
  
  if (num >= 1000000) {
    const millions = num / 1000000;
    if (millions >= 100) return `${Math.round(millions)}M`;
    if (millions >= 10) return `${Math.round(millions * 10) / 10}M`;
    return `${Math.round(millions * 100) / 100}M`;
  }
  
  if (num >= 1000) {
    const thousands = num / 1000;
    if (thousands >= 100) return `${Math.round(thousands)}K`;
    if (thousands >= 10) return `${Math.round(thousands * 10) / 10}K`;
    return `${Math.round(thousands * 100) / 100}K`;
  }
  
  return Math.round(num).toString();
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '+',
  duration = 2500,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;
    const targetValue = value;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutQuart for smoother animation with more intermediate values
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, hasAnimated, value, duration]);

  return (
    <div ref={ref} className={className}>
      {formatNumber(count)}{suffix}
    </div>
  );
};

