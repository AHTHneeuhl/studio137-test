import { createContext, useState } from "react";
import questions from "./questions";

export interface TAppContext {
  showSlider: boolean;
  currentQuestion: number;
  selectedOption: number;
  progressWidth: number | null;
  idealistic: number;
  disillusioned: number;
  cynical: number;
  hopeful: number;
  handleOptionSelect: (option: number) => void;
}

export const AppContext = createContext<TAppContext>({
  showSlider: false,
  currentQuestion: 0,
  selectedOption: 9,
  progressWidth: null,
  idealistic: 50,
  disillusioned: 100,
  cynical: 100,
  hopeful: 100,
  handleOptionSelect: () => {
    return;
  },
});

const AppProvider = (props: React.PropsWithChildren<unknown>) => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(9);
  const [progressWidth, setProgressWidth] = useState<number | null>(null);
  const [idealistic, setIdealistic] = useState<number>(50);
  const [disillusioned, setDisillusioned] = useState<number>(100);
  const [cynical, setCynical] = useState<number>(100);
  const [hopeful, setHopeful] = useState<number>(100);
  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
    setProgressWidth(option * 25);
    setShowSlider(true);
    if (currentQuestion === 0) {
      setIdealistic(0);
    }
    if (currentQuestion === 1) {
      setDisillusioned(50);
    }
    if (currentQuestion === 2) {
      setDisillusioned(0);
    }
    if (currentQuestion === 3) {
      setCynical(50);
    }
    if (currentQuestion === 4) {
      setCynical(0);
    }
    if (currentQuestion === 5) {
      setHopeful(50);
    }
    if (currentQuestion === 6) {
      setHopeful(0);
    }
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowSlider(false);
        setSelectedOption(9);
      }
    }, 300);
  };
  return (
    <AppContext.Provider
      value={{
        showSlider,
        currentQuestion,
        selectedOption,
        progressWidth,
        idealistic,
        disillusioned,
        cynical,
        hopeful,
        handleOptionSelect,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
