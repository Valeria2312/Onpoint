import "./style.css";
import { Carousel } from "./Carousel/Carousel";

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? "ModalSlide active" : "ModalSlide"}>
      <div className="popup">
        <div className="overlay"></div>
        <div className="popup__content">
          <button
            className="popup__close-btn"
            onClick={() => setActive(false)}
          ></button>
          <p className="popup__text">Преимущества</p>
          <h1 className="popup__title">
            BREND<b>XY</b>
          </h1>
          <Carousel>
            <ul className="popup__list  popup__list-active">
              <li className="popup__item">
                <p className="popup__item-number">01</p>
                <p className="popup__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </li>
              <li className="popup__item">
                <p className="popup__item-number">02</p>
                <p className="popup__item-text">
                  Faucibus pulvinar elementum integer enim
                </p>
              </li>
              <li className="popup__item">
                <p className="popup__item-number">03</p>
                <p className="popup__item-text">
                  Faucibus pulvinar elementum integer enim
                </p>
              </li>
            </ul>
            <ul className="popup__list">
              <li className="popup__item">
                <p className="popup__item-number">04</p>
                <p className="popup__item-text">
                  Mi bibendum neque egestas congue quisque egestas diam
                </p>
              </li>
              <li className="popup__item">
                <p className="popup__item-number">05</p>
                <p className="popup__item-text">
                  Venenatis lectus magna fringilla urna
                </p>
              </li>
              <li className="popup__item">
                <p className="popup__item-number">06</p>
                <p className="popup__item-text">
                  Venenatis lectus magna fringilla urna
                </p>
              </li>
            </ul>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Modal;
