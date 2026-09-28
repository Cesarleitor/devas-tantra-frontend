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
        <span> Autoconhecimento </span>
      </h1>

      <p className="hero__description">
        Um espaço de autoconhecimento através do corpo,<br /> das emoções,
        da sexualidade e do prazer consciente!
      </p>

      <div className="hero__actions">

        <Button
          href="#agendamento"
          variant="gold"
        >
          Agendar experiência
        </Button>

        <Button
          href="#sobre"
          variant="gold"
        >
          Conheça o espaço
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
              Sobre a experiência
            </span>

            <h2 className="home-experience__title">
              Um espaço para
              <span> conexão e presença</span>
            </h2>

            <p className="home-experience__text">
              O Devas Tantra nasce como um espaço dedicado ao
              cuidado, à presença e ao autoconhecimento através
              do corpo e das experiências sensoriais.
            </p>

            <p className="home-experience__text">
              Cada experiência é pensada para proporcionar um
              momento de pausa, conexão e acolhimento, respeitando
              o tempo, os limites e a individualidade de cada pessoa.
            </p>

            <div className="home-experience__highlights">

              <div className="home-experience__highlight">
                <h3>Presença</h3>

                <p>
                  Conexão com o momento presente e com o próprio corpo.
                </p>
              </div>

              <div className="home-experience__highlight">
                <h3>Autoconhecimento</h3>

                <p>
                  Um convite para perceber novas formas de sentir e se conhecer.
                </p>
              </div>

              <div className="home-experience__highlight">
                <h3>Bem-estar</h3>

                <p>
                  Um momento de cuidado, relaxamento e acolhimento.
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
              Terapias e experiências
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
              description="Uma experiência de presença, consciência corporal e conexão com as sensações."
            />

            <TherapyCard
              number="02"
              image={carde2}
              title="Terapias Integrativas"
              description="Práticas voltadas ao equilíbrio, ao relaxamento e ao cuidado integral."
            />

            <TherapyCard
              number="03"
              image={card3}
              title="Experiência Online"
              description="Um espaço de orientação e conexão que pode acontecer de onde você estiver."
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