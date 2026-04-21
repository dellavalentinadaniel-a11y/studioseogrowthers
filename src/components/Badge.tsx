import React from 'react';

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`bg-primary/20 text-blue-400 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4 inline-block ${className}`}>
    {children}
  </span>
);

export default Badge;
