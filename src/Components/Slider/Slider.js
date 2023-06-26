import React, { useState, useRef } from 'react';
import './Slider.css';

function SliderComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(Array(5).fill(''));
  const sliderRef = useRef(null);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
    const updatedBackgroundColors = Array(5).fill('');
    updatedBackgroundColors[index] = 'grey';
    setBackgroundColor(updatedBackgroundColors);
  };

  const handleSliderWheel = (event) => {
    const delta = Math.sign(event.deltaY);
    const newIndex = activeIndex + delta;

    if (newIndex >= 0 && newIndex < 5) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <>
      <div
        className='mainslider'
        style={{ transform: `translateX(${activeIndex * 15}%)` }}
        ref={sliderRef}
        onWheel={handleSliderWheel}
      >
        <div className='sliders' >
          <div className='firstbox' style={{ backgroundColor: backgroundColor[1] }} onClick={() => handleSlideClick(1)}>
            Inquiry
          </div>
          <div className='secondbox' style={{ backgroundColor: backgroundColor[2] }} onClick={() => handleSlideClick(2)}>
            Attempting contact
          </div>
          <div className='thirdbox' style={{ backgroundColor: backgroundColor[3] }} onClick={() => handleSlideClick(3)}>
            Nurturing
          </div>
          <div className='fourthbox' style={{ backgroundColor: backgroundColor[4] }} onClick={() => handleSlideClick(4)}>
            Products
          </div>
        </div>
      </div>
      <div className='btncont'>
        <button className='btn'>Mark as completed</button>
      </div>
    </>
  );
}

export default SliderComp;
