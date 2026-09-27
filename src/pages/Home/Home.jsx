
import './Home.css'

function Home() {
  return (
    <main>

      {/* Hero */}
      <section id="inicio" className="hero">

        <div className="hero__overlay"></div>

        <div className="hero__container">

          <div className="hero__content">

            <span className="hero__eyebrow">
              Bem-vindo ao Devas Tantra
            </span>

            <h1 className="hero__title">
              Corpo, prazer
              <span> e autoconhecimento </span>
            </h1>

            <p className="hero__description">
              Massagem Tántrica e Terapias para mulheres
              e homens que desejam se conectar com o próprio 
              corpo, com suas emoções e com o prazer de viver!
            </p>

            <div className="hero__actions">

              <a
                href="#agendamento"
                className="btn btn--gold"
              >
                Agendar experiência
              </a>

              <a
                href="#sobre"
                className="btn btn--gold"
              >
                Conheça o espaço
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home
