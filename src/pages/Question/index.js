import {
  Container, QuestionContainer, QuestionCard,
} from './styles';

import { Answer } from '../../components/Answer';

export default function Question() {
  const questions = {
    question: {
      id: '213a83bc-911f-4e5b-a0f9-8d48a4423d90',
      description: 'Quantas patas tem um quadrupede?',
      answers: [
        {
          id: '68a99426-c2c4-4ab8-967c-5b5b0ec437ec',
          description: '4',
          correct: true,
        },
        {
          id: '88fecc8d-ffd7-4ab7-81e1-a7cff901420b',
          description: '3',
          correct: false,
        },
        {
          id: 'd96c1813-d460-4256-a54e-744f447f2dff',
          description: '2',
          correct: false,
        },
        {
          id: '842e1256-e8ea-4122-8139-da49448fd298',
          description: '5',
          correct: false,
        },
      ],
    },
    question: {
      id: '213a83bc-911f-4e5b-a0f9-8d48a4423d90',
      description: 'Quantas patas tem um quadrupede?',
      answers: [
        {
          id: '68a99426-c2c4-4ab8-967c-5b5b0ec437ec',
          description: '4',
          correct: true,
        },
        {
          id: '88fecc8d-ffd7-4ab7-81e1-a7cff901420b',
          description: '3',
          correct: false,
        },
        {
          id: 'd96c1813-d460-4256-a54e-744f447f2dff',
          description: '2',
          correct: false,
        },
        {
          id: '842e1256-e8ea-4122-8139-da49448fd298',
          description: '5',
          correct: false,
        },
      ],
    },
  };

  function handleCheckAnswer(answer) {
    console.log('answer');
    console.log(answer);

    if (answer.correct) {
      window.alert('ACERTOU');
    } else {
      window.alert('ERRRRRRRRRROOOU');
    }
  }

  return (

    <Container>

      <QuestionContainer>

        <QuestionCard key={questions.question.description}>
          {questions.question.description}
        </QuestionCard>

        {questions.question.answers.map((answer) => (
          <Answer key={answer.id} onClick={() => handleCheckAnswer(answer)}>
            {answer.description}
          </Answer>
        ))}

      </QuestionContainer>

    </Container>

  );
}
