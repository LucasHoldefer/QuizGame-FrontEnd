import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.backgroud};
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 80vh;

  background-color: ${({ theme }) => theme.colors.question};
  border-radius: 8px;

  padding: 12px;
`;

export const QuestionCard = styled.div`

  height: 160px;

  margin-bottom: 32px;



`;
