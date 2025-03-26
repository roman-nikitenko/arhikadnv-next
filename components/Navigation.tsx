import React, { useContext } from 'react';
import { NavBarLink } from './NavBarLink';
import { moveToSection } from '../baseFunctions';
// import { ModalContext } from '../context/Context.tsx';

type NavigationProps = {
  listStyle?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ listStyle }) => {
  const links = [
    {
      id: 1,
      title: "Головна",
      refLink: '#home'
    },
    {
      id: 2,
      title: "Компанія",
      refLink: '#company',
    },
    {
      id: 3,
      title: "Послуги",
      refLink: '#service',
    },
    {
      id: 4,
      title: "Проекти",
      refLink: '#projects',
    },
  ]
  
  return (
    <div className="navbar text-[var(--light)] hidden md:block">
      <ul className={ `flex gap-10 ${ listStyle }` }>
        { links.map(link => (
          <NavBarLink key={link.id} title={link.title} scrollToId={link.refLink} />
        )) }
      </ul>
    </div>
  );
};
