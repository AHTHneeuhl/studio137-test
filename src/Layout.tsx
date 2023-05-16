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
} from "./Layout.styles";

const Layout: React.FC = () => {
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
            <SliderLabel style={{ left: "0%" }}>
              <SliderLabelText>Strongly Disagree</SliderLabelText>
            </SliderLabel>
            <SliderLabel style={{ left: "20%" }}>
              <SliderLabelText>Disagree</SliderLabelText>
            </SliderLabel>
            <SliderLabel style={{ left: "40%" }} active>
              <SliderLabelText>Neutral</SliderLabelText>
            </SliderLabel>
            <SliderLabel style={{ left: "60%" }}>
              <SliderLabelText>Agree</SliderLabelText>
            </SliderLabel>
            <SliderLabel style={{ left: "80%" }}>
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
