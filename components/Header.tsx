"use client";
import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
// import { motion } from 'framer-motion'
import { slogan } from "../data";
import useNoScroll from "../hooks/NoScroll";
import { SideBar } from "./SideBar";

export const Header: React.FC = () => {
  const [upToTop, setToTop] = useState<boolean>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const heightScreen = window.innerHeight;
    setToTop(scrollTop > heightScreen - 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  useNoScroll(isOpen);

  return (
    <header
      id="home"
      className="header relative bg-cover md:bg-center overflow-hidden bg-[-300px] bg-no-repeat h-screen w-full mb-[80px]"
    >
      <div className="absolute inset-0 -z-10 bg-center bg-cover bg-[url('../public/arhicadnv-main.png')]" />
      <div className="bg-[#24272B]/[0.5] h-full">
        <div className="fixed z-50 w-full">
          <div
            className={`backdrop-blur-sm duration-700 z-40 overflow-hidden transition ${
              upToTop ? "bg-emerald-900/30" : "bg-white/10"
            } `}
          >
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        <div className="wrapper md:px-10 2xl:px-0 px-5 max-w-screen-2xl m-auto">
          <div className="h-screen flex items-end pb-20">
            <div className="title w-[700px] flex-col gap-y-2 text-white">
              <h1 className="text-[var(--light)] md:text-7xl font-bold mb-8 text-4xl">
                Архітектурні послуги та оформлення документів у Бучі
              </h1>
              <h2 className="md:text-base text-sm text-[var(--light)]">
                Від ідеї до будівництва — ми пропонуємо комплексні архітектурні
                рішення, створення проєктів для житлових і комерційних об’єктів,
                оформлення будівельного паспорта, технічної документації,
                кадастрових номерів та всіх необхідних дозвільних документів.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
