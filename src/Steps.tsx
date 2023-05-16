import {
  StepContainer,
  StepItem,
  StepProgressRoot,
  StepProgressBar,
  StepItemText,
} from "./Steps.styles";

type TProps = {
  idealistic: number;
  disillusioned: number;
  cynical: number;
  hopeful: number;
};

const Steps: React.FC<TProps> = ({
  idealistic,
  disillusioned,
  cynical,
  hopeful,
}) => {
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
