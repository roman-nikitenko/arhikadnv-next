import React from 'react';
import { SocialNetwork } from './SocialNetwork';
import instagram from '../public/social/instagram.svg'
import facebook from '../public/social/facebook.svg'
import twitter from '../public/social/twitter.svg'
import email from '../public/icons/email.svg';
import phone from '../public/icons/phone.svg';
import point from '../public/icons/point.svg';
import { Logo } from './Logo';
import { address, phoneNumber, slogan } from '../data';
import { Navigation } from './Navigation';
import Image from 'next/image';



export const Footer: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg lg:px-0 px-4 m-auto pt-[100px] mb-10">
      <div className="border-b-gray-300 border my-[35px]" />
      <div className="flex flex-col-reverse  lg:flex-row gap-7 lg:gap-0 lg:justify-between">
        <div className="flex flex-col gap-y-4 w-[300px]">
          <Logo />
          <p>{slogan}</p>
        </div>
        <Navigation listStyle="flex-col text-emerald-700 gap-3" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Image src={email.src} width={20} height={20} alt='contacts' />
            <a href="mailto:arhicadnv@ukr.net">arhicadnv@ukr.net</a>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Image src={phone.src} width={20} height={20} alt='contacts' />
            <a href="tel:+380980055404">{phoneNumber}</a>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Image src={point.src} width={20} height={20} alt='contact' />
            <a target="_blank" href="https://www.google.com/maps/place/Vul.+Heroyiv+Maydanu,+15,+Bucha,+Kyivs'ka+oblast,+08292/@50.550914, 30.214758,18z/data=!3m1!4b1!4m6!3m5!1s0x472b31b8c0de22a1:0xbd398d80c7ce2c99!8m2!3d50.5519049!4d30.215133!16s%2Fg%2F11vq9mn492?entry=ttu">{address}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

