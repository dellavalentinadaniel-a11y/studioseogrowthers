
import React from 'react';

interface LogoComponentProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'large' | 'xl';
  isLink?: boolean;
}

const LogoComponent = ({ className, size = 'md', isLink = true }: LogoComponentProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    large: 'h-16',
    xl: 'h-20',
  };

  const Content = (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/imagenes/logo/logo.png" 
        alt="SEO Growthers" 
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain`}
      />
    </div>
  );

  if (isLink) {
    return <a href="/">{Content}</a>;
  }

  return Content;
};

export default LogoComponent;
