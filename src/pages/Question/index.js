import {
  useEffect, useState, useCallback,
} from 'react';
import {
  Container, QuestionContainer, QuestionCard,
} from './styles';

import QuestionsService from '../../services/QuestionsService';

import Answer from '../../components/Answer';

export default function Question() {
  const [questions, setQuestions] = useState({});

  const [questionIndex, setQuestionIndex] = useState(0);

  // const [color, setColor] = useState('');

  const loadQuestions = useCallback(async () => {
    const questionList = await QuestionsService.getAllQuestions();

    setQuestions((prevState) => ({
      ...prevState,
      questionList,
    }));
  }, []);

  useEffect(() => {
    loadQuestions();
  }, []);

  function nextQuestion() {
    setQuestionIndex(questionIndex + 1);
  }

  async function handleCheckAnswer(answer) {
    console.log(answer);
    if (answer.correct) {
      window.alert('ACERTOU');

      // setColor('#00ff00');
    } else {
      window.alert('ERRRRRRRRRROOOU');

      // setColor('#FF0000');
    }
  }

  return (

    <Container>

      <QuestionContainer>
        {questions?.questionList?.length > 0
          ? (
            <>
              <QuestionCard>
                {questions?.questionList[questionIndex]?.description}
              </QuestionCard>

              {/* {questions?.questionList[questionIndex]?.answers.map((answer) => (
                <Answer key={answer.id} onClick={() => handleCheckAnswer(answer)} teste={color}>
                  {answer?.description}
                </Answer>
              ))} */}

              {questions?.questionList[questionIndex]?.answers.map((answer) => (
                <Answer key={answer.id} answer={answer} funct={handleCheckAnswer} />
              ))}

              <button type="button" onClick={() => nextQuestion()}>NEXT</button>
            </>
          )
          : (
            <div />
          )}

      </QuestionContainer>

    </Container>

  );
}
