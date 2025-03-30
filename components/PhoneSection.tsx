import React from 'react';
import viber from '../public/icons/viber.svg';
import telegram from '../public/icons/telegram.svg';
import whatsapp from '../public/icons/whatsapp.svg';
import { phoneNumber } from '../data';
import Image from 'next/image'

type PhoneSectionType = {
  visible: "hidden"  | "visible";
  style?: string
}

export const PhoneSection: React.FC<PhoneSectionType> = ({ visible, style }) => {
  return (
    <div className={ `text-[var(--light)] md:flex md:gap-2 items-center ${style} ${visible}` }>
      <div className="flex items-center gap-2">
        <img loading="lazy" src={viber.src} alt="Іконка Viber" className="size-7"/>
        <img loading="lazy" src={telegram.src} alt="Іконта Telegram" className="size-8"/>
        <img loading="lazy" src={whatsapp.src} alt="Іконта Whatsapp" className="size-9"/>
      </div>
      
      
      <a href="tel:+3806323412345">{phoneNumber}</a>
    </div>
  );
};
