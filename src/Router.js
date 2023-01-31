import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Question from './pages/Question';

export default function Router() {
  return (

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/question" element={<Question />} />
    </Routes>
  );
}
