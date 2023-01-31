import { Link } from 'react-router-dom';
import React from 'react';
import { Container } from './styles';

import Button from '../../components/Button';

export default function Home() {
  return (

    <Container>
      <h1>Quiz Game</h1>

      <Link to="/question">
        <Button>
          Start
        </Button>
      </Link>

    </Container>
  );
}
