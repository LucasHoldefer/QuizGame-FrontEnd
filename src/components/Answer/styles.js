import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  border: none;
  color: #FFF;
  text-align: justify;

  background-color: ${({ theme }) => theme.colors.answer.main};

  border-radius: 16px;
  padding: 8px;


  & + & {
    margin-top: 24px
  }


  &:hover {
    background-color: ${({ theme }) => theme.colors.answer.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.answer.dark};
  }

  background-color: ${({ colorAnswer }) => colorAnswer};



`;
