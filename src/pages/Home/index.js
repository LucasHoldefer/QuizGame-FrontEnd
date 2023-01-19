import { Link } from 'react-router-dom';
import { Container } from './styles';

import Button from '../../components/Button';

export default function Home() {
  return (
    <Container>
      <h1>Quiz Game</h1>

      <Link to="/questions">
        <Button type="button">Start</Button>
      </Link>
    </Container>
  );
}
