import s from "./Layout.module.css";
import { Outlet } from "react-router";
import { AdultCheckModal, CookieModal } from "../components/shared/modals";
import { useState } from "react";
import { Footer, Header } from ".";
const adultCheck = !!localStorage.getItem("isAdult");
const cookieCheck = !!localStorage.getItem("isCookie");

export function Layout() {
  const [modalIsOpen, setModalIsOpen] = useState({
    adultCheck: !adultCheck,
    cookieCheck: !cookieCheck,
  });

  return (
    <>
      <div className={s.layout}>
        <Header />

        <main className={s.main}>
          <Outlet />
        </main>

        <Footer />
      </div>

      <AdultCheckModal
        isOpen={modalIsOpen.adultCheck}
        onSelect={(value) => {
          localStorage.setItem("isAdult", String(value));
          setModalIsOpen({ ...modalIsOpen, adultCheck: false });
        }}
      />
      <CookieModal
        isOpen={modalIsOpen.cookieCheck && !modalIsOpen.adultCheck}
        onSelect={(value) => {
          localStorage.setItem("isCookie", String(value));
          setModalIsOpen({ ...modalIsOpen, cookieCheck: false });
        }}
      />
    </>
  );
}
