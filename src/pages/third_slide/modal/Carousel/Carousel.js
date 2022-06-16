import "./Carousel.css";
import { useState, useEffect, Children, cloneElement } from "react";

const PAGE_WIDTH = 615;
export const Carousel = ({ children }) => {
  const leftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };
  const rightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="window">
          <div
            className="all-items"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {pages}
          </div>
        </div>
        <div className="popup__btns">
          <button className="popup__btn-left" onClick={leftClick}></button>
          <div className="popup__point popup__point_first popup__point_active"></div>
          <div className="popup__point popup__point_second"></div>
          <button className="popup__btn-right" onClick={rightClick}></button>
        </div>
      </div>
    </>
  );
};
