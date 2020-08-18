import React, {useRef, useCallback} from 'react';

import { FormHandles } from '@unform/core';

import {Form} from './styles';

import Modal from '../Modal';


interface IModalProps{
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveTool: (_id: number) => void;
}



const ModalRemoveTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleRemoveTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (_id: number) => {
      await handleRemoveTool(_id);
      setIsOpen();
    },
    [handleRemoveTool, setIsOpen],
  );

  function sair(){
    setIsOpen();
  }

 
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Remove tool</h1>
        <p>Tem certeza que deseja remover essa ferramenta?</p>
       
       <div className="box"> 
        
        <button onClick={sair} type="button"id="cancel">Cancelar</button>
        <button type="submit">Sim</button>
       </div>
      </Form>

    </Modal>
  )
}

export default ModalRemoveTool;