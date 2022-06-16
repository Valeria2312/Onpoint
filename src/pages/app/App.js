import "./App.css";
import logo from "../../imgs/global.png";
import company from "../../imgs/company.png";
import FirstSlide from "../first_slide/component";
import SecondSlide from "../second_slide/component";
import ThirdSlide from "../third_slide/component";
import { useState } from "react";
import { MainCarousel } from "./Carousel/Main-carousel";

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  return (
    <div className="App">
      <header className="header">
        <button className="header_btn">
          <img
            src={logo}
            alt="Logo"
            loading={"lazy"}
            className="header_btn__img"
            onClick={(e) => setCurrentSlideIndex(0)}
          />
        </button>
      </header>
      <main>
        <MainCarousel
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        >
          <FirstSlide showSlide={setCurrentSlideIndex} />
          <SecondSlide currentSlide={currentSlideIndex} />
          <ThirdSlide />
        </MainCarousel>
      </main>
      <footer>
        <img src={company} loading={"lazy"} alt="Onpoint" className="company" />
      </footer>
    </div>
  );
}

export default App;
