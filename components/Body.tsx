import React from 'react';
import { TestimonialsSection } from './TestimonialsSection';
import { QuestionSection } from './QuestionSection';
import { FormSection } from './FormSection';
import { PortfolioSection } from './PortfolioSection';
import { AboutUsSection } from './AboutUsSection';
import { AdvantageSection } from './AdvantageSection';
import Services from "@/components/Services";

export const Body: React.FC = () => {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col sm:overflow-auto overflow-hidden sm:py-0 py-3 items-center gap-y-[50px] md:gap-y-[100px]">
      <AboutUsSection />
      <AdvantageSection />
      <Services />
      <QuestionSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FormSection/> 
    </div>
  );
};
