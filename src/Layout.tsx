import prevArrow from "./assets/prev-arrow.svg";
import nextArrow from "./assets/next-arrow.svg";
import {
  LayoutContainer,
  LayoutWrapper,
  StepProgressRoot,
  StepContainer,
  StepItem,
  StepItemText,
  ProgessIndicator,
  QuestionWrapper,
  StepButtons,
  StepButton,
  SliderContainer,
  SliderPoints,
  SliderPoint,
  Slider,
  SliderLabels,
  SliderLabel,
  SliderLabelText,
  ProgressRoot,
  ProgressBar,
  SliderRoot,
  SliderRail,
  SliderTrack,
  SliderThumb,
  SliderThumbInput,
  SliderNoneAdjust,
  StepProgressBar,
} from "./Layout.styles";
import { useState } from "react";
import questions from "./questions";

enum options {
  "SD" = 0,
  "D" = 1,
  "N" = 2,
  "A" = 3,
  "SA" = 4,
}

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
        <StepContainer>
          <StepItem>
            <StepProgressRoot>
              <StepProgressBar progress={idealistic} />
            </StepProgressRoot>
            <StepItemText active={true}>IDEALISTIC</StepItemText>
          </StepItem>
          <StepItem>
            <StepProgressRoot>
              <StepProgressBar progress={disillusioned} />
            </StepProgressRoot>
            <StepItemText>DISILLUSIONED</StepItemText>
          </StepItem>
          <StepItem>
            <StepProgressRoot>
              <StepProgressBar progress={cynical} />
            </StepProgressRoot>
            <StepItemText>CYNICAL</StepItemText>
          </StepItem>
          <StepItem>
            <StepProgressRoot>
              <StepProgressBar progress={hopeful} />
            </StepProgressRoot>
            <StepItemText>HOPEFUL</StepItemText>
          </StepItem>
        </StepContainer>
        <ProgessIndicator>
          {currentQuestion + 1}/{questions.length}
        </ProgessIndicator>
        <QuestionWrapper>
          <p>{questions[currentQuestion]}</p>
        </QuestionWrapper>
        <SliderContainer>
          <Slider>
            {showSlider ? (
              <SliderRoot>
                <SliderRail />
                <SliderTrack progress={progressWidth} />
                <SliderThumb progress={progressWidth}>
                  <SliderThumbInput />
                </SliderThumb>
              </SliderRoot>
            ) : (
              <SliderNoneAdjust />
            )}
            <SliderPoints>
              <SliderPoint style={{ opacity: 1, left: "0%" }} />
              <SliderPoint style={{ opacity: 1, left: "20%" }} />
              <SliderPoint style={{ opacity: 1, left: "40%" }} />
              <SliderPoint style={{ opacity: 1, left: "60%" }} />
              <SliderPoint style={{ opacity: 1, left: "80%" }} />
            </SliderPoints>
            <ProgressRoot>
              <ProgressBar />
            </ProgressRoot>
          </Slider>
          <SliderLabels>
            <SliderLabel
              style={{ left: "0%" }}
              active={options.SD === selectedOption}
              onClick={() => onOptionSelect(options.SD)}
            >
              <SliderLabelText>Strongly Disagree</SliderLabelText>
            </SliderLabel>
            <SliderLabel
              style={{ left: "20%" }}
              active={options.D === selectedOption}
              onClick={() => onOptionSelect(options.D)}
            >
              <SliderLabelText>Disagree</SliderLabelText>
            </SliderLabel>
            <SliderLabel
              style={{ left: "40%" }}
              active={options.N === selectedOption}
              onClick={() => onOptionSelect(options.N)}
            >
              <SliderLabelText>Neutral</SliderLabelText>
            </SliderLabel>
            <SliderLabel
              style={{ left: "60%" }}
              active={options.A === selectedOption}
              onClick={() => onOptionSelect(options.A)}
            >
              <SliderLabelText>Agree</SliderLabelText>
            </SliderLabel>
            <SliderLabel
              style={{ left: "80%" }}
              active={options.SA === selectedOption}
              onClick={() => onOptionSelect(options.SA)}
            >
              <SliderLabelText>Strongly Agree</SliderLabelText>
            </SliderLabel>
          </SliderLabels>
        </SliderContainer>
        <StepButtons>
          <StepButton>
            <img src={prevArrow} alt="prev-arrow" />
            <span>PREV</span>
          </StepButton>
          <StepButton>
            <span>NEXT</span>
            <img src={nextArrow} alt="prev-arrow" />
          </StepButton>
        </StepButtons>
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
