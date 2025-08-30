import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import VLogo from "./../images/Vertical_logo.png"
import generalText from "./../data/generalText.json"
import { isMobileSafari, isChrome, isMobile, isSamsungBrowser } from "react-device-detect";

const Homepage = () => {
    const navigate = useNavigate();
    const isSmall = useMediaQuery({ minWidth: 1227 })
    const homepage = generalText.homepage

    const goToFag = () => {
        navigate("/fag")
    };

    const HowMakeAppDisplay = () => {
        if (isMobileSafari) {
            return (
                <div className="text-div">
                    <h2>Legg til på telefon (iOS)</h2>
                    <p><em>Instruksjoner fra august 2025</em></p>
                    <ol style={{ padding: "5px 5px 5px 25px" }}>
                        <li>Åpne nettsiden</li>
                        <li>Trykk på «del»-ikonet (firkant med pil)</li>
                        <li>Trykk på «Legg til på hjem-skjerm»</li>
                    </ol>
                </div>
            )
        } else if (isMobile && isChrome) {
            return (
                <div className="text-div">
                    <h2>Legg til på telefon (android, chrome)</h2>
                    <p><em>Instruksjoner fra august 2025</em></p>
                    <ol style={{ padding: "5px 5px 5px 25px" }}>
                        <li>Åpne nettsiden</li>
                        <li>Trykk på de tre prikkene oppe til høyre</li>
                        <li>Trykk på «Legg til på startskjerm»</li>
                    </ol>
                </div>
            );
        } else if (isMobile && isSamsungBrowser) {
            return (
                <div className="text-div">
                    <h2>Legg til på telefon (android, Samsung nettleser)</h2>
                    <p><em>Instruksjoner fra august 2025</em></p>
                    <ol style={{ padding: "5px 5px 5px 25px" }}>
                        <li>Åpne nettsiden</li>
                        <li>Trykk på de tre strekene nederst til høyre</li>
                        <li>Trykk på «Legg til side på»</li>
                        <li>Velg «Startskjerm»</li>
                    </ol>
                </div>
            );
        }
    };

    return (
        <div id="homepage">
            <div id="homepage-text-group">
                <div id="homepage-introduction" className="text-div">
                    <h1>Møt Teorom</h1>
                    <p>{homepage.meetTeorom}</p>
                    <div>
                        <iframe id="intro-video" src='https://www.youtube.com/embed/tgbNymZ7vqY' title="YouTube video player" frameBorder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="text-div">
                    <h1>Vårt kjernefokus</h1>
                    <ul style={{ padding: "5px 5px 5px 25px" }}>
                        {homepage.whyTeorom.map((sentence, i) => (
                            <li key={i}>{sentence}</li>
                        ))}
                    </ul>
                    <h2 className="start-now-hp-parent anti-select"><Link to={"/fag"} className="start-now-hp">Start nå</Link></h2>
                </div>
                <HowMakeAppDisplay />
            </div>

            <div id="homepage-image">
                {isSmall && <img src={VLogo} alt="Logo" className="anti-select" onClick={goToFag} />}
            </div>
        </div>
    );
};

export default Homepage;