import React from "react";
import Image from "next/image";
import { SectionSubTitle } from "./SectionSubTitle";

const Services = () => {
  const services = [
    {
      title: "Проектування будинків",
      description:
        "Створення індивідуальних проектів будинків з урахуванням всіх побажань клієнта та сучасних тенденцій архітектури.",
      icon: "🏠",
    },
    {
      title: "Будівельний паспорт",
      description:
        "Професійне оформлення будівельного паспорта з дотриманням всіх норм та вимог законодавства.",
      icon: "📋",
    },
    {
      title: "Топозйомка та геодезія",
      description:
        "Проведення точних геодезичних вимірювань та створення топографічних планів ділянки.",
      icon: "📐",
    },
    {
      title: "Кадастрові послуги",
      description:
        "Оформлення кадастрових документів, постановка на облік земельних ділянок та об'єктів нерухомості.",
      icon: "🗺️",
    },
    {
      title: "Дизайн інтер'єру",
      description:
        "Створення унікальних дизайн-проектів інтер'єру, що відповідають сучасним тенденціям та побажанням клієнта.",
      icon: "🎨",
    },
    {
      title: "Реконструкція будівель",
      description:
        "Професійна реконструкція та модернізація існуючих будівель з урахуванням сучасних вимог.",
      icon: "🏗️",
    },
  ];

  return (
    <section id="service" className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 flex flex-col gap-y-2">
          <SectionSubTitle title="основні послуги" />
          <h2 className="md:text-6xl  text-5xl font-bold">Послуги</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#E0F7F7] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
