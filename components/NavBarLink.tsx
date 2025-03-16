import React from 'react';
// import {motion} from 'framer-motion'
// import { scrollToTop } from '../../baseFanctions.ts';

type NavBarLinkProps = {
  title: string;
  onClick: (ref: React.RefObject<HTMLDivElement>) => void;
  refSection: React.RefObject<HTMLDivElement> | null
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const NavBarLink: React.FC<NavBarLinkProps> = ({ title, onClick, refSection }) => {
  return (
    <div className="relative block cursor-pointer overflow-hidden whitespace-nowrap leading-5">
      <div>
        {title.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="absolute">
        {title.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};
