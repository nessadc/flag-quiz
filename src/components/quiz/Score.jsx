import { useContext } from 'react';
import QuizContext from '../../context/QuizContext';

function Score() {
  const { score, total } = useContext(QuizContext);
  return (
    <div className='stats border'>
      <div className='stat'>
        <div className='stat-title'>Flags Guessed</div>
        <div className='stat-value text-primary'>
          {score}/{total}
        </div>
      </div>
    </div>
  );
}

export default Score;
