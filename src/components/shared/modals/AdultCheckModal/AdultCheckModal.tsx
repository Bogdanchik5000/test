import ReactModal, { setAppElement } from "react-modal";
import s from "./AdultCheckModal.module.css";
import { Container } from "../../index";

setAppElement("#root");

interface Props {
  isOpen: boolean;
  onSelect?: (value: boolean) => void;
}

export function AdultCheckModal({ isOpen, onSelect }: Props) {
  return (
    <ReactModal
      className={s.modal}
      overlayClassName={s.overlay}
      isOpen={isOpen}
      shouldFocusAfterRender={false}
      shouldCloseOnOverlayClick={false}
    >
      <Container className={s.content}>
        <b className={s.title}>Você tem 18 anos ou mais?</b>
        <img
          src="/adult-icon.svg"
          alt="adult icon"
          className={s.img}
          width={130}
        />
        <div className={s.buttonsGroup}>
          <Btn
            text="Sim, tenho 18 anos ou mais"
            className={s.btn}
            onClick={() => onSelect?.(true)}
          />
          <Btn
            text="Não, tenho menos de 18 anos"
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
  onClick?: () => void;
  className?: string;
}

function Btn({ text, onClick, className }: BtnProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
