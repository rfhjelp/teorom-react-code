//Øverst på siden med navigeringssystemer, header

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";               //Brukes for å bestemme om man skal vise hamburger meny eller desktop versjonen
import Logo from "./../../images/Horizontal_logo.png"           //Logo i form av et bilde
import Hamburger from "../headerRelated/Hamburger";             //Mobil navigeringssystemet
import NavDisplayWide from "./../headerRelated/NavDisplayWide"  //Desktop navigeringssystemet
import { SlMinus } from "react-icons/sl";
import generalText from "./../../data/generalText.json"

function Header(props) {
    const [showASAP, setShowASAP] = useState(false)
    const [showGeneral, setShowGeneral] = useState(false)
    const GeneralMessage = props.GeneralMessage;
    const ASAPMessage = props.ASAPMessage;
    const isMobile = useMediaQuery({ maxWidth: 767 })   //Sant om bredden er MINDRE enn 767 piksler
    const isDesktop = useMediaQuery({ minWidth: 767 })  //Sant om bredden er OVER ELLER LIK enn 767 piksler
    const storageAsap = localStorage.getItem("asap");
    const storageGeneral = localStorage.getItem("general");

    //Mobil navigeringssystemet som en funksjon
    const MobileView = () => {
        return (
            <Hamburger />
        )
    };

    //Desktop navigeringssystemet som en funksjon
    const DesktopView = () => {
        return (
            <NavDisplayWide />
        )
    };

    useEffect(() => {
        const now = Date.now();

        if (!storageAsap) {
            setShowASAP(true);
        } else {
            try {
                
                if (storageAsap < now) {
                    setShowASAP(true);
                }
            } catch (e) {
            }
        }

        if (!storageGeneral) {
            setShowGeneral(true);
        } else {
            try {
                if (storageGeneral < now) {
                    setShowGeneral(true);
                }
            } catch (e) {
            }
        }
    }, [storageAsap, storageGeneral]);

    const handleDismissClick = (e) => {
        const now = Date.now();
        const expire = now + generalText.popupExpireTimeInDays * 24 * 60 * 60 * 1000;
        const type = e.currentTarget.getAttribute("data-type");
        if (type === "asap") {
            setShowASAP(false)
            localStorage.setItem("asap", expire);
        } else if (type === "general") {
            setShowGeneral(false)
            localStorage.setItem("general", expire);
        }
    };

    return (
        <div>
            {(showASAP && ASAPMessage.length > 0) &&
                <div id="asap-message" className="anti-select">
                    <div className="inside-message">
                        <div id="important-text-div-message">
                            <h2>VIKTIG: </h2>
                            <p>{ASAPMessage}</p>
                        </div>
                        <div className="x-out-icon">
                            <SlMinus size={isDesktop ? 26 : 18} color="red" onClick={handleDismissClick} data-type="asap" />
                        </div>
                    </div>
                </div>
            }

            {
                (showGeneral && GeneralMessage.length > 0) &&
                <div id="general-message" className="anti-select">
                    <div className="inside-message">
                        <p>{GeneralMessage}</p>
                        <div className="x-out-icon">
                            <SlMinus size={isDesktop ? 26 : 18} color="red" onClick={handleDismissClick} data-type="general" />
                        </div>
                    </div>
                </div>

            }
            <header>
                <Link to="/">
                    <img src={Logo} alt="Teorom logo" className="anti-select" /> {/*onClick={DirectHomepage}*/}
                </Link>
                {isMobile && <MobileView />}
                {isDesktop && <DesktopView />}
            </header>
        </div>
    );
};

//Eksporterer funksjonen
export default Header;