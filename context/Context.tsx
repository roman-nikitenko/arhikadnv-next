'use client';
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