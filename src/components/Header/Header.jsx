
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <a href="/" className="header__logo">
          Devas Tantra
        </a>

        <nav className="header__nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#galeria">Galeria</a>
          <a href="#agendamento">Agendamentos</a>
          <a href="#eventos">Eventos</a>
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#agendamento" className="header__button">
          Agendar
        </a>

      </div>
    </header>
  )
}

export default Header

