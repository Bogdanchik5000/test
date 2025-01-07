import ReactModal, { setAppElement } from "react-modal";
import s from "./CookieModal.module.css";
import { Container } from "../../index";
import cn from "classnames";

setAppElement("#root");

interface Props {
  isOpen: boolean;
  onSelect?: (value: boolean) => void;
}

export function CookieModal({ isOpen, onSelect }: Props) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={false}
      shouldFocusAfterRender={false}
    >
      <Container className={s.content}>
        <div className={s.title}>Cookie preferences</div>
        <p className={s.text}>
          Discard all In order to properly provide services, as well as for
          statistical and advertising purposes, the website uses information
          stored on users' end devices (cookies). If you have allowed cookies to
          be stored in your browser settings, they will be stored on your end
          device. You can specify the conditions for storing or accessing
          cookies in your browser.
        </p>
        <p className={s.text}>
          Cookie Settings are available on every page of our website, where the
          user can at any time view the list of other companies that use cookies
          on this website and change their settings for these files. Detailed
          information about how we use your personal data and your rights can be
          found in our Privacy Policy.
        </p>

        <div className={s.btnsGroup}>
          <Btn
            text="Accept"
            variant="accept"
            className={s.btn}
            onClick={() => onSelect?.(true)}
          />
          <Btn
            text="Decline"
            variant="reject"
            className={s.btn}
            onClick={() => onSelect?.(false)}
          />
        </div>
      </Container>
    </ReactModal>
  );
}

interface BtnProps {
  text: string;
  variant: "accept" | "reject";
  onClick?: () => void;
  className?: string;
}

function Btn({ text, variant, onClick, className }: BtnProps) {
  return (
    <button
      className={cn(className, {
        [s.accept]: variant === "accept",
        [s.reject]: variant === "reject",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
