import React,{useEffect, useState} from 'react';
import {Header, Form, Container} from './styles';


import api from '../../service/api';
import ModalAddTool from '../../components/ModalAddTool';

import Tool from '../../components/Tool';

interface ITool{
  _id: number;
  title: string;
  description: string;
  link: string;
  tags: string;
 
}


interface ICreateTool{
 
  title: string;
  description: string;
  link: string;
  tags: string;
}


const Home: React.FC = () => {
  const [tools, setTools] = useState<ITool[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [tag, setTag] = useState('');
  
  useEffect(() => {
    loadTools();
  }, []);

  async function loadTools(): Promise<void> {
    const response = await api.get<ITool[]>('tools');
    setTools(response.data);
  }

  function openModal(){
    setModalOpen(true);
  }

  async function handleAddTool(tool: Omit<ICreateTool, '_id'>, ): Promise<void>{
    try {
      const newTool: ICreateTool ={
        title: tool.title,
        link: tool.link,
        description: tool.description,
        tags: tool.tags
        
      };
      const toolAdd = await api.post('/tool', newTool );

      console.log(toolAdd.data._id);
      
      const tooll: ITool = {
        _id: toolAdd.data._id,
        title: tool.title,
        link: tool.link,
        description: tool.description,
        tags: tool.tags
      }

      console.log(tooll);
      
      setTools([...tools, tooll]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleRemoveTool(id: number): Promise<void>{
    await api.delete(`tool/${id}`);
    const listTool = tools.filter(tool => tool._id !== id);
    setTools(listTool);
     
  }

  function toggleModal(): void{
    setModalOpen(!modalOpen);
  }

  
  function handleCheck(): void{
    var checkBox = document.getElementById("check") as HTMLInputElement;
    
    if(checkBox?.checked === true){
      loadByTag(tag)
    }else{
      loadTools();
    }
  }
  

 async function loadByTag(tag: string){
  try{
    await api.get(`tools?tag=${tag}`).then(response => setTools(
      response.data,

    ));
   
    }catch(err){
      console.log(err);
    }
  }

 
  return (
    <>
      <Header>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
      </Header>

      <Container>
        <Form onSubmit={loadByTag}>
        
        <input
            value={tag} 
            onChange = {e => setTag(e.target.value)}
            id="inputSeach" 
            placeholder="Search"
          />

          <div id="caixa">
            <input 
              onClick={handleCheck}
              id="check"
              type="checkbox" 
             />
            
          </div>
          <label>search in tags only</label>
         
          <button type="button" onClick={() => openModal()}>Adicionar</button>
          <ModalAddTool
            isOpen={modalOpen}
            setIsOpen={toggleModal}
            handleAddTool={handleAddTool}
          />
        </Form>

       
        { tools.map(tool => (
        
          <Tool
            key={tool._id}
            tool={tool}
            handleDelete={handleRemoveTool}
          />
        
        ))}
      </Container> 
   </>
  )
}
export default Home;

