import './Footer.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'


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
              href="https://www.instagram.com/devas.tantra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
              <span></span>
            </a>

            <a
              href="https://wa.me/5554992642311?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
              <span></span>
            </a>

          </div>

        </div>

      </div>


      {/* Rodapé inferior */}
      <div className="footer__bottom">

        <div className="footer__bottom-container">

          <p>
            © 2026 Bianca Sganderlla.
            Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por CesarNexuCode
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer