import React from "react";
import { SectionSubTitle } from "./SectionSubTitle";
import plan2 from "../public/plan2.jpg";
import Image from "next/image";

export const AdvantageSection: React.FC = () => {
  return (
    <section className="section-md md:px-0 px-4">
      <div className="flex flex-col gap-5 md:mb-0 mb-8 pt-6">
        <SectionSubTitle title="Чому обирають нас" />
        <h2 className="md:text-4xl text-balance md:w-[600px] w-full text-3xl font-bold">
        Супроводжуємо вас від ідеї до реалізації
        </h2>
        <ul className="pl-10 flex flex-col gap-2 md:w-[500px] w-full">
          <li className="list-disc var(--dark)">
            <strong>Інноваційні рішення</strong> – використовуємо сучасні
            підходи до проєктування та оформлення документації.
          </li>
          <li className="list-disc var(--dark)">
            <strong>Комплексні послуги</strong> – від розробки проєкту до
            повного пакету дозвільних документів.
          </li>
          <li className="list-disc var(--dark)">
            <strong>Сталий розвиток</strong> – впроваджуємо екологічні та
            енергоефективні рішення.
          </li>
          <li className="list-disc var(--dark)">
            <strong>Клієнт-орієнтованість</strong> – враховуємо ваші побажання
            та знаходимо найкращі варіанти для втілення ідей.
          </li>
        </ul>
      </div>
      <div className="h-[440px] md:w-[370px] group relative">
        <div className="absolute border border-black size-full -z-10 -left-3 -top-3" />
        <img loading="lazy" src={plan2.src} alt="Креслення з лінійкою та олівцем" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};
