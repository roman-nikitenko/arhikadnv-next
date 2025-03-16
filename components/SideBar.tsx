import React, { Dispatch, SetStateAction, useContext } from 'react';
// import { ModalContext } from '../context/Context.tsx';
import { moveToSection, scrollToTop } from '../baseFunctions';
import { PhoneSection } from './PhoneSection';

type SideBarType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SideBar: React.FC<SideBarType> = ({ isOpen, setIsOpen}) => {

  // const moveToSection = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, refSection:React.RefObject<HTMLDivElement>) => {
  //   e.preventDefault();
  //   refSection.current?.scrollIntoView({
  //     inline: "nearest",
  //     behavior: "smooth",
  //   })
  // }
  
  // const { servicesSectionRef, projectsSectionRef, aboutSectionRef } = useContext(ModalContext)

  const links = [
    {
      id: 1,
      title: "Головна",
      refLink: null
    },
    {
      id: 2,
      title: "Компанія",
      refLink: null
    },
    {
      id: 3,
      title: "Послуги",
      refLink: null
    },
    {
      id: 4,
      title: "Проекти",
      refLink: null
    },
  ]
  
  return (
    <div className={ `overflow-hidden relative transition-all ${isOpen ? 'h-screen' : 'h-0'} duration-700` }>
      <div className="navbar flex flex-col items-center py-10 gap-10 h-full text-white">
        <PhoneSection visible="visible" style="flex flex-col-reverse gap-3 text-3xl" />
        <ul className="flex flex-col gap-10 text-3xl">
          {links.map(link => (
            <li onClick={() => {
              setIsOpen(false)
              link.refLink ? moveToSection(link.refLink) : scrollToTop()
            }} key={link.id}>
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
                     