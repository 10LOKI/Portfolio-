import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { useLanguage } from '../../LanguageContext'
import Resume from '../../assets/AyoubOuharda_Resume.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  function toggleLanguage() {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Ayoub "}</span>
          <span>{" Ouharda/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'en' ? 'FR' : 'EN'}
        </button>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {t.home}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {t.about}
          </NavHashLink>
          <NavHashLink smooth to="#education" onClick={closeMenu}>
            {t.education}
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>
            {t.experienceTitle}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            {t.project}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            {t.contact}
          </NavHashLink>
          <a href={Resume} download className="button">
            {t.resume}
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
