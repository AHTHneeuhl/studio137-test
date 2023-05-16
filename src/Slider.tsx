import {
  SliderContainer,
  SliderPoints,
  SliderPoint,
  SliderWrapper,
  SliderLabels,
  SliderLabel,
  SliderLabelText,
  ProgressRoot,
  ProgressBar,
  SliderRoot,
  SliderRail,
  SliderTrack,
  SliderThumb,
  SliderThumbInput,
  SliderNoneAdjust,
} from "./Slider.styles";
import useAppContext from "./useAppContext";

enum options {
  "SD" = 0,
  "D" = 1,
  "N" = 2,
  "A" = 3,
  "SA" = 4,
}

const Slider: React.FC = () => {
  const { showSlider, progressWidth, selectedOption, handleOptionSelect } =
    useAppContext();
  return (
    <SliderContainer>
      <SliderWrapper>
        {showSlider ? (
          <SliderRoot>
            <SliderRail />
            <SliderTrack progress={progressWidth} />
            <SliderThumb progress={progressWidth}>
              <SliderThumbInput />
            </SliderThumb>
          </SliderRoot>
        ) : (
          <SliderNoneAdjust />
        )}
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
      </SliderWrapper>
      <SliderLabels>
        <SliderLabel
          style={{ left: "0%" }}
          active={options.SD === selectedOption}
          onClick={() => handleOptionSelect(options.SD)}
        >
          <SliderLabelText>Strongly Disagree</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "20%" }}
          active={options.D === selectedOption}
          onClick={() => handleOptionSelect(options.D)}
        >
          <SliderLabelText>Disagree</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "40%" }}
          active={options.N === selectedOption}
          onClick={() => handleOptionSelect(options.N)}
        >
          <SliderLabelText>Neutral</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "60%" }}
          active={options.A === selectedOption}
          onClick={() => handleOptionSelect(options.A)}
        >
          <SliderLabelText>Agree</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "80%" }}
          active={options.SA === selectedOption}
          onClick={() => handleOptionSelect(options.SA)}
        >
          <SliderLabelText>Strongly Agree</SliderLabelText>
        </SliderLabel>
      </SliderLabels>
    </SliderContainer>
  );
};

export default Slider;
