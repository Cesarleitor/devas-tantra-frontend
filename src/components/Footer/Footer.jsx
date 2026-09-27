import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* Marca */}
        <div className="footer__brand">

          <a
            href="#inicio"
            className="footer__logo"
          >
            Bianca Sganderlla
          </a>

          <p className="footer__description">
            Um espaço de conexão, presença,
            cuidado e autoconhecimento através
            do corpo e das experiências sensoriais.
          </p>

        </div>


        {/* Navegação */}
        <div className="footer__column">

          <h3 className="footer__title">
            Navegação
          </h3>

          <nav className="footer__nav">

            <a href="#inicio">
              Início
            </a>

            <a href="#sobre">
              Sobre Mim
            </a>

            <a href="#terapias">
              Terapias
            </a>

            <a href="#galeria">
              Galeria
            </a>

            <a href="#agendamento">
              Agendamentos
            </a>

            <a href="#eventos">
              Eventos
            </a>

            <a href="#blog">
              Blog
            </a>

          </nav>

        </div>


        {/* Contato */}
        <div className="footer__column">

          <h3 className="footer__title">
            Contato
          </h3>

          <div className="footer__contact">

            <a href="#agendamento">
              Agende sua experiência
            </a>

            <a href="#contato">
              Entre em contato
            </a>

            <a href="#contato">
              Localização
            </a>

          </div>

        </div>


        {/* Redes sociais */}
        <div className="footer__column">

          <h3 className="footer__title">
            Conecte-se
          </h3>

          <div className="footer__social">

            <a
              href="#"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>


      {/* Rodapé inferior */}
      <div className="footer__bottom">

        <div className="footer__bottom-container">

          <p>
            © 2026 CesarNexuCode.
            Todos os direitos reservados.
          </p>

          <p>
            Devas Tantra
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer