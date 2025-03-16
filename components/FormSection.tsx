import React from 'react';
import { Form } from './Form';

type FormSectionProps = {
  map?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = () => {
  return (
    <section className="flex flex-col lg:flex-row md:w-[350px] w-full md:px-0 px-4 items-center justify-center max-w-screen-lg gap-4">
        <Form />
    </section>
  );
};
