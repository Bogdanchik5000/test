import s from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <div className="container">
          <div className={s.footerContainer}>
            <HomeIcon />
            <NotificationIcon />
            <AdddIcon />
            <StatisticIcon />
            <DashboardIcon />
          </div>
        </div>
      </footer>
    </>
  );
}

function HomeIcon() {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8.7L11 1L21 8.7V20.8C21 22.015 20.0051 23 18.7778 23H3.22222C1.99492 23 1 22.015 1 20.8V8.7Z"
        fill="#02A46D"
        stroke="#02A46D"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.66669 23V12H14.3334V23"
        fill="#262626"
      />
      <path
        d="M7.66669 23V12H14.3334V23"
        stroke="#262626"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NotificationIcon() {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8333 7.60005C16.8333 3.95494 13.9978 1 10.5 1C7.0022 1 4.16667 3.95494 4.16667 7.60005C4.16667 15.3001 1 17.5001 1 17.5001H20C20 17.5001 16.8333 15.3001 16.8333 7.60005"
        stroke="#B9BFBD"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3261 21.9002C11.9484 22.5787 11.2527 22.9963 10.5 22.9963C9.74732 22.9963 9.05156 22.5787 8.67389 21.9002"
        stroke="#B9BFBD"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdddIcon() {
  return (
    <div className={s.addIcon}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1V21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 11H21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StatisticIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 22.5217C23 22.7858 22.7861 23 22.5217 23H1.47826C1.21393 23 1 22.7858 1 22.5217V1.47826C1 1.21417 1.21393 1 1.47826 1C1.7426 1 1.95652 1.21417 1.95652 1.47826V14.8696H4.56969C4.83733 14.8427 6.12729 14.7946 7.11327 16.2429C7.26273 16.4622 7.39306 16.6728 7.51262 16.8674C7.84798 17.4108 8.0488 17.7184 8.27392 17.7184C8.556 17.7184 8.98198 17.7184 10.0581 14.7136C10.7554 12.7662 11.498 10.5979 11.8791 9.4789C12.1425 8.70521 12.8697 8.18563 13.6889 8.18563H14.3171C15.205 8.18563 15.97 8.78953 16.1778 9.65403C16.4403 10.75 16.5809 11.051 16.6178 11.1173C16.7575 11.3672 17.0489 11.8877 18.2973 11.6159C19.8988 11.2665 20.2683 11.5463 20.8894 12.8438C21.4018 13.9131 22.9113 16.3147 22.9267 16.3387C23.0673 16.5622 23 16.8576 22.7763 16.9982C22.5535 17.1402 22.2579 17.0718 22.1168 16.8483C22.0538 16.7478 20.563 14.376 20.0268 13.2569C19.726 12.6298 19.2177 12.3943 18.5019 12.5504C17.2123 12.8321 16.2988 12.506 15.7827 11.5836C15.7276 11.4849 15.5613 11.186 15.2475 9.877C15.1438 9.44451 14.7613 9.1421 14.3171 9.1421H13.6889C13.2793 9.1421 12.916 9.40132 12.7843 9.78709C12.4026 10.9087 11.6582 13.0824 10.9585 15.0358C9.95998 17.8246 9.33274 18.6748 8.27392 18.6748C7.50373 18.6748 7.11284 18.0408 6.69857 17.3694C6.58599 17.1864 6.46365 16.9878 6.32304 16.7814C5.59446 15.7107 4.70332 15.8162 4.66687 15.8209C4.64588 15.8237 4.61828 15.826 4.59729 15.826H1.95657V22.0434H22.5217C22.7861 22.0434 23 22.2576 23 22.5217V22.5217Z"
        fill="#B9BFBD"
        stroke="#B9BFBD"
        strokeWidth="0.6"
      />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.0002C11.4477 20.0002 11 19.5525 11 19.0002V12.0002C11 11.448 11.4477 11.0002 12 11.0002H19C19.5523 11.0002 20 11.448 20 12.0002V19.0002C20 19.5525 19.5523 20.0002 19 20.0002H12ZM13 18.0003H18V13.0003H13V18.0003ZM1 20.0002C0.447693 20.0002 0 19.5525 0 19.0002V12.0002C0 11.448 0.447693 11.0002 1 11.0002H8C8.55231 11.0002 9 11.448 9 12.0002V19.0002C9 19.5525 8.55231 20.0002 8 20.0002H1ZM2 18.0003H7V13.0003H2V18.0003ZM12.0002 9C11.4479 9 11.0002 8.55225 11.0002 8V1C11.0002 0.447754 11.4479 0 12.0002 0H19.0002C19.5525 0 20.0002 0.447754 20.0002 1V8C20.0002 8.55225 19.5525 9 19.0002 9H12.0002ZM13 7.00004H18V2.00004H13V7.00004ZM1 9C0.447693 9 0 8.55225 0 8V1C0 0.447754 0.447693 0 1 0H8C8.55231 0 9 0.447754 9 1V8C9 8.55225 8.55231 9 8 9H1ZM2 7.00004H7V2.00004H2V7.00004Z"
        fill="#B9BFBD"
      />
    </svg>
  );
}
