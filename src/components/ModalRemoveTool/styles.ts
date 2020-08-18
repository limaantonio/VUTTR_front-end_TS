import styled from 'styled-components';
import {Form as Unform} from '@unform/web';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  
  .box{
    button{
      width: 100px;
      margin-top: 20px;
      margin-right: 20px;
      height: 50px;
      border-radius: 5px 5px;
      border: 0;
      color: #fff;
      background: linear-gradient(180deg, #FD0E47 0%, rgba(233, 63, 10, 0.83) 100%);
      font-weight: bold;
      transition: background-color 0.2s;

    }

    #cancel{
      color: #FD0E47;
      background: #fff;
      border: 2px solid #FD0E47;
    }
  }
`;

