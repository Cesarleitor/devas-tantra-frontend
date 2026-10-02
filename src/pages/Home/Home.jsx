import './Home.css'
import Button from '../../components/Button/Button'
import heroImage from '../../assets/images/banner1.jpeg'
import banner2 from '../../assets/images/banner2.jpg'
import carde1 from '../../assets/images/card1.jpg'
import carde2 from '../../assets/images/card2.jpg'
import card3 from '../../assets/images/card3.jpg'
import card4 from '../../assets/images/card4.jpg'
import TherapyCard from '../../components/TherapyCard/TherapyCard'
import ServicesHighlights from "../../components/ServicesHighlights/ServicesHighlights";

function Home() {
  return (
    <main>

      {/* Hero */}
      <section
        id="inicio"
        className="hero"
      >

        <div className="hero__overlay"></div>

        <div className="hero__container">

          <div className="hero__content">

            <span className="hero__eyebrow">
              Terapeuta e Mentora
            </span>

            <h1 className="hero__title">
              Corpo, Prazer,
              <span> & Autoconhecimento </span>
            </h1>

            <p className="hero__description">
              Um espaço para olhar para si com mais presença, consciência e conexão — através do
              corpo, das emoções, da sexualidade e do prazer consciente.
            </p>

            <div className="hero__actions">

              <Button
                href="#agendamento"
                variant="gold"
              >
                Quero conhecer meu caminho
              </Button>

              <Button
                href="#sobre"
                variant="gold"
              >
                Agendar atendimento
              </Button>

            </div>

          </div>

        </div>

      </section>

      {/* Destaques dos serviços */}
      <ServicesHighlights />

      {/* Sobre a experiência */}
      <section
        id="sobre"
        className="home-experience"
      >

        <div className="home-experience__container">

          <div className="home-experience__image">

            <img
              src={banner2}
              alt="Experiência Devas Tantra"
            />

          </div>

          <div className="home-experience__content">
 
            <span className="home-experience__eyebrow">
              Sobre a Experiência
            </span>

            <h2 className="home-experience__title">
              Um espaço para
              <span> Se conhecer através do corpo e das emoções</span>
            </h2>

            <p className="home-experience__text">
              Meu trabalho nasce do desejo de criar espaços de autoconhecimento, onde
              corpo, emoções, sexualidade, relações e prazer possam ser percebidos com mais
              presença e consciência.
            </p>

            <p className="home-experience__text">
              Cada atendimento é conduzido de forma individualizada, respeitando a história,
              o momento, os limites e o ritmo de cada pessoa.

            </p>

            <div className="home-experience__highlights">

              <div className="home-experience__highlight">
                <h3>Presença</h3>

                <p>
                  Estar mais consciente do corpo, das emoções e do momento presente.
                </p>
              </div>

              <div className="home-experience__highlight">
                <h3>Autoconhecimento</h3>

                <p>
                  Perceber padrões, necessidades, desejos e novas formas de se relacionar consigo
                </p>
              </div>

              <div className="home-experience__highlight">
                <h3>Consciência</h3>

                <p>
                  Ampliar a percepção sobre aquilo que você sente, vive e deseja.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Terapias e experiências */}
      <section
        id="terapias"
        className="home-therapies"
      >

        <div className="home-therapies__container">

          <div className="home-therapies__header">

            <span className="home-therapies__eyebrow">
              Um momento para você
            </span>

            <h2 className="home-therapies__title">
              Encontre sua
              <span> experiência</span>
            </h2>

            <p className="home-therapies__description">
              Experiências pensadas para promover presença,
              relaxamento, conexão e autoconhecimento.
            </p>

          </div>

          <div className="home-therapies__cards">

            <TherapyCard
              number="01"
              image={carde1}
              title="Massagem Tântrica"
              description="Autoconhecimento através do corpo, do toque consciente, da respiração e da
                              percepção das sensações."
            />

            <TherapyCard
              number="02"
              image={carde2}
              title="Atendimento Terapêutico"
              description="Um espaço de escuta, perguntas e reflexão para olhar para emoções, relacionamentos,
                              padrões e questões pessoais."
            />

            <TherapyCard
              number="03"
              image={card3}
              title="Processo Corpo, Prazer e Consciência"
              description="Um processo de acompanhamento voltado ao autoconhecimento, à consciência
                            corporal, à sexualidade, ao prazer e à construção de uma vida mais alinhada com
                              quem você é."
            />

            <TherapyCard
              number="04"
              image={card4}
              title="Meditação & Respiração"
              description="Práticas para desacelerar, desenvolver presença e aprofundar a percepção do corpo e das sensações."
            />

          </div>

        </div>

      </section>
      {/* ========================================
          CTA DE AGENDAMENTO
          ======================================== */}

      <section
        id="agendamento"
        className="home-cta"
      >

        <div className="home-cta__container">

          <span className="home-cta__eyebrow">
            Seu momento começa aqui
          </span>

          <h2 className="home-cta__title">
            Permita-se viver uma
            <span> nova experiência</span>
          </h2>

          <p className="home-cta__description">
            Um convite para desacelerar, estar presente e
            se conectar com o próprio corpo e suas sensações.
          </p>

          <div className="home-cta__action">

            <Button
              href="#agendamento"
              variant="gold"
            >
              Agendar experiência
            </Button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home