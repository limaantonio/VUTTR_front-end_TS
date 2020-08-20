import styled from 'styled-components';
import {Form as Unform} from '@unform/web';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #FFFFFF;
  height: 620px;
 
  opacity: 1;
  padding: 36px;

  button{
    margin: 20px 0 0 0;
    width: 100%;
    height: 260px;
    border-radius: 5px;
    border: 0;
    color: #fff;
   
    font-weight: bold;
    transition: background-color 0.2s;

    background: #6554C0 0% 0% no-repeat padding-box;
   
    opacity: 1

  }

  h1{
    margin: 0px 0px 20px 0;
  }

  
`;

