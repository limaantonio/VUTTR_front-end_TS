import React, {useRef, useCallback} from 'react';

import { FormHandles } from '@unform/core';

import {Form} from './styles';

import Modal from '../Modal';

import Input from '../Input';

interface ITool{
  _id: number;
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface ICreateTools{
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface IModalProps{
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: Omit<ITool, '_id'>,) => void;
}

const ModalAddTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateTools) => {
      await handleAddTool(data);
      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Add tool + </h1>
        <Input name="title" placeholder="Name"/>

        <Input  name="link" placeholder="Link"/>

        <Input  id="textarea" name="description" placeholder="Description"/>

        <Input name="tags" placeholder="Tags"/>

        <button data-testid="add-food-button" type="submit">
          <p>Adicionar</p>
        </button>
      </Form>

    </Modal>
  )
}

export default ModalAddTool;