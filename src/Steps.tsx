import useAppContext from "./useAppContext";
import {
  StepContainer,
  StepItem,
  StepProgressRoot,
  StepProgressBar,
  StepItemText,
} from "./Steps.styles";

const Steps: React.FC = () => {
  const { idealistic, disillusioned, cynical, hopeful } = useAppContext();

  return (
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
  );
};

export default Steps;
