import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <a href="/" className="header__logo" onClick={closeMenu}>
          Bianca Sganderlla 
        </a>

        {/* Menu Desktop */}
        <nav className="header__nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Mim</a>
          <a href="#galeria">Galeria</a>
          <a href="#agendamento">Agendamentos</a>
          <a href="#eventos">Eventos</a>
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* Botão Agendar - Desktop */}
        <a href="#agendamento" className="header__button">
          Agendar
        </a>

        {/* Botão Hambúrguer - Mobile */}
        <button
          className="header__menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Menu Mobile */}
      <nav
        className={`header__mobile ${
          menuOpen ? 'header__mobile--open' : ''
        }`}
      >
        <a href="#inicio" onClick={closeMenu}>
          Início
        </a>

        <a href="#sobre" onClick={closeMenu}>
          Sobre Mim
        </a>

        <a href="#galeria" onClick={closeMenu}>
          Galeria
        </a>

        <a href="#agendamento" onClick={closeMenu}>
          Agendamentos
        </a>

        <a href="#eventos" onClick={closeMenu}>
          Eventos
        </a>

        <a href="#blog" onClick={closeMenu}>
          Blog
        </a>

        <a href="#contato" onClick={closeMenu}>
          Contato
        </a>

        <a
          href="#agendamento"
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