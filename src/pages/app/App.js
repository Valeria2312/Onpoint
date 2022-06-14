import "./App.css";
import logo from "../../imgs/global.png";
import company from "../../imgs/company.png";
import FirstSlide from "../first_slide/component";
import SecondSlide from "../second_slide/component";
import ThirdSlide from "../third_slide/component";
import { Carousel } from "./Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <header className="header">
        <button className="header_btn">
          <img
            src={logo}
            alt="Logo"
            loading={"lazy"}
            className="header_btn__img"
          />
        </button>
      </header>
      <main>
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </main>
      <footer>
        <img src={company} loading={"lazy"} alt="Onpoint" className="company" />
      </footer>
    </div>
  );
}

export default App;
