import Btn from "../../ui/Btn/Btn";
import s from "./TotalItem.module.css";

interface Props {
  title: string;
  price: string;
  className?: string;
}

export default function TotalItem({ title, price, className }: Props) {
  return (
    <div className={`${s.itemContainer} ${className ?? ""}`}>
      <div className={s.item}>
        <div className={s.itemTitle}>{title}</div>
        <div className={s.itemWarning}>!</div>
        <Btn color="green">{price} ₽</Btn>
      </div>
      <input type="checkbox" className={s.checkbox} />
    </div>
  );
}
