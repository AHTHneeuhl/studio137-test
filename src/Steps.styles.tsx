import styled from "styled-components";

type TTopSliderItemTextProps = {
  active?: boolean;
};

type TStepProgressRootProps = {
  active?: boolean;
};

type TStepProgressBarProps = {
  progress: number | null;
};

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

const StepProgressRoot = styled.span<TStepProgressRootProps>`
  background-color: #e9e9e9;
  border-radius: 3px;
  height: 6px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: block;
  height: 4px;
  z-index: 0;
`;

const StepProgressBar = styled.span<TStepProgressBarProps>`
  ${({ progress }) =>
    progress
      ? `transform: translateX(-${progress}%)`
      : "transform: translateX(0%)"};
  background: #20adb4;
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: transform 0.4s linear 0s;
  transform-origin: left center;
`;

const StepItemText = styled.div<TTopSliderItemTextProps>`
  text-transform: uppercase;
  font-size: 21px;
  color: ${(props) => (props.active ? "#20ADB4" : "#000000")};
  font-weight: ${(props) => (props.active ? 600 : 400)};
`;

export {
  StepContainer,
  StepItem,
  StepProgressRoot,
  StepProgressBar,
  StepItemText,
};
