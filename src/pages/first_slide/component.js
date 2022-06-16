import btn from "./icons/btn.png";
import "./style.css";
import img1 from "./icons/Layer 8.png";
import img2 from "./icons/Layer 5.png";
import img3 from "./icons/Layer 4.png";
import img4 from "./icons/bakti_1.png";
import img5 from "./icons/pink_sperm_1.png";

function FirstSlide({ showSlide }) {
  return (
    <div className="FirstSlide">
      <img
        src={img1}
        alt="Фоновое изображение"
        className="FirstSlide__img-first animation-first"
      />
      <img
        src={img2}
        alt="Фоновое изображение"
        className="FirstSlide__img-second animation-second"
      />
      <img
        src={img3}
        alt="Фоновое изображение"
        className="FirstSlide__img-third animation-third"
      />
      <img
        src={img4}
        alt="Фоновое изображение"
        className="FirstSlide__img-fourth animation-fourth"
      />
      <img
        src={img5}
        alt="Фоновое изображение"
        className="FirstSlide__img-fifth"
      />
      <div className="FirstSlide_title">
        <p className="FirstSlide_title__hello">Привет,</p>
        <div className="FirstSlide_title__preview">
          <h2 className="FirstSlide_title__header">
            Это <b>не</b> коммерческое
          </h2>
          <h2 className="FirstSlide_title__header">задание</h2>
          <button className="FirstSlide_btn">
            <img
              src={btn}
              alt="Logo"
              loading={"lazy"}
              className="FirstSlide_btn__img"
              onClick={(e) => showSlide(1)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
