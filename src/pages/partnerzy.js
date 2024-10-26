import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Seo from "../components/seo"
import logoCeramika from '/static/images/CERAMIKAlogo.png';
import fb from '/static/images/facebookcera.png'
import Popup from "../components/popup"

const Partnerzy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="wrapper">
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />
      <Seo title="Ceramika Białystok - Partnerzy" description="Poznaj naszych partnerów i dostawców. Współpracujemy z najlepszymi producentami klinkieru i materiałów budowlanych, aby dostarczać najwyższą jakość." />

      <section className={`${isMenuOpen ? "blurred" : ""}`} id="our-partners">
      <Popup />
        <h2>PARTNERZY</h2>
        <div className="parnerts-container-box">
          <div className="partnersone">
            <div className="partnersonebox">
              <p className="title-border">
                Murowanie klinkieru (ogrodzenia, elewacje, kominy), cegła
                ręcznie formowana, stany surowe, usługi ogólnobudowlane
              </p>
              <ul>
                <li>Maciejczyk Wiesław tel. 662 461 330 503 596 196</li>
                <li>Witkowski Patrycjusz tel. 721 603 373</li>
                <li>Bakun Tomasz tel. 660 720 555</li>
                <li>Pietrzak Aleksander tel. 510 877 782</li>
                <li>
                  Szymański Michał tel. 501 939 099 email:
                  budszymanski@gmail.com www.stany-surowe.za.pl
                </li>
                <li>Kamiński Stanisław tel. 600 738 387</li>
                <li>Szczytko Robert tel. 609 474 328</li>
                <li>Pomichter Marek tel. 606 815 318</li>
                <li>Szerenos Mirosław tel. 513 219 737</li>
                <li>
                  Birkos Robert tel. 796 148 760 email: robertbirkos@o2.pl
                </li>
                <li>Popławski Jerzy tel. 506 494 067</li>
                <li>Jaromiński Krzysztof tel. 693 224 518</li>
                <li>Grodzki Dariusz tel. 731 929 861</li>
                <li>Ostrowski Piotr tel. 799 307 286</li>
                <li>Sielewiński Piotr tel. 605 580 802</li>
                <li>Szyper Tadeusz tel. 795 787 624</li>
                <li>
                  Kulbiński Wiktor tel. 605 694 179 email: witekkul1@wp.pl
                </li>
                <li>
                  Bielecki Wojciech tel. 694 114 557 email: wygoda.wb@gmail.com
                </li>
                <li>Czołpiński Jan tel. 605 624 122</li>
                <li>Klim Piotr tel. 530 802 702</li>
                <li>Waldemar Klim tel. 600 220 366</li>
                <li>
                  Serafin Jacek tel. 602 783 651 email: jserafin66@gmail.com
                </li>
              </ul>
            </div>
            <div className="line-partners"></div>
            <div className="partnersboxtwo">
              <p className="title-border">Usługi zduńskie, montarz i obudowa kominków, piece kaflowe, grile, wędzarnie, piece chlebowe</p>
              <ul>
                <li>
                Święcki Cezary          tel. 606 234 244   email: piecowo@o2.pl          www.piecowo.pl   
                </li>
                <li>
                Wieremiejuk Roman   tel. 603 053 968
                </li>
                <li>
                Pawęzki Marek          tel. 504 006 539   email: zdun@cieplypiec.pl    www.cieplypiec.pl
                </li>
                <li>
                Ostrowski Krzysztof   tel. 608 579 432   email: koja51@wp.pl
                </li>
                <li>
                Wawiernia Krzysztof   tel. 504 288 383                                             www.uslugi-zdunskie.net.pl
                </li>
                <li>
                Zakład Kaflarski         tel. 601 564 351   nova@nova2000.pl                www.nova2000.pl
                </li>
              </ul>

              <p className="title-border">
              Budowa i sprzedaż domów jednorodzinnych i szeregowych
              </p>
              <ul>
                <li>
                Z.R.B. Jerzy Grądzki                     tel. 607 580 322   email: biuro@gradzkihomes.pl                            www.gradzkihomes.pl
                </li>
                <li>
                P.H.U. Bogdan Andruszkiewicz      tel. 602 309 794   email: abm-zawady@wp.pl
                </li>
                <li>
                STANGEM Grzegorz Stankiewicz   tel. 608 871 794
                </li>
                <li>
                Duet Nieruchomości                      tel. 504 945 543   email: duetnieruchomosci.bialystok@gmail.com   www.duetnieruchomosci.pl
                </li>
              </ul>

              <p className="title-border">
              Usługi tansportowe
              </p>
              <ul>
                <li>
                Nejfeld Andrzej            tel. 603 975 570   Usługi transportowe, winda hds do 3ton
                </li>
                <li>
                Topczewski Tadeusz   tel. 602 369 304   Usługi transportowe z hds do 10ton
                </li>
                <li>
                Gawroński Marian       tel. 602 368 019   Usługi transportowe z hds do 10ton
                </li>
              </ul>

              <p className="title-border">
              Pokrycia dachowe, dekarstwo, wykonawstwo
              </p>
              <ul>
                <li>
                Nowy Dach S.C.    tel. 85 743 10 02   email: nowydachsc@wp.pl   www.dachy-bialystok.com
                </li>
                <li>
                Terpiłowski Marek  tel. 606 680 455    email: terpilek@tlen.pl
                </li>
                <li>
                Adamczuk Paweł   tel. 606 304 206
                </li>
              </ul>

              <p className="title-border">Architekci wnętrz</p>
              <ul>
                <li>
                Boublej Design Izabela Boublej            tel. 501 451 006    email: architekt@boublejdesign.pl     www.boublejdesign.pl
                </li>
                <li>
                Puchalska Design Tatiana Puchalska   tel. 696 822 274    email: biuro@puchalskadesign.pl      www.puhalskadesign.pl
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            <a href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page" target="_blank">
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
          <a href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page" target="_blank">
            <img src={fb} /> Facebook
          </a>
        </div>
      </section>
    </div>
  )
}

export default Partnerzy
