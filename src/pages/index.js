import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import Producents from "./producenci"
import Seo from "../components/seo"
import { Link } from "gatsby"
import img33 from '/static/images/33.webp';
import img36 from '/static/images/36.webp';
import img32 from '/static/images/32.webp';
import img52 from '/static/images/5-2.jpg';
import img62 from '/static/images/6-2.jpg';
import img7 from '/static/images/7.webp';
import img8 from '/static/images/8.webp';
import img9 from '/static/images/9.webp';
import img11 from '/static/images/11.webp';
import img12 from '/static/images/12.webp';
import img13 from '/static/images/13.webp';
import img18 from '/static/images/18.webp';
import img26 from '/static/images/26.webp';
import img27 from '/static/images/27.webp';
import img12Alt from '/static/images/1-2.jpg'; // Zmieniona nazwa importu dla unikalności
import img30 from '/static/images/30.webp';
import img31 from '/static/images/31.webp';
import img42 from '/static/images/4-2.jpg';
import img32Alt from '/static/images/3-2.jpg'; // Zmieniona nazwa importu dla unikalności
import img35 from '/static/images/35.webp';
import img22 from '/static/images/2-2.jpg';
import img37 from '/static/images/37.webp';
import img38 from '/static/images/right-red.png'
import img39 from '/static/images/facebookcera.png'
import logoCeramika from '/static/images/CERAMIKAlogo.png';
import funds from '/static/images/fundusze europejskie.webp'
import Popup from "../components/popup"

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const images = [
    img33, img36, img32, img52, img62, img7, img8, img9,
    img11, img12, img13, img18, img26, img27, img12Alt,
    img30, img31, img42, img32Alt, img35, img22, img37
];

  const galleryRef = useRef(null)

  const goLeft = () => {
    setActiveIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    )
  }

  const goRight = () => {
    setActiveIndex(prevIndex =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    )
  }

  const handleImageClick = index => {
    setActiveIndex(index)
    if (index === activeIndex) {
      setIsModalOpen(true) // Otwórz modal, jeśli kliknięto na aktywny obraz
    }
  }

  useEffect(() => {
    // Przesunięcie, aby aktywne zdjęcie było na środku
    const galleryWidth = galleryRef.current.offsetWidth
    const itemWidth = galleryWidth / 3 // Ponieważ chcemy, aby 3 zdjęcia były widoczne
    const scrollTo = itemWidth * activeIndex - itemWidth // Przesuwamy, aby aktywne zdjęcie było na środku
    galleryRef.current.scrollLeft = scrollTo
  }, [activeIndex])

  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible")
          } else {
            entry.target.classList.remove("isVisible")
          }
        })
      },
      { threshold: 0.1 }
    )

    revealSections.forEach(section => {
      observer.observe(section)
    })

    return () =>
      revealSections.forEach(section => {
        observer.unobserve(section)
      })
  }, [])

  return (
    <div className="wrapper">
      <Seo title="Ceramika - klinkier to nasza specjalność" description="Zapoznaj się z szeroką ofertą klinkieru i innych materiałów budowlanych w hurtowni Ceramika w Białymstoku. Oferujemy wysokiej jakości produkty dla każdego budownictwa." />
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />
      {/* <h1>Witaj na mojej stronie Gatsby!</h1> */}
      <main className={isMenuOpen ? "blurred" : ""}>
      <Popup />
        <picture>
          {/* <source srcSet="icons/bgc-cer.webp" media="(max-width: 599px)" /> */}
          {/* <img src="icons/IMG_3224.jpg" alt="Background" /> */}
          <div className="img-bgc"></div>
        </picture>
        <div class="overlay">
          {/* <h1>
          <span>Klinkier</span> <span>to</span> <span>nasza</span> <span>specjalność</span>
          </h1> */}
          <div className="text-effect6 effect">
            <div className="overlau"></div>
            <div>
              <p>
                Klinkier <span>to nasza</span> specjalność
              </p>
              <p>
                Witamy w Hurtowni <span>Materiałów Budowlanych</span>
              </p>
              <p>
                W Ceramice znajdziesz wszystko, co jest niezbędne do wykonania
                dachu, elewacji i ogrodzenia z wyrobów ceramicznych
              </p>
            </div>
          </div>
          <div className="shopbtnmain">
            {/* <p>Witamy w Hurtowni Materiałów Budowlanych</p> */}
            <Link to="/oferta">
              <img src={img38} />
              Sprawdzam ofertę
            </Link>
          </div>
        </div>
      </main>

      <div id="all-content">
        {/* <div class="bgc-page-container">
          <img src="icons/4.jpg" class="bgc-page" />
        </div> */}

        <section className={`${isMenuOpen ? "blurred" : ""}`} id="first-page">
          <div className="flextext">
            <div className="welcome-txt">
              <h2>Hurtownia Materiałów Budowlanych powstała w roku 1992</h2>
              <p className="skills-quality">
                Doświadczenie zebrane przez lata, pozwoliło nam na nabycie
                umiejętności doboru odpowiednich materiałów dla naszych
                klientów. Również jakość dostepnych u nas materiałów została
                wielokrotnie sprawdzona przez nas samych i naszych klientów.{" "}
              </p>
              <p className="now">
                Zapraszamy na ulicę Baranowicką 144 w Białymstoku oraz do sklepu
                internetowego.
              </p>
              {/* <div className="btn-offer">
          <Link href="" className="check-offer">
            <img src="icons/arrow-right.png" />
            Sprawdzam ofertę
          </Link>
        </div> */}
            </div>


            <div className="office-text">
              <div className="btn-offer">
                <Link href="https://klinkiernia.com.pl" className="check-offer">
                  <img src={img38} />
                  Sklep online
                </Link>
              </div>
              {/* <p className="come-to-us">
                W Ceramice znajdziesz wszystko co jest Ci niezbędne do wykonania
                dachu, elewacji i ogrodzenia z wyrobów ceramicznych.{" "}
              </p> */}
              {/* <p className="goodpq">
                Mamy to wszystko w konkurencyjnej cenie i najlepszej jakości.{" "}
              </p> */}
              {/* <p className="welcome">
                Zapraszamy na ulicę Baranowicką 144 w Białymstoku oraz do sklepu internetowego.
              </p> */}
            </div>
          </div>
          <section className={`${isMenuOpen ? "blurred" : ""}`} id="office">
            <div className="desktop-btn-offer">
              <Link href="https://klinkiernia.com.pl" className="check-offer">
                <img src={img38} style={{ paddingTop: "0" }} />
                Sklep online
              </Link>
            </div>
            <div className="office-gallery-container">
              <div className="office-gallery" ref={galleryRef}>
                {images.map((src, index) => (
                  <div
                    key={src}
                    className={index === activeIndex ? "active" : ""}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={src} alt={`Obraz ${index + 1}`} />
                  </div>
                ))}
                <button className="left-go" onClick={goLeft}>
                  {"<"}
                </button>
                <button className="right-go" onClick={goRight}>
                  {">"}
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>

      <section id="fundseu" className={`${isMenuOpen ? "blurred" : ""}`}>
        <img src={funds} />
      </section>

      <section className={`${isMenuOpen ? "blurred" : ""}`} id="footer">
        <div className="logo-footer">
          <img src={logoCeramika} />
        </div>
        <div className="medium-flex">
          <div className="partners">
            <Link to="/producenci">Producenci</Link>
            <Link to="/partnerzy">Partnerzy</Link>
          </div>
          <div className="contact-footer">
            <a>Viber: +48857474947</a>
            <a
              href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page"
              target="_blank"
            >
              <img src={img39} /> Facebook
            </a>
          </div>
        </div>
        <div className="partnersd">
          <Link to="/producenci">Producenci</Link>
          <Link to="/partnerzy">Partnerzy</Link>
        </div>
        <div className="contact-footerd">
          <a>Viber: +48857474947</a>
          <a
            href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page"
            target="_blank"
          >
            <img src={img39} /> Facebook
          </a>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={images[activeIndex]}
              alt={`Powiększenie ${activeIndex + 1}`}
            />
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <button className="modal-left" onClick={() => goLeft()}>
              {"<"}
            </button>
            <button className="modal-right" onClick={() => goRight()}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPage
