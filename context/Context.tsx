'use client';
// import React, { FC, createContext, useState } from 'react';

// type initialModalContextType = {
//   isOpenModal: boolean;
//   setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
//   // aboutSectionRef: React.RefObject<HTMLDivElement | null>;
//   // servicesSectionRef: React.RefObject<HTMLDivElement | null>;
//   // projectsSectionRef: React.RefObject<HTMLDivElement | null>;
// }

// const initialModalContext: initialModalContextType = {
//   isOpenModal: false,
//   setIsOpenModal: () => {},
//   // aboutSectionRef: null,
//   // servicesSectionRef: null,
//   // projectsSectionRef: null,
// }

// type ModalContextProps = {
//   children: React.ReactNode
// }

// export const ModalContext = createContext<initialModalContextType>(initialModalContext)

// export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
//   const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
//   // const aboutSectionRef = useRef<HTMLDivElement>(null);
//   // const servicesSectionRef = useRef<HTMLDivElement>(null);
//   // const projectsSectionRef = useRef<HTMLDivElement>(null);
  
//   const value = {
//     isOpenModal: isOpenModal,
//     setIsOpenModal: setIsOpenModal,
//     // aboutSectionRef: aboutSectionRef,
//     // servicesSectionRef: servicesSectionRef,
//     // projectsSectionRef: projectsSectionRef,
//   }
  
//   return (
//     <ModalContext.Provider value={value}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

type ModalContextType = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

interface ContextProps {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  isOpenModal: false,
  setIsOpenModal: () => {},
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);