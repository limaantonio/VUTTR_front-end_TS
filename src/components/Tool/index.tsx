import React, {useState} from 'react';
import {FiTrash2} from 'react-icons/fi';


import {Container} from './styles';

import ModalRemoveTool from '../../components/ModalRemoveTool';

interface ITool{
  _id: number;
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface IProps{
  tool: ITool;
  handleDelete: (_id: number) => {};
}

const Tool: React.FC<IProps> = ({
  tool,
  handleDelete,

}: IProps) => {
  
  const [modalRemoveTool, setModalRemoveTool] = useState(false);
  
  function openModalRemove(){
    setModalRemoveTool(true);
  }
  
  function toggleModalRemove(): void{
    setModalRemoveTool(!modalRemoveTool);
  }

return (
  <Container>
    <div key={tool._id} id="card">
      <div>
        <a href={tool.link}>{tool.title}</a>
        <p>{tool.description}</p>
        <span>{tool.tags}</span>
 
        <button onClick={() => openModalRemove()} className="btnTrash">
          <FiTrash2 size={20}/>
        </button>
        
        <ModalRemoveTool
          isOpen={modalRemoveTool}
          setIsOpen={toggleModalRemove}
          handleRemoveTool={() => handleDelete(tool._id)}
        /> 
       </div>
      </div>
    </Container>
)
};

export default Tool;