
import './Home.css'
import Button from '../../components/Button/Button'
import heroImage from '../../assets/images/banner1.jpeg'
import ServicesHighlights from "../../components/ServicesHighlights/ServicesHighlights";

function Home() {
  return (
    <main>

      {/* Hero */}
      <section
        id="inicio"
        className="hero"
        style={{ '--hero-image': `url(${heroImage})` }}
      >

        <div className="hero__overlay"></div>

        <div className="hero__container">

          <div className="hero__content">

            <span className="hero__eyebrow">
              Bem-vindo ao Devas Tantra
            </span>

            <h1 className="hero__title">
              Corpo, Prazer
              <span> & Autoconhecimento </span>
            </h1>

            <p className="hero__description">
              Massagem Tántrica e Terapias para mulheres
              e homens que desejam se conectar com o próprio
              corpo, com suas emoções e com o prazer de viver!
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

    </main>
  )
}

export default Home
