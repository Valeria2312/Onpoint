import bottle from "./icons/bottle.png";
import btn from "./icons/btn3.png";
import icon from "./icons/icon1.png";
import icon2 from "./icons/icon2.png";
import "./style.css";
import Modal from "./modal/component";
import img1 from "./icons/1.1.png";
import img2 from "./icons/2.1.png";
import img3 from "./icons/3.1.1.png";
import img4 from "./icons/4.png";
import img5 from "./icons/5.png";
import img6 from "./icons/6.png";
import img7 from "./icons/7.1.png";
import img8 from "./icons/8.1.1.png";
import { useState } from "react";

function ThirdSlide() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="ThirdSlide">
      <Modal active={modalActive} setActive={setModalActive} />
      <img
        src={img1}
        alt="Фоновое изображение"
        className="key-message__img-first"
      />
      <img
        src={img2}
        alt="Фоновое изображение"
        className="key-message__img-second"
      />
      <img
        src={img3}
        alt="Фоновое изображение"
        className="key-message__img-third"
      />
      <img
        src={img4}
        alt="Фоновое изображение"
        className="key-message__img-fourth"
      />
      <img
        src={img5}
        alt="Фоновое изображение"
        className="key-message__img-fifth"
      />
      <img
        src={img6}
        alt="Фоновое изображение"
        className="key-message__img-sixth"
      />
      <img
        src={img7}
        alt="Фоновое изображение"
        className="key-message__img-seventh"
      />
      <img
        src={img8}
        alt="Фоновое изображение"
        className="key-message__img-eighth"
      />
      <div className="ThirdSlide_title">
        <div className="ThirdSlide_title__subheader">ключевое сообщение</div>
        <div className="ThirdSlide_title__header">
          BREND<b>XY</b>
        </div>
      </div>
      <div className="ThirdSlide_img">
        <img src={bottle} alt="bottle" />
      </div>
      <div className="ThirdSlide_elems">
        <div className="ThirdSlide_elem__1">
          <img className="ThirdSlide_elem__img" src={icon2} alt="" />
          <p className="ThirdSlide_elem__text">
            Ehicula ipsum a arcu
            <br /> cursus vitae. Eu non
            <br /> diam phasellus
            <br />
            vestibulum lirem sed
            <br /> risus ultricies
          </p>
        </div>
        <div className="ThirdSlide_elem__2">
          <img className="ThirdSlide_elem__img2" src={icon} alt="" />
          <p className="ThirdSlide_elem__text2">
            {" "}
            A arcu
            <br /> cursus vitae
          </p>
        </div>
        <button
          className="ThirdSlide_btn"
          onClick={() => {
            setModalActive(true);
          }}
        >
          <img
            src={btn}
            alt="Logo"
            loading={"lazy"}
            className="ThirdSlide_btn__img"
          />
        </button>
      </div>
    </div>
  );
}

export default ThirdSlide;
