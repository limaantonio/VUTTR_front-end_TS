import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  background: #F5F4F6;
  border: 1px solid #EBEAED;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${props =>
    props.isFocused &&
    css`
     background: #EBEAED 0% 0% no-repeat padding-box;
      border: 1px solid #DEDCE1;
      border-radius: 5px;
      opacity: 1;
    `}

  ${props =>
    props.isFilled &&
    css`
      background: #F5F4F6 0% 0% no-repeat padding-box;
      border: 1px solid #EBEAED;
      border-radius: 5px;
      opacity: 1;
    `}

  input {
    flex: 1;
   background: transparent;
   
    border: transparent;
   
    
    opacity: 1;
    border-radius: 5px;


    &::placeholder {
      color: #b7b7cc;
    }
  }

  #textarea{
    margin: 10px 0;
    width: 100%;
    height: 120px;
    border: 0;
    border-radius: 8px;
   
    text-align: top;
    font-size: 18px;
    color: #b7b7cc;
  }

  svg {
    margin-right: 16px;
  }
`;
