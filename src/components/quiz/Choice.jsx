import { useContext } from 'react';
import QuizContext from '../../context/QuizContext';

function Choice({ item }) {
  const { checkAnswer, isChecked, isLoading } = useContext(QuizContext);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoading) {
    return (
      <>
        <button
          onClick={() => checkAnswer(item)}
          className={`btn btn-primary btn-lg m-2 ${
            isChecked ? (item.answer ? 'btn-success' : null) : null
          }`}
        >
          {item.name}
        </button>
      </>
    );
  }
}

Choice.defaultProps = {
  answer: false,
};

export default Choice;
