import styled from "styled-components";

const StepButtonsWrapper = styled.div`
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

export { StepButton, StepButtonsWrapper };
