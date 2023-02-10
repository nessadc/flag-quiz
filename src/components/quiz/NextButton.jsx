import { useContext } from 'react';
import QuizContext from '../../context/QuizContext';
function NextButton() {
  const { nextQuestion } = useContext(QuizContext);

  return (
    <div className='grid place-items-center m-5'>
      <button
        onClick={() => nextQuestion()}
        className='mx-auto btn btn-secondary btn-lg m-2'
      >
        Next
      </button>
    </div>
  );
}

export default NextButton;
