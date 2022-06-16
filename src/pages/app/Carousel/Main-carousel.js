import "./Main-carousel.css";
import { useState, useEffect, Children } from "react";

const PAGE_WIDTH = 1024;
export const MainCarousel = ({
  currentSlideIndex,
  setCurrentSlideIndex,
  children,
}) => {
  const [offset, setOffset] = useState(0);
  const childrenCount = Children.count(children);

  let touchStartCoordX = null;
  let touchMoveCoordX = null;

  const handleTouchStart = (e) => {
    touchStartCoordX = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchMoveCoordX = e.changedTouches[0].clientX;
    const coordsDifference = touchStartCoordX - touchMoveCoordX;
    if (coordsDifference > 50) {
      showNextSlide();
    } else if (coordsDifference < -50) {
      showPrevSlide();
    }
  };

  const showPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const showNextSlide = () => {
    if (currentSlideIndex < childrenCount - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const showSlideByIndex = (index) => {
    if (index >= 0 && index <= childrenCount - 1) {
      setOffset(-(PAGE_WIDTH * index));
    }
  };

  useEffect(() => {
    showSlideByIndex(currentSlideIndex);
  }, [currentSlideIndex]);

  return (
    <>
      <div
        className="app-main-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchMove}
      >
        <div className="main-window">
          <div
            className="main-all-items"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
