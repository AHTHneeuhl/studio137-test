import prevArrow from "./assets/prev-arrow.svg";
import nextArrow from "./assets/next-arrow.svg";
import {
  LayoutContainer,
  LayoutWrapper,
  StepItemProgress,
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
} from "./Layout.styles";
import { useState } from "react";

enum options {
  "SD" = 0,
  "D" = 1,
  "N" = 2,
  "A" = 3,
  "SA" = 4,
}

const Layout: React.FC = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedOption, setSelectedOption] = useState(9);
  const [progressWidth, setProgressWidth] = useState<number | null>(null);
  const onOptionSelect = (option: number) => {
    setSelectedOption(option);
    setProgressWidth(option * 25);
    setShowSlider(true);
  };

  return (
    <LayoutWrapper>
      <LayoutContainer>
        <StepContainer>
          <StepItem>
            <StepItemProgress active={true} />
            <StepItemText active={true}>IDEALISTIC</StepItemText>
          </StepItem>
          <StepItem>
            <StepItemProgress />
            <StepItemText>DISILLUSIONED</StepItemText>
          </StepItem>
          <StepItem>
            <StepItemProgress />
            <StepItemText>CYNICAL</StepItemText>
          </StepItem>
          <StepItem>
            <StepItemProgress />
            <StepItemText>HOPEFUL</StepItemText>
          </StepItem>
        </StepContainer>
        <ProgessIndicator>1/20</ProgessIndicator>
        <QuestionWrapper>
          <p>I have ambitious aims of making a difference.</p>
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
