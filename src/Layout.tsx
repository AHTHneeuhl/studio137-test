import { LayoutContainer, LayoutWrapper } from "./Layout.styles";
import { useState } from "react";
import questions from "./questions";
import Question from "./Question";
import Slider from "./Slider";
import Steps from "./Steps";
import StepButtons from "./StepButtons";

const Layout: React.FC = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(9);
  const [progressWidth, setProgressWidth] = useState<number | null>(null);
  const [idealistic, setIdealistic] = useState<number>(50);
  const [disillusioned, setDisillusioned] = useState<number>(100);
  const [cynical, setCynical] = useState<number>(100);
  const [hopeful, setHopeful] = useState<number>(100);
  const onOptionSelect = (option: number) => {
    setSelectedOption(option);
    setProgressWidth(option * 25);
    setShowSlider(true);
    if (currentQuestion === 1) {
      setIdealistic(0);
    }
    if (currentQuestion === 2) {
      setDisillusioned(50);
    }
    if (currentQuestion === 3) {
      setDisillusioned(0);
    }
    if (currentQuestion === 4) {
      setCynical(50);
    }
    if (currentQuestion === 5) {
      setCynical(0);
    }
    if (currentQuestion === 6) {
      setHopeful(50);
    }
    if (currentQuestion === 7) {
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
    <LayoutWrapper>
      <LayoutContainer>
        <Steps
          cynical={cynical}
          hopeful={hopeful}
          idealistic={idealistic}
          disillusioned={disillusioned}
        />
        <Question currentQuestion={currentQuestion} />
        <Slider
          showSlider={showSlider}
          onOptionSelect={onOptionSelect}
          selectedOption={selectedOption}
          progressWidth={progressWidth}
        />
        <StepButtons />
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
