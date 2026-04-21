import React from 'react';
import Badge from './Badge';

const SectionHeading = ({ badge, title, desc, centered = false }: { badge?: string, title: string, desc?: string, centered?: boolean }) => (
  <div className={`max-w-3xl mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
    {badge && <Badge>{badge}</Badge>}
    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
      {title}
    </h2>
    {desc && <p className="text-gray-soft text-lg leading-relaxed">{desc}</p>}
  </div>
);

export default SectionHeading;
