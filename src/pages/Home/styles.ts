import styled from 'styled-components';
import { Form as Unform } from '@unform/web';


export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 150px;
  background: #6554C0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: block;
  
  h1{
    margin-left: 20%;
    color: #fff;
    padding-top: 40px;
  }

  h3{
   
    margin-left: 20%;
    color: #fff;
  }
`;

export const Form = styled(Unform)`
  margin-top: 40px;
  max-width: 960;
 
  display: flex;

  input{
    flex: 1;    
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #f5f5f5;
    
  }  
  
  #caixa{
   
    position: relative;
    input{
      flex: 1;  
      width: 30px;
      margin-left: 10px;
    }
  }
  label{
      margin-top: 25px;
      margin-bottom: 10px;
      margin-left: 10px;
      margin-right: 150px;
    }
  
  button{
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 5px 5px;
    border: 0;
    color: #fff;
    background: #6554C0;
    font-weight: bold;
    transition: background-color 0.2s;
    
  }
`;

