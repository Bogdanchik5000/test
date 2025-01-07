import { Container, Title } from "../../components/shared";
import s from "./PrivacyPage.module.css";

export function PrivacyPage() {
  return (
    <section className={s.section}>
      <Container className={s.content}>
        <Title size="lg" upperCase text="política de Privacidade" />

        <div className={s.blocks}>
          <PrivacyBlock
            className={s.block}
            title="Coleta de informações pessoais"
            blocks={[
              "Coletamos diferentes tipos de informações pessoais sobre você quando você usa nosso site, incluindo:",
              `
          Informações que você nos fornece: podem incluir seu nome, endereço de e-mail, número de telefone, informações demográficas e outros dados que você nos fornece ao se registrar em nosso site, criar uma conta, jogar ou entrar em contato com o atendimento ao cliente.<br/>
Informações que coletamos automaticamente: Quando você usa nosso site, coletamos automaticamente certas informações sobre seu dispositivo e sua atividade, incluindo seu endereço IP, tipo de navegador, sistema operacional, data e hora de sua visita, páginas que você visualiza e as ações que você realiza. Em nosso site.
Informações de cookies e outras tecnologias de rastreamento: Usamos cookies e outras tecnologias de rastreamento para coletar informações sobre sua atividade em nosso Site. Usamos cookies para diversos fins, incluindo melhorar sua experiência de usuário, rastrear sua atividade em nosso Site e fornecer-lhe informações direcionadas. anúncio.
        `,
            ]}
          />

          <PrivacyBlock
            className={s.block}
            title="Uso de informações pessoais"
            blocks={[
              "Usamos suas informações pessoais para os seguintes fins:",
              `
          Fornecimento e melhoria dos nossos serviços: Utilizamos as suas informações pessoais para lhe fornecer os nossos serviços, incluindo acesso aos jogos, processamento das suas apostas e pagamento dos seus ganhos. Também utilizamos suas informações pessoais para melhorar nossos serviços e desenvolver novos recursos e produtos.
Entrando em contato com você: Poderemos usar suas informações pessoais para contatá-lo sobre sua conta, nossos serviços ou outros fins relacionados ao nosso negócio.<br/>
Personalização da sua experiência: Podemos usar suas informações pessoais para personalizar sua experiência em nosso Site, inclusive para fornecer recomendações e ofertas de jogos direcionadas.<br/>
Publicidade: Podemos usar suas informações pessoais para mostrar publicidade direcionada em nosso site e em outros sites.<br/>
Finalidades de pesquisa: Podemos usar suas informações pessoais para fins de pesquisa para entender melhor nossos usuários e melhorar nossos serviços.
        `,
            ]}
          />

          <PrivacyBlock
            className={s.block}
            title="Divulgação de informações pessoais"
            blocks={[
              "Poderemos divulgar suas informações pessoais a terceiros nos seguintes casos:",
              `
         Provedores de serviços: podemos divulgar suas informações pessoais a terceiros que nos prestam serviços, como processamento de pagamentos, atendimento ao cliente e marketing.<br/>
Requisitos legais: Poderemos divulgar suas informações pessoais se formos obrigados a fazê-lo por lei ou por um mandado legal ou ação legal.<br/>
Proteção dos nossos direitos: Poderemos divulgar as suas informações pessoais se acreditarmos que é necessário para proteger os nossos direitos ou propriedade.
        `,
            ]}
          />

          <PrivacyBlock
            className={s.block}
            title="Armazenamento e proteção de suas informações pessoais"
            blocks={[
              "Tomamos medidas para proteger suas informações pessoais contra acesso, uso, divulgação, alteração ou destruição não autorizados. Retemos as suas informações pessoais apenas durante o tempo necessário para cumprir os fins para os quais foram recolhidas ou para cumprir as nossas obrigações legais.",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

interface PrivacyBlockProps {
  title: string;
  blocks: string[];
  className?: string;
}

function PrivacyBlock({ title, blocks, className }: PrivacyBlockProps) {
  return (
    <div className={className}>
      <Title text={title} className={s.blockTitle} />
      {blocks.map((b, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: b }} />
      ))}
    </div>
  );
}
