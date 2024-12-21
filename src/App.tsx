import Header from "./components/shared/Header/Header";
import s from "./App.module.css";
import ProductCard from "./components/shared/ProductCard/ProductCard";
import TotalItem from "./components/shared/TotalItem/TotalItem";
import Btn from "./components/ui/Btn/Btn";
import Footer from "./components/shared/Footer/Footer";
import { useState } from "react";
import ReactModal from "react-modal";

function App() {
  const [addItemIsOpen, setAddItemIsOpen] = useState(false);

  return (
    <>
      <div className={s.mainLayout}>
        <Header />

        <main className={s.main}>
          <div className="container">
            <div className={s.editSmetaContainer}>
              <div className={s.editSmetaTitle}>Оформление сметы</div>
              <p className={s.editSmetaDesc}>
                Вы можете редактировать параметры просто нажав на один товаров
              </p>
            </div>

            <section className={s.myDiscount}>ВАША СКИДКА -3%</section>

            <section className={s.productList}>
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <ProductCard
                    key={i}
                    className={s.productItem}
                    img="/image.jpg"
                    title="Приставка Xbox One 360"
                    price="19 990"
                  />
                ))}
            </section>

            <section className={s.total}>
              <div className={s.totalTitle}>Стоимость ваших услуг</div>
              <div className={s.totalItems}>
                {[
                  {
                    title: "Теплый пол",
                    price: "1990",
                  },
                  {
                    title: "Прокладка труб",
                    price: "1990",
                  },
                ].map((elem, i) => (
                  // key пока так, тк нет Id элемента
                  <TotalItem
                    key={i + 100}
                    className={s.totalItem}
                    title={elem.title}
                    price={elem.price}
                  />
                ))}
              </div>
              <div className={s.totalActions}>
                <Btn color="green">Готово</Btn>
                <Btn color="white" onClick={() => setAddItemIsOpen(true)}>
                  Добавить еще
                </Btn>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      <ReactModal
        isOpen={addItemIsOpen}
        onRequestClose={() => setAddItemIsOpen(false)}
        className={s.modal}
        overlayClassName={s.overlay}
        shouldFocusAfterRender={false}
      >
        <div className={s.modalContainer}>
          <div className={s.modalTitle}>Добавить услугу</div>

          <div className={s.newItem}>
            <input
              type="text"
              placeholder="Название..."
              className={s.newItemName}
            />
            <input
              type="text"
              placeholder="Цена..."
              className={s.newItemPrice}
            />
            <input type="text" placeholder="шт" className={s.newItemCount} />
          </div>
        </div>
      </ReactModal>
    </>
  );
}

export default App;
