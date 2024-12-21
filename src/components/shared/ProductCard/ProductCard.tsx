import { useState } from "react";
import Btn from "../../ui/Btn/Btn";
import s from "./ProductCard.module.css";
import ReactModal from "react-modal";

interface Props {
  className?: string;
  img: string;
  title: string;
  price: string;
}

const defaultSelectedCard = {
  isOpen: false,
  img: "",
  title: "",
  price: "",
};

export default function ProductCard({ className, img, title, price }: Props) {
  const [selectedCard, setSelectedCard] = useState(defaultSelectedCard);

  return (
    <>
      <div
        className={`${s.cardContainer} ${className || ""}`}
        onClick={() => setSelectedCard({ isOpen: true, img, title, price })}
      >
        <figure className={s.imgContainer}>
          <img
            className={s.img}
            src={img}
            alt="картинка товара"
            width={68}
            height={72}
          />
        </figure>

        <div className={s.cardTitle}>{title}</div>

        <Btn className={s.btn} color="green">
          {price} ₽
        </Btn>
      </div>

      <ReactModal
        isOpen={selectedCard.isOpen}
        shouldFocusAfterRender={false}
        onRequestClose={() => setSelectedCard(defaultSelectedCard)}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <div className="container">
          <div className={s.modalContainer}>
            <div className={s.modalTop}>
              <figure className={s.modalImgContainer}>
                <img src={selectedCard.img} alt="картинка товара" />
              </figure>
              <div className={s.modalInfo}>
                <div className={s.modalTitle}>{selectedCard.title}</div>
                <Btn className={s.modalPrice} color="green">
                  {selectedCard.price} ₽
                </Btn>
              </div>
            </div>

            <div className={s.modalValues}>
              <span>Количество: 2 </span>
              <span>Длина: 2 </span>
              <span>Комплектация: 2</span>
            </div>

            <button className={s.modalBtnEdit}>Редактировать</button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
