'use client';
import React from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { Form } from './Form';
import { useGlobalContext } from '@/context/Context';
import questionBG from '../public/land-banner.jpg'

export const QuestionSection: React.FC = () => {
  const { isOpenModal, setIsOpenModal } = useGlobalContext();

  console.log(isOpenModal);
  
  
  return (
    <>
      <Modal openModal={isOpenModal} closeModal={() => setIsOpenModal(false)} >
        <div className="bg-[var(--background-color)] flex w-[340px] p-5">
          <Form />
        </div>
      </Modal>

      <section className="overflow-hidden relative max-w-screen-2xl m-auto w-full">
        <div style={{ backgroundImage: `url(${questionBG.src})` }} className="size-full md:bg-fixed bg-cover bg-center">
          <div className="size-full md:px-0 px-4 bg-black/[0.5]">
            <div className="max-w-screen-lg flex flex-col gap-y-5 items-start py-[60px] text-[var(--light)] w-full max-w-screen-gl m-auto">
              <h2 className="md:text-3xl text-2xl font-bold">Ви готові натиснути кнопку? <br/> Задайте питання прямо зараз.</h2>
              <Button title="Задати запитання" onClick={() => setIsOpenModal(true)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
