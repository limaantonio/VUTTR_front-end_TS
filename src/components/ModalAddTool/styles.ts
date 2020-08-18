import styled from 'styled-components';
import {Form as Unform} from '@unform/web';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  button{
    margin-top: 20px;
    height: 70px;
    border-radius: 5px 5px;
    border: 0;
    color: #fff;
    background: linear-gradient(180deg, #FD0E47 0%, rgba(233, 63, 10, 0.83) 100%);
    font-weight: bold;
    transition: background-color 0.2s;

  }

  h1{
    margin-bottom: 40px;
  }

  
`;

