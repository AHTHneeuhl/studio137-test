import styled, { css } from "styled-components";
import questions from "./questions";
import useAppContext from "./useAppContext";

const commonStyles = css`
  text-align: center;
  font-weight: 400;
`;

const ProgessIndicator = styled.div`
  color: #e74b16;
  font-size: 21px;
  margin: 70px auto 50px;
  width: 100%;
  ${commonStyles};
`;

const QuestionWrapper = styled.div`
  color: #343333;
  font-size: 24px;
  min-height: 150px;
  ${commonStyles};
`;

const Question: React.FC = () => {
  const { currentQuestion } = useAppContext();

  return (
    <>
      <ProgessIndicator>
        {currentQuestion + 1}/{questions.length}
      </ProgessIndicator>
      <QuestionWrapper>
        <p>{questions[currentQuestion]}</p>
      </QuestionWrapper>
    </>
  );
};

export default Question;
