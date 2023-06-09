import styled, { css } from "styled-components";

type TSliderLabelProps = {
  active?: boolean;
};

type TSliderTrackProps = {
  progress: number | null;
};

type TSliderThumbProps = {
  progress: number | null;
};

const SliderContainer = styled.div`
  margin: 0 auto;
  width: 86%;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SliderNoneAdjust = styled.div`
  height: 33px;
`;

const ProgressRoot = styled.span`
  background-color: #e9e9e9;
  position: relative;
  overflow: hidden;
  display: block;
  height: 4px;
  z-index: 0;
`;

const ProgressBar = styled.span`
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: transform 0.4s linear 0s;
  transform-origin: left center;
`;

const SliderRoot = styled.span`
  color: #20adb4;
  z-index: 1000;

  border-radius: 12px;
  box-sizing: content-box;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  height: 4px;
  width: 100%;
  padding: 12px 0;
`;

const SliderRail = styled.span`
  opacity: 0;
  display: block;
  position: absolute;
  border-radius: inherit;
  background-color: currentcolor;
  width: 100%;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
`;

const SliderTrack = styled.span<TSliderTrackProps>`
  left: -1%;
  ${({ progress }) => progress && `width: ${progress}%`};
  border: 5px solid #20adb4;
  display: block;
  position: absolute;
  border-radius: inherit;
  /* border: 1px solid currentcolor; */
  background-color: currentcolor;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
`;

const SliderThumb = styled.span<TSliderThumbProps>`
  background: #20adb4;
  ${(props) => props.progress && `left: ${props.progress}%`};
  position: absolute;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border-radius: 50%;
  outline: 0px;
  background-color: currentcolor;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 50%;
  transform: translate(-50%, -50%);

  &::before {
    background: #fff;
    border: 4px solid #20adb4;
    height: 14px;
    width: 14px;
    position: absolute;
    content: "";
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
      rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }

  &::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 42px;
    height: 42px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SliderThumbInput = styled.input`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 100%;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  direction: ltr;
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

const SliderLabel = styled.div<TSliderLabelProps>`
  cursor: pointer;
  float: left;
  position: relative;
  width: 20%;

  ${({ active }) => {
    if (active) {
      return css`
        color: #20adb4;
        font-weight: 800;
      `;
    }
  }};
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

export {
  SliderContainer,
  SliderWrapper,
  SliderNoneAdjust,
  ProgressRoot,
  ProgressBar,
  SliderRoot,
  SliderRail,
  SliderTrack,
  SliderThumb,
  SliderThumbInput,
  SliderPoints,
  SliderPoint,
  SliderLabels,
  SliderLabel,
  SliderLabelText,
};
