import { ReactNode, JSX } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: boolean;
}

// Base container for consistent max-width and padding
export const Container = ({ 
  children, 
  className = '' 
}: ContainerProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className={`max-w-7xl mx-auto px-8 ${className}`}>
        {children}
      </div>
    </div>
  );
};

// Section wrapper for pages/components that need background styling
export const Section = ({ 
  children, 
  className = '',
  background = false // For sections with background colors/images
}: SectionProps): JSX.Element => {
  return (
    <section className={`w-full relative ${background ? '' : ''} ${className}`}>
      {children}
    </section>
  );
};