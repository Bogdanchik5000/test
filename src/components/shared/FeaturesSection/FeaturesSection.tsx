import s from "./FeaturesSection.module.css";
import { Container, Title } from "../index";

export function FeaturesSection() {
  return (
    <section className={s.section}>
      <Container className={s.content}>
        <Title
          size="lg"
          upperCase
          text="Teste sua experiência de cassino em nossa plataforma de jogos interativos: aproveite o jogo e ganhe!"
        />

        <ul className={s.list}>
          <li className={s.item}>
            <Title text="Modos bônus:" />
            <p className={s.itemText}>
              Fish Slot tem recursos de bônus exclusivos, como rodadas grátis,
              símbolos de expansão ou multiplicadores de vitória que ajudam a
              aumentar suas chances de ganhar.
            </p>
          </li>

          <li className={s.item}>
            <div className={s.itemTitle}>Assunto fascinante:</div>
            <p className={s.itemText}>
              O jogo Fish Slot foi desenhado com o tema da pesca, dando aos
              jogadores a oportunidade de desfrutar de um jogo divertido e
              interessante com seus personagens marinhos favoritos
            </p>
          </li>

          <li className={s.item}>
            <div className={s.itemTitle}>Interação social:</div>
            <p className={s.itemText}>
              O jogo Fish Slot é muito popular entre os jogadores pela
              oportunidade de interagir com outros usuários, trocar impressões e
              experiências do jogo.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
