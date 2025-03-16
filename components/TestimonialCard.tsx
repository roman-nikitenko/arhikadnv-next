import React from 'react';
import { Testimonial } from '../types/testimonial';

type TestimonialsSectionProps = {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialsSectionProps> = ({ testimonial }) => {
  const { name, message, date, id } = testimonial;
  
  return (
    <div className={`bg-[var(--light)] break-inside-avoid min-w-[250px] rounded-lg mb-4 gap-4 p-4`}>
      <p className="text-base">{message}</p>
      <div className="border-b border-b-gray-400 mt-3 mb-3" />
      <div className="flex items-center">
        <div className="flex gap-2 w-full items-center">
          <div className="flex gap-0.5 w-full items-center justify-between text-xs">
            <p className="font-bold text-sm">{name}</p>  
            <data>{date}</data>        
          </div>
        </div>
      </div>
    </div>
  );
};
