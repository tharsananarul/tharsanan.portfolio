import React from 'react';

/**
 * Skeleton component for loading states.
 * Matches existing layout elements with shimmer effect.
 */
export default function Skeleton({ className = '', width, height, borderRadius = '0.5rem' }) {
  return (
    <div
      className={`shimmer ${className}`}
      style={{
        width: width || '100%',
        height: height || '1rem',
        borderRadius,
      }}
      aria-hidden="true"
    />
  );
}
