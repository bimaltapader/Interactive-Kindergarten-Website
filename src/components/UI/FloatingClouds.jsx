import React from 'react';

export default function FloatingClouds() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      
      {/* Cloud 1 */}
      <div className="absolute top-[15%] left-[5%] opacity-[0.25] cloud-float-1 scale-75 sm:scale-100">
        <svg width="150" height="80" viewBox="0 0 150 80" fill="#CBD5E1">
          <circle cx="50" cy="50" r="30" />
          <circle cx="80" cy="40" r="35" />
          <circle cx="110" cy="50" r="25" />
          <rect x="50" y="55" width="60" height="25" />
        </svg>
      </div>

      {/* Cloud 2 */}
      <div className="absolute top-[40%] right-[8%] opacity-[0.2] cloud-float-2 scale-50 sm:scale-90">
        <svg width="180" height="90" viewBox="0 0 180 90" fill="#CBD5E1">
          <circle cx="60" cy="60" r="30" />
          <circle cx="95" cy="45" r="40" />
          <circle cx="130" cy="60" r="25" />
          <rect x="60" y="65" width="70" height="25" />
        </svg>
      </div>

      {/* Cloud 3 */}
      <div className="absolute bottom-[20%] left-[10%] opacity-[0.15] cloud-float-3 scale-[0.6] sm:scale-75">
        <svg width="140" height="70" viewBox="0 0 140 70" fill="#CBD5E1">
          <circle cx="45" cy="45" r="25" />
          <circle cx="72" cy="35" r="30" />
          <circle cx="100" cy="45" r="20" />
          <rect x="45" y="50" width="55" height="20" />
        </svg>
      </div>
    </div>
  );
}
