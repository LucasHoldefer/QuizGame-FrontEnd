import styled from 'styled-components';

export default styled.button`
  width: 220px;
  height: 60px;
  border-radius: 24px;
  font-size: 24px;
  color: #FFF;

  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;


`;
