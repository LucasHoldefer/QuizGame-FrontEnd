import { useState } from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Answer({ answer, funct }) {
  const [color, setColor] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);

  function handleClickAnswer() {
    if (answer.correct) {
      setColor('#00ff00');
      setIsCorrect(true);
    } else {
      setColor('#FF0000');
      setIsCorrect(false);
    }

    console.log(funct);
    // funct(answer);
  }
  return (

    <Container onClick={handleClickAnswer} colorAnswer={color} test={isCorrect}>
      {answer?.description}
    </Container>
  );
}

Answer.propTypes = {
  answer: PropTypes.objectOf.isRequired,
  funct: PropTypes.func.isRequired,
};
