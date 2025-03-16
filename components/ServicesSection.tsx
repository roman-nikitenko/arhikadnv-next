import React from 'react';
import { SectionSubTitle } from './SectionSubTitle';
import serviceImage1 from '../public/services/designAndPlane-transformed.jpeg';
import serviceImage2 from '../public/services/bucha-lend.jpg';
import serviceImage3 from '../public/services/constructionDocumentation-transformed.jpeg';


export const ServicesSection: React.FC = () => {  
  const services = [
    {
      id: 1,
      title: "Сфера архетектури",
      subtitle: "Розробка житлових, комерційних та тимчасових споруд.",
      backGroundImage: serviceImage3
    },
    {
      id: 2,
      title: "Землевпорядні роботи",
      subtitle: "Топозйомка, винесення меж, зміна цільового призначення земельних ділянок.",
      backGroundImage: serviceImage2
    },
    {
      id: 3,
      title: "БТІ",
      subtitle: "Технічні паспорти, висновки про поділ, оформлення кадастрових номерів.",
      backGroundImage: serviceImage1
    },
  ];
  
  return (
    <section className="section-md md:px-0 px-4 scroll-mt-28">
      <div className="w-full flex flex-col gap-y-8">
        <SectionSubTitle title="основні послуги" />
        <h2 className="md:text-6xl text-5xl font-bold">Послуги</h2>
        <div
          className="flex flex-col md:flex-row gap-3 md:justify-between md:h-[430px] h-[750px]"
        >
          {services.map(service => (
            <div
              key={service.id}
              style={{ backgroundImage: `url(${service.backGroundImage.src})` }} 
              className={`relative bg-cover bg-center bg-no-repeat size-full flex items-end`} 
            >
              <div className="absolute size-full bg-gradient-to-t from-black opacity-70 to-transparent" />
              <div className="flex z-10 gap-2 flex-col text-[var(--light)] p-6">
                <p className="title text-balance text-3xl w-6 font-normal">{service.title}</p>
                <p className="text-sm">{service.subtitle}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
