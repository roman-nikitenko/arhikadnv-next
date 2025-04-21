'use client';
import React, { useId } from 'react';
import { Testimonial } from '../types/testimonial';
import { TestimonialCard } from './TestimonialCard';
// import { motion } from 'framer-motion'

export const TestimonialsSection: React.FC = () => {

  const id = useId();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      message: 'Замовляли оформлення документів на будинок під ключ в Архікад НВ – усе зробили швидко та якісно! Відразу отримали будівельний паспорт та всі необхідні документи.',
      name: 'Олександр',
      date: '07.03.2019',
      position: 'Manager',
    },
    {
      id: 2,
      message: 'Дуже задоволений співпрацею з Архікад НВ! Робили для мене проєкт на будинок, а також допомогли з технічним паспортом.',
      name: 'Олена',
      date: '31.03.2020',
      position: 'Manager',
    },
    {
      id: 3,
      message: 'Рекомендую компанію Архікад НВ! Вони швидко та професійно оформили проєкт на БІЛБОРДИ (рекламні носії), усе затвердили без проблем.',
      name: 'Катерина',
      date: '22.08.2020',
      position: 'Manager',
    },
    {
      id: 4,
      message: 'Замовляли топозйомку в м 1:500 та геодезію для будівництва. Дуже задоволені якістю послуг від Архікад НВ!',
      name: 'Марія',
      date: '12.10.2020',
      position: 'Manager',
    },
    {
      id: 5,
      message: 'Професіонали своєї справи! Робили паспорта прив’язки та проєкти тимчасових споруд (МАФ) – все чітко та вчасно!',
      name: 'Дмитро',
      date: '24.11.2020',
      position: 'Manager',
    },
    {
      id: 6,
      message: 'Звертався за виносом меж в натуру, адже була невизначена межа ділянки. Дякую Архікад НВ, тепер усе законно!',
      name: 'Анастасія',
      date: '14.09.2021',
      position: 'Manager',
    },
    {
      id: 7,
      message: 'Довго шукав, де можна зробити проєкти на комерцію, і знайшов Архікад НВ. Відмінний сервіс, допомогли з усіма документами!',
      name: 'Наталія',
      date: '28.11.2021',
      position: 'Manager',
    },
    {
      id: 8,
      message: 'Замовляли проєкти на будинок та оформлення всіх документів під ключ. Дуже вдячний Архікад НВ за швидкість та професіоналізм!',
      name: 'Іван',
      date: '25.12.2021',
      position: 'Manager',
    },
    {
      id: 9,
      message: 'Компанія Архікад НВ допомогла нам отримати технічну документацію на визначення кадастрового номера. Працюють швидко та без зайвих питань!',
      name: 'Софія',
      date: '02.04.2022',
      position: 'Manager',
    },
    {
      id: 10,
      message: 'Якщо вам потрібен будівельний паспорт, звертайтеся до Архікад НВ. Нам усе зробили в короткий термін!',
      name: 'Олег',
      date: '22.05.2022',
      position: 'Manager',
    },
    {
      id: 11,
      message: 'Шукав, де можна замовити проєкти зміни цільового призначення земельної ділянки. В Архікад НВ все зробили професійно та швидко!',
      name: 'Роман',
      date: '18.08.2022',
      position: 'Manager',
    },
    {
      id: 12,
      message: 'Оформили нам технічний паспорт на будинок. Дякуємо Архікад НВ, звертатимемося ще!',
      name: 'Павло',
      date: '21.08.2022',
      position: 'Manager',
    },
    {
      id: 13,
      message: 'Робив у Архікад НВ геодезію та винос меж в натуру. Дуже вдячний за оперативність та якісну роботу!',
      name: 'Оксана',
      date: '11.11.2022',
      position: 'Manager',
    },
    {
      id: 14,
      message: 'Дякуємо за допомогу у виготовленні проєктів на тимчасові споруди (МАФ). Все вийшло ідеально!',
      name: 'Василь',
      date: '30.10.2023',
      position: 'Manager',
    },
    {
      id: 15,
      message: 'Потрібно було узаконити рекламні носії (БІЛБОРДИ) – Архікад НВ зробили все швидко та без зайвих проблем!',
      name: 'Сергій',
      date: '11.01.2024',
      position: 'Manager',
    },
    {
      id: 16,
      message: 'Звернувся для отримання паспорта прив’язки – хлопці з Архікад НВ все оформили ідеально!',
      name: 'Владислав',
      date: '19.05.2024',
      position: 'Manager',
    },
    {
      id: 17,
      message: 'Оформили нам проєкти на комерцію та допомогли з іншими документами. Дякуємо Архікад НВ за професійний підхід!',
      name: 'Кирило',
      date: '29.05.2024',
      position: 'Manager',
    },
    {
      id: 18,
      message: 'Звертався для отримання висновку про поділ земельної ділянки. У Архікад НВ все зробили швидко і якісно!',
      name: 'Ганна',
      date: '20.06.2024',
      position: 'Manager',
    },
    {
      id: 19,
      message: 'Дякую Архікад НВ за якісне оформлення технічної документації на визначення кадастрового номера.',
      name: 'Ольга',
      date: '08.07.2024',
      position: 'Manager',
    },
    {
      id: 20,
      message: 'Швидко та професійно оформили топозйомку в м 1:500. Задоволений роботою Архікад НВ!',
      name: 'Віталій',
      date: '10.09.2024',
      position: 'Manager',
    },
    {
      id: 21,
      message: 'Дуже задоволений співпрацею з Архікад НВ! Робили для мене проєкт на будинок, а також допомогли з технічним паспортом.',
      name: 'Вероніка',
      date: '21.11.2024',
      position: 'Manager',
    },
  ];
  
  return (
    <section className="bg-[#191919] py-20 flex flex-col overflow-hidden gap-y-14 w-full">
      <div className="max-w-screen-lg m-auto w-full">
        <div className="flex flex-col  items-start gap-y-4">
          <div className="bg-[color:var(--accent-color)] text-[var(--light)] py-1 px-2 text-xs rounded-full">Відгуки</div>
          <h2 className="uppercase text-[var(--light)] text-4xl md:text-5xl">повідомлення від наших <br/> цінних <span className="text-[var(--accent-color)]">клієнтів</span> </h2>
        </div>
      </div>
      <div className="overflow-x-hidden flex px-5">
        <div className="infinite-scroll-x flex gap-2 items-center">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={testimonial.id + index} testimonial={testimonial}/>
          ))}
        </div>
      </div>
    </section>
  );
};
