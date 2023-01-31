import styled from 'styled-components';

export default styled.button`
  width: 220px;
  height: 60px;
  border-radius: 24px;
  font-size: 24px;
  color: #FFF;

  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;


  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }
`;
