import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerContainer}>
          <BurgerBtn />
          <h4 className={s.headerTitle}>Оформление</h4>
          <ProfileLogo />
        </div>
      </div>
    </header>
  );
}

function BurgerBtn() {
  return (
    <svg
      className={s.burgerBtn}
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.99999H25"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 1.69231H25"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 18.3077H25"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileLogo() {
  return <div className={s.profileLogo}></div>;
}
