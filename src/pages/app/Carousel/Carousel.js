import "./Carousel.css";
import { useState, useEffect, Children, cloneElement } from "react";

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minwidth: "100%",
            maxwidth: "100%",
          },
        });
      })
    );
  }, []);

  return (
    <div className="main-container">
      <div className="window">
        <div className="oll-items">{pages}</div>
      </div>
    </div>
  );
};
