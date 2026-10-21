
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const HOME_URL = '/devas-tantra-frontend/'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const homeLink = (section) => {
    if (window.location.hash === '#/sobre') {
      return `${HOME_URL}#${section}`
    }

    return `#${section}`
  }

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <a
          href={HOME_URL}
          className="header__logo"
          onClick={closeMenu}
        >
          Bianca Sganderlla
        </a>

        {/* Menu Desktop */}
        <nav className="header__nav">
          <a href={homeLink('inicio')} onClick={closeMenu}>
            Início
          </a>

          <a href={`${HOME_URL}#/sobre`} onClick={closeMenu}>
            Sobre Mim
          </a>

          <a href={homeLink('galeria')} onClick={closeMenu}>
            Galeria
          </a>

          <a href={homeLink('agendamento')} onClick={closeMenu}>
            Agendamentos
          </a>

          <a href={homeLink('eventos')} onClick={closeMenu}>
            Eventos
          </a>

          <a href={homeLink('blog')} onClick={closeMenu}>
            Blog
          </a>

          <a href={homeLink('contato')} onClick={closeMenu}>
            Contato
          </a>
        </nav>

        {/* Botão Agendar - Desktop */}
        <a
          href={homeLink('agendamento')}
          className="header__button"
          onClick={closeMenu}
        >
          Agendar
        </a>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="header__menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="header-mobile-menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        id="header-mobile-menu"
        className={`header__mobile ${
          menuOpen ? 'header__mobile--open' : ''
        }`}
      >
        <a href={homeLink('inicio')} onClick={closeMenu}>
          Início
        </a>

        <a href={`${HOME_URL}#/sobre`} onClick={closeMenu}>
          Sobre Mim
        </a>

        <a href={homeLink('galeria')} onClick={closeMenu}>
          Galeria
        </a>

        <a href={homeLink('agendamento')} onClick={closeMenu}>
          Agendamentos
        </a>

        <a href={homeLink('eventos')} onClick={closeMenu}>
          Eventos
        </a>

        <a href={homeLink('blog')} onClick={closeMenu}>
          Blog
        </a>

        <a href={homeLink('contato')} onClick={closeMenu}>
          Contato
        </a>

        <a
          href={homeLink('agendamento')}
          className="header__mobile-button"
          onClick={closeMenu}
        >
          Agendar
        </a>
      </nav>
    </header>
  )
}

export default Header
