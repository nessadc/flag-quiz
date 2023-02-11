import { useContext } from 'react';
import Choice from './Choice';
import QuizContext from '../../context/QuizContext';

function Choices() {
  const { choices, isLoading } = useContext(QuizContext);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoading && choices[0]) {
    return (
      <div className='grid grid-cols-2 place-items-center m-5'>
        {choices.map((item, index) => (
          <Choice key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default Choices;
