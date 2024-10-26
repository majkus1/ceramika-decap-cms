import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Hits = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Pobieranie wszystkich plików JSON z katalogu "promotions"
  const data = useStaticQuery(graphql`
    query {
      allPromotionsJson {
        nodes {
          id
          title
          price
          image
          inPopup
        }
      }
    }
  `)

  // Promocje: pierwsze 4 (te z popupa) i dodatkowe promocje
  const allPromotions = data.allPromotionsJson.nodes
  const popupPromotions = allPromotions.slice(0, 4) // Pierwsze 4 promocje dla popupa i strony "Hity cenowe"
  const additionalPromotions = allPromotions.slice(4) // Pozostałe promocje, które trafiają tylko na stronę "Hity cenowe"

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, chunkSize + i));
    }
    return chunks;
  };

  return (
    <div className="wrapper">
      <Seo
        title="Ceramika Białystok - Hity cenowe"
        description="Najlepsze promocje w Białymstoku"
      />
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />

      <section className={isMenuOpen ? "blurred" : ""} id="hits">
        <h3>HITY CENOWE</h3>
        <p className="avail">Dostępne do wyczerpania zapasów</p>
        <p className="buytel">
          Zakup i rezerwacja <a href="tel:+48857474947">tel: 85 74 74 947</a>
        </p>

        {/* Promocje z popupa (maksymalnie 4) */}
        <div className="promo-boxes">
          {chunkArray(popupPromotions, 2).map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="promo-img-boxes">
                {row.map(promo => (
                  <div key={promo.id} className="promo-one">
                    <img
                      src={promo.image}
                      className="promo-img"
                      alt={promo.title}
                    />
                    <p>{promo.title}</p>
                    <p>{promo.price}</p>
                  </div>
                ))}
              </div>
              <hr /> {/* Linia pod każdym rzędem */}
            </div>
          ))}
        </div>

        

        {/* Pozostałe promocje */}
        <div className="promo-boxes">
          {chunkArray(additionalPromotions, 2).map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="promo-img-boxes">
                {row.map(promo => (
                  <div key={promo.id} className="promo-one">
                    <img
                      src={promo.image}
                      className="promo-img"
                      alt={promo.title}
                    />
                    <p>{promo.title}</p>
                    <p>{promo.price}</p>
                  </div>
                ))}
              </div>
              <hr /> {/* Linia pod każdym rzędem */}
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${isMenuOpen ? "blurred contactmaps" : "contactmaps"}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38298.791121565555!2d23.138007774676755!3d53.13398941076129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffedad7d8a0fb%3A0xadd01a635f0ed3b3!2sCERAMIKA%20HMB%20-%20Ceg%C5%82y%20klinkierowe!5e0!3m2!1spl!2spl!4v1720721145919!5m2!1spl!2spl"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className={`${isMenuOpen ? "blurred" : ""}`} id="footer">
        <div className="logo-footer">
          <img src="/static/images/logoCeramika.webp" />
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
              <img src="/static/images/fb.png" /> Facebook
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
            <img src="/static/images/fb.png" /> Facebook
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hits
