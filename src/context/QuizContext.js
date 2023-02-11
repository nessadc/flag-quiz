import { createContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [correct, setIsCorrect] = useState(null);
  const [choices, setChoices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    getChoices();
  }, [countries]);

  const loadCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(
      data.map((o) => ({
        name: o.name.common,
        flag: o.flags.png,
        cca2: o.cca2,
      }))
    );
  };

  const getChoices = () => {
    let randomSelection = [];
    for (var i = 0; i < 4; i++) {
      // currently clone the object so its not linked to the original
      const country = structuredClone(
        countries[Math.floor(Math.random() * countries.length)]
      );
      randomSelection.push(country);
    }
    setChoices(randomSelection);

    randomSelection[0] !== undefined
      ? setAnswer(randomSelection)
      : setIsLoading(true);
  };

  const setAnswer = (selection) => {
    const random = Math.floor(Math.random() * selection.length);
    selection[random].answer = true;
    setIsLoading(false);
    let newTotal = total + 1;
    setTotal(newTotal);
  };

  const checkAnswer = (item) => {
    if (item.answer) {
      setIsCorrect(true);
      let newScore = score + 1;
      setScore(newScore);
    } else {
      setIsCorrect(false);
    }

    setIsChecked(true);
  };

  const nextQuestion = () => {
    setIsChecked(false);
    getChoices();
  };

  return (
    <QuizContext.Provider
      value={{
        choices,
        getChoices,
        checkAnswer,
        isChecked,
        correct,
        isLoading,
        nextQuestion,
        score,
        total,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
