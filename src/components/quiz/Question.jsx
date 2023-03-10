import QuizContext from '../../context/QuizContext';
import Score from './Score';
import { useContext } from 'react';

function Question() {
  const { isChecked, correct, choices, isLoading } = useContext(QuizContext);
  const answer = choices.find((choice) => {
    return choice.answer;
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div
        className={`alert alert-success shadow-lg ${
          isChecked && correct ? null : 'hidden'
        }`}
      >
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>You got it!</span>
        </div>
      </div>

      <div
        className={`alert alert-error shadow-lg ${
          isChecked && !correct ? null : 'hidden'
        }`}
      >
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Ah shoot, wrong answer! Try again!</span>
        </div>
      </div>

      <Score />

      <div className='grid place-items-center m-5'>
        <div className='border'>
          <img src={answer.flag} alt='Flag' />
        </div>
      </div>
    </>
  );
}

export default Question;
