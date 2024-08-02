import { useState } from "react";
import leftChevron from "/left-arrow.svg";
import rightChevron from "/right-arrow.svg";
import sliderData from "../../../public/assets/data/sliderData";

const Slider = () => {
  const toggleImage = (direction) => {
    if (direction === -1) {
      setSliderIndex((prevIndex) =>
        prevIndex === 1 ? sliderData.length : prevIndex - 1
      );
    } else {
      setSliderIndex((prevIndex) =>
        prevIndex === sliderData.length ? 1 : prevIndex + 1
      );
    }
  };
  const [sliderIndex, setSliderIndex] = useState(1);
  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>

        <img
          src={`/img/img-slider/img-${sliderIndex}.webp`}
          alt="images1"
          className="slider-img"
        />

        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(+1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
};

export default Slider;
