import { LayoutContainer, LayoutWrapper } from "./Layout.styles";
import Question from "./Question";
import Slider from "./Slider";
import Steps from "./Steps";
import StepButtons from "./StepButtons";

const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Steps />
        <Question />
        <Slider />
        <StepButtons />
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
