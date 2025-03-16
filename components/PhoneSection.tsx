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
        <Image src={viber} alt="viber icon" className="size-7"/>
        <Image src={telegram} alt="telegram icon" className="size-8"/>
        <Image src={whatsapp} alt="wahtsapp icon" className="size-9"/>
      </div>
      
      
      <a href="tel:+3806323412345">{phoneNumber}</a>
    </div>
  );
};
