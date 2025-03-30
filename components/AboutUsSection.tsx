import React from "react";

export const AboutUsSection: React.FC = () => {
  const transitionDelay = {
    delay: 1,
    duration: 0.7,
  };

  return (
    <section id="company"  className="section-md items-center md:px-0 md:py-3 px-4 ">
      <div className='aspect-square h-[440px] md:w-[400px] w-full bg-cover bg-no-repeat relative bg-[url("../public/plan3.jpg")]'>
        <div className="absolute -top-3 -z-20 -left-3">
          <div className="size-[130px] border border-black" />
        </div>
        <div className={`absolute top-0`}>
          <div
            className="w-0 h-0 transform
                    border-t-[55px] border-t-[var(--background-color)]
                    border-r-[55px] border-r-transparent"
          />
        </div>
      </div>
      <div  className=" md:w-[500px] w-full flex flex-col md:gap-7 gap-5 justify-center ">
        <p className="text-emerald-700 uppercase">/Про нас</p>
        <p className="">
          <strong>Архікад-НВ</strong> – це команда професіоналів у сфері архітектури, будівництва
          та землеустрою. Ми спеціалізуємося на оформленні документів на будинок
          під ключ, розробці проєктів на будинок, проєктів на комерцію та
          тимчасових споруд (МАФ).
        </p>
        <p>
          Ми допомагаємо клієнтам отримати будівельний паспорт, паспорта
          прив’язки та технічні паспорти на об’єкти нерухомості. Крім того, наша
          компанія виконує проєкти на БІЛБОРДИ (рекламні носії), топозйомки в м
          1:500 та інші геодезичні роботи, зокрема винос меж в натуру.
        </p>
        <p>
          Якщо вам потрібно змінити цільове призначення земельної ділянки, ми
          розробимо всі необхідні проєкти зміни цільового призначення та
          оформимо технічну документацію на визначення кадастрового номера.
        </p>
        <p>
          Наші експерти допоможуть з правильним поділом земельних ділянок
          (згідно норм ДБН ) та надають повний спектр послуг у сфері архітектури
          та землеустрою.
        </p>
        <p>
          Ми гарантуємо оперативність, професіоналізм та якість виконання робіт.
          Звертайтесь до Архікад-НВ – ми зробимо все для вашого комфорту та
          законного оформлення нерухомості!
        </p>
        <div className="md:flex md:justify-between md:flex-row flex-col hidden w-full items-center gap-5 ">
          <div>
            <h3 className="bold-text">
              <span className="accent-text">+</span>300
            </h3>
            <SubTextAnimation>Виконані проекти</SubTextAnimation>
          </div>
          <div>
            <h3 className="bold-text">
              6<span className="accent-text">Р</span>
            </h3>
            <SubTextAnimation>Досвід</SubTextAnimation>
          </div>
          <div>
            <h3 className="bold-text">
              <span className="accent-text">+</span>400
            </h3>
            <SubTextAnimation>Задоволені клієнти</SubTextAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

const SubTextAnimation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="sub-text">{children}</p>;
};
