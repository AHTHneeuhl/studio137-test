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

enum options {
  "SD" = 0,
  "D" = 1,
  "N" = 2,
  "A" = 3,
  "SA" = 4,
}

type TProps = {
  showSlider: boolean;
  selectedOption: number;
  progressWidth: number | null;
  onOptionSelect: (option: number) => void;
};

const Slider: React.FC<TProps> = ({
  showSlider,
  progressWidth,
  selectedOption,
  onOptionSelect,
}) => {
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
          onClick={() => onOptionSelect(options.SD)}
        >
          <SliderLabelText>Strongly Disagree</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "20%" }}
          active={options.D === selectedOption}
          onClick={() => onOptionSelect(options.D)}
        >
          <SliderLabelText>Disagree</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "40%" }}
          active={options.N === selectedOption}
          onClick={() => onOptionSelect(options.N)}
        >
          <SliderLabelText>Neutral</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "60%" }}
          active={options.A === selectedOption}
          onClick={() => onOptionSelect(options.A)}
        >
          <SliderLabelText>Agree</SliderLabelText>
        </SliderLabel>
        <SliderLabel
          style={{ left: "80%" }}
          active={options.SA === selectedOption}
          onClick={() => onOptionSelect(options.SA)}
        >
          <SliderLabelText>Strongly Agree</SliderLabelText>
        </SliderLabel>
      </SliderLabels>
    </SliderContainer>
  );
};

export default Slider;
