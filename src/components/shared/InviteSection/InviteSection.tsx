import s from "./InviteSection.module.css";
import { Container, Title } from "../index";

export function InviteSection() {
  return (
    <section className={s.section}>
      <Container className={s.content}>
        <img
          src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_808/https://esporte-br77.com/wp-content/uploads/2024/07/vwc-1.png"
          className={s.img}
        />

        <div className={s.textContent}>
          <Title
            size="lg"
            upperCase
            text="Junte-se a nós hoje e construa seu caminho para a vitória de graça!"
          />
          <p className={s.text}>
            Convidamos você para uma jornada emocionante em nosso cassino online
            social, onde infinitas oportunidades de emoção e ganhos incríveis
            esperam por você. Mergulhe na atmosfera emocional do jogo, sinta a
            adrenalina e aproveite cada momento desta emocionante jornada! Veja
            por si mesmo que os ganhos no nosso casino são uma realidade à sua
            espera!
          </p>
        </div>
      </Container>
    </section>
  );
}
