import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Seo from "../components/seo"
import logoCeramika from '/static/images/CERAMIKAlogo.png';
import fb from '/static/images/facebookcera.png'
import Popup from "../components/popup"

const Kontakt = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="wrapper">
      <Seo
        title="Ceramika Białystok - Kontakt"
        description="Skontaktuj się z nami, aby dowiedzieć się więcej o ofercie materiałów budowlanych lub odwiedź naszą hurtownię Ceramika w Białymstoku."
      />
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />

      <section className={isMenuOpen ? "blurred" : ""} id="contact">
      <Popup />
        <div className="logo-contact">
          <img src={logoCeramika} />
          <p>Hurtownia Materiałów Budowlanych</p>
        </div>
        <div className="contact-inform">
          <div className="inform-box-one">
            <div className="address-inform">
              <p className="head-inform">ADRES SKLEPU:</p>
              <p>ul . Baranowicka 144</p>
              <p>15-517 Białystok</p>
              <br />
              <p className="head-inform">GODZINY OTWARCIA:</p>
              <p>poniedziałek - piątek: 8:00 - 16:00</p>
              <p>sobota: 8 - 13</p>
            </div>
            <div className="number-contact">
              <p className="head-inform">KONTAKT:</p>
              <a href="tel:+48 85 74 74 947">tel. +48 85 74 74 947</a>
              <br />
              <a href="">Viber: +48857474947</a>
              <br />
              <a href="mailto:biuro@ceramikabial.pl">
                e-mail: biuro@ceramikabial.pl
              </a>
              <br />
              <p>Właściciel: Zdzisław Święczkowski</p>
              <a href="tel:+48 509 108 829">tel. +48 509 108 829</a>
            </div>
          </div>
          <div className="inform-box-two">
            <div className="pay-inform">
              <p className="head-inform">DANE DO PŁATNOŚCI:</p>
              <p>ALIOR BANK S.A.</p>
              <p>PLN: 29 2490 0005 0000 4500 6835 0518</p>
              <p>EUR: IBAN: PL 21 2490 0005 0000 4600 7714 3081</p>
            </div>
            <div className="company-data">
              <p className="head-inform">DANE FIRMY:</p>
              <p>NIP: PL5420305826</p>
              <p>REGON: 050025308</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${isMenuOpen ? "blurred contactmaps" : "contactmaps"}`}>
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
              <img src={fb} /> Facebook
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
            <img src={fb} /> Facebook
          </a>
        </div>
      </section>
    </div>
  )
}

export default Kontakt
