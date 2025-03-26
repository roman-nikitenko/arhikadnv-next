import React from 'react';

type NavBarLinkProps = {
  title: string;
  scrollToId: string;
}

export const NavBarLink: React.FC<NavBarLinkProps> = ({ title, scrollToId }) => {
  return (
    <div className="relative block cursor-pointer overflow-hidden whitespace-nowrap leading-5">
      <a href={scrollToId}>{title}</a> 
    </div>
  );
};
