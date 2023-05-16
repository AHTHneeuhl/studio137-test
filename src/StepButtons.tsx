import prevArrow from "./assets/prev-arrow.svg";
import nextArrow from "./assets/next-arrow.svg";

import { StepButton, StepButtonsWrapper } from "./StepButtons.styles";

const StepButtons: React.FC = () => {
  return (
    <StepButtonsWrapper>
      <StepButton>
        <img src={prevArrow} alt="prev-arrow" />
        <span>PREV</span>
      </StepButton>
      <StepButton>
        <span>NEXT</span>
        <img src={nextArrow} alt="prev-arrow" />
      </StepButton>
    </StepButtonsWrapper>
  );
};

export default StepButtons;
