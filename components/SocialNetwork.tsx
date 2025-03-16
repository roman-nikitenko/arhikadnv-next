import React from 'react';
import Image from 'next/image';

type SocialNetworkProps = {
  image: string;
}

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ image }) => {
  return (
    <div className="bg-[var(--accent-color)] flex justify-center items-center size-10">
      <Image loading="lazy" src={image} className="size-6" alt="social media"/>
    </div>
  );
};
