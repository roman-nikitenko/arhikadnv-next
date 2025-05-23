"use client";
import React, { useContext, useState } from "react";
import { portfolioList } from "../data";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioCardType } from "../types/portfolio";
import { Modal } from "./Modal";
import { Carousel } from "./Carousel";

export const PortfolioSection: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [activePortfolio, setActivePortfolio] =
    useState<PortfolioCardType | null>(null);
  const [current, setCurrent] = useState<number>(0);

  const clickCardHandler = (card: PortfolioCardType) => {
    setModalIsOpen(true);
    setActivePortfolio(card);
  };

  const closeHandler = () => {
    setModalIsOpen(false);
    setCurrent(0);
  };

  return (
    <>
      <Modal openModal={modalIsOpen} closeModal={closeHandler}>
        <Carousel
          current={current}
          setCurrent={setCurrent}
          images={activePortfolio?.listOfWorks}
        />
      </Modal>
      <section id="projects" className="section-md w-full scroll-mt-20">
        <div className="flex flex-col gap-y-10 xl:overflow-hidden overflow-x-auto">
          <div className="flex md:px-0 px-4 flex-col gap-y-3">
            <p className="text-emerald-700 uppercase">/минулі проєкти</p>
            <h2 className="text-3xl font-bold">
              Результати наших робіт <br /> не потребують пояснень
            </h2>
            <div className="text-gray-600">
              <p>
                Наше портфоліо — це більше, ніж просто проєкти. Це приклади
                того, як ми втілюємо ідеї в реальність, поєднуючи сучасний
                архітектурний стиль, комфорт і практичність. Ми працюємо в Бучі
                та Київській області, створюючи рішення, які не тільки
                виглядають ефектно, але й відповідають потребам замовника. У
                кожному проєкті — наша увага до деталей, прагнення до інновацій
                і щира любов до архітектури.
              </p>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-x-4 px-4 sm:px-0">
            {portfolioList.map((card) => (
              <div key={card.id} onClick={() => clickCardHandler(card)}>
                <PortfolioCard
                  title={card.title}
                  typeOfWork={card.typeOfWork}
                  backgroundImage={card.backgroundImage}
                  subTitle={card.subTitle}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
