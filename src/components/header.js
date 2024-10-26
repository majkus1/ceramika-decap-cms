import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { Link } from "gatsby"
import "../styles/style.scss"
import logoCeramika from "/static/images/CERAMIKAlogo.png"

const linkPaths = {
  Oferta: { path: "/oferta", label: "Oferta" },
  Realizacje: { path: "/realizacje", label: "Realizacje" },
  Kontakt: { path: "/kontakt", label: "Kontakt" },
  HityCenowe: { path: "/hity-cenowe", label: "Hity cenowe" },
  SKLEP: { path: "https://klinkiernia.com.pl", label: "SKLEP" },
}

const Header = ({ onMenuToggle }) => {
  const linksMobileRef = useRef(null)
  const menuBtnRef = useRef(null)
  const linksRefs = useRef([])

  const setLinksInitialState = () => {
    linksRefs.current.forEach(link => {
      gsap.set(link, { autoAlpha: 0, y: 1 })
    })
  }

  useEffect(() => {
    const linksMobile = linksMobileRef.current
    const menuBtn = menuBtnRef.current

    gsap.set(linksMobile, { autoAlpha: 0, y: 1 })
    setLinksInitialState()

    menuBtn.addEventListener("click", () => {
      const isOpen = gsap.getProperty(linksMobile, "autoAlpha") === 1
      setLinksInitialState()

      if (isOpen) {
        gsap.to(linksMobile, { autoAlpha: 0, y: -50, duration: 1 })
      } else {
        gsap.to(linksMobile, { autoAlpha: 1, y: 0, duration: 1 })
        linksRefs.current.forEach((link, index) => {
          gsap.to(link, {
            autoAlpha: 1,
            y: 0,
            delay: 0.1 * index,
            duration: 1,
          })
        })
      }
    })
  }, [])

  const handleMenuClick = () => {
    const isOpen = menuBtnRef.current.classList.contains("open")
    menuBtnRef.current.classList.toggle("open")

    onMenuToggle(!isOpen)

    setLinksInitialState()
    if (isOpen) {
      gsap.to(linksMobileRef.current, {
        autoAlpha: 0,
        y: 0,
        duration: 1.2,
        display: "none",
      })
    } else {
      gsap.to(linksMobileRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        display: "block", // Możesz zmienić 'block' na 'flex' w zależności od układu
      })
      linksRefs.current.forEach((link, index) => {
        gsap.to(link, { autoAlpha: 1, y: 0, delay: 0.5, duration: 1 })
      })
    }
  }

  return (
    <div className="home">
      <header className="header">
        <Link to="/" className="header-logo">
          <img src={logoCeramika} />
        </Link>
        <ul className="desktop-links">
          <li>
            <Link to="/oferta">Oferta</Link>
          </li>
          <li>
            <Link to="/realizacje">Realizacje</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/hity-cenowe">Hity cenowe</Link>
          </li>
          <li>
            <a href="https://klinkiernia.com.pl" style={{ fontWeight: "700" }}>
              SKLEP
            </a>
          </li>
        </ul>
        <div className="header-nav">
          <div className="header-nav__btns">
            <button
              className="menu-btn"
              ref={menuBtnRef}
              onClick={handleMenuClick}
            >
              <span className="menu-btn__burger"></span>
            </button>
          </div>
        </div>
      </header>
      <nav className="links-mobile" ref={linksMobileRef}>
        <ul>
          {Object.entries(linkPaths).map(([item, value], index) => {
            const hasImage = value.img !== undefined
            const path = value.path || value // Obsługuje zarówno nową strukturę z obrazem, jak i samą ścieżkę
            const label = value.label || item // Używaj label lub fallback na item

            return (
              <li key={index} className="mob-links">
                {item === "SKLEP" ? (
                  <a href={path} ref={el => (linksRefs.current[index] = el)}>
                    {label}
                  </a>
                ) : (
                  <Link to={path} ref={el => (linksRefs.current[index] = el)}>
                    {hasImage && (
                      <img
                        src={value.img}
                        alt={label} // Zmienione na label zamiast item
                        style={{ marginRight: "8px" }}
                        className="img-3-nav-mob"
                      />
                    )}
                    {label} {/* Wyświetl label zamiast item */}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Header
