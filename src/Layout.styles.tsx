import styled from "styled-components";

type TTopSliderItemTextProps = {
  active?: boolean;
};

type TTopSlideItemProgressProps = {
  active?: boolean;
};

const LayoutWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  width: 84%;
  height: 88vh;
`;

const LayoutContainer = styled.div`
  margin: 48px 72px;
`;

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 25%;
`;

const StepItemProgress = styled.span<TTopSlideItemProgressProps>`
  background-color: ${(props) => (props.active ? "#20ADB4" : "#e9e9e9")};
  border-radius: 1rem;
  height: 6px;
  width: 100%;
`;

const StepItemText = styled.div<TTopSliderItemTextProps>`
  text-transform: uppercase;
  font-size: 21px;
  color: ${(props) => (props.active ? "#20ADB4" : "#000000")};
  font-weight: ${(props) => (props.active ? 600 : 400)};
`;

const ProgessIndicator = styled.div`
  color: #e74b16;
  font-family: lato, sans-serif;
  font-size: 21px;
  font-weight: 400;
  margin: 70px auto 50px;
  text-align: center;
  width: 100%;
`;

const QuestionWrapper = styled.div`
  color: #343333;
  font-family: lato, sans-serif;
  font-size: 24px;
  font-weight: 400;
  min-height: 150px;
  text-align: center;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  width: 86%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
`;

const SliderPoints = styled.div`
  color: #343333;
  font-size: 14px;
  font-weight: 300;
  margin-top: -20px;
  position: relative;
  width: 125%;
`;

const SliderPoint = styled.a`
  background: #9b9b9b;
  border-radius: 8px;
  cursor: pointer;
  height: 12px;
  margin-left: -8px;
  margin-top: -5px;
  position: absolute;
  width: 12px;
  z-index: 9;
`;

const SliderLabels = styled.div`
  color: #343333;
  font-size: 21px;
  font-weight: 400;
  width: 125%;
`;

const SliderLabel = styled.div`
  cursor: pointer;
  float: left;
  position: relative;
  width: 20%;
`;

const SliderLabelText = styled.p`
  display: block;
  font-family: lato, sans-serif;
  margin-left: -50%;
  margin-top: -20px;
  padding-top: 40px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1000;
`;

const StepButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px auto 30px;
`;

const StepButton = styled.button`
  color: #343333;
  font-size: 14px;
  font-weight: 600;

  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
`;

export {
  LayoutWrapper,
  LayoutContainer,
  StepContainer,
  StepItem,
  StepItemProgress,
  StepItemText,
  ProgessIndicator,
  QuestionWrapper,
  SliderContainer,
  Slider,
  SliderPoints,
  SliderPoint,
  SliderLabels,
  SliderLabel,
  SliderLabelText,
  StepButtons,
  StepButton,
};
