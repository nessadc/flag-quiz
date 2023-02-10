import { useContext } from 'react';
import Question from '../components/quiz/Question';
import Choices from '../components/quiz/Choices';
import NextButton from '../components/quiz/NextButton';
import QuizContext from '../context/QuizContext';

function Home() {
  const { isLoading } = useContext(QuizContext);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Question />
      <Choices />
      <NextButton />
    </>
  );
}

export default Home;
