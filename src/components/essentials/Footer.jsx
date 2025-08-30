//Nederst på siden, footer
import generalText from "./../../data/generalText.json"

//Lager funksjonen
function Footer() {
    //Variabler, år når nettsiden ble laget og nåtidens år for å sammenlikne
    const creationYear = 2025;
    const currentYear = new Date().getFullYear();

    //Variablen som vises på nettsiden
    let yearDisplay = "2025";

    //Endrer variablen "yearDisplay" hvis vi ikke lenger er i år 2025
    if (creationYear < currentYear) {
        yearDisplay = `${creationYear}-${currentYear}`
    }

    //Returner footeren med lisens, copyright, navn og år
    return (
        <footer className="anti-select">
            <p><b style={{fontWeight: "600"}}>Krediteringer (folk):</b></p>
            <p>Teamet bak Teorom: {generalText.peopleContributing.map((person, i) => (<a href={person.link} target="_blank" rel="noreferrer" key={i}>{person.name}</a>))}</p>
            
            <br />


            <p><b style={{fontWeight: "600"}}>Krediteringer (annet):</b></p>
            <p>Font: Libertinus Sans (Philipp H. Poll); SIL OFL 1.1—<a href="https://github.com/googlefonts/libertinus" target="_blank" rel="noopener noreferrer">github.com/googlefonts/libertinus</a></p>
            <p>
                Ikoner av <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">"React Icons"</a>,
                inkluderer <a href="https://simplelineicons.github.io/" target="_blank" rel="noreferrer">"Simple Line Icons"</a> –
                Lisensiert under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">"MIT License"</a>.
            </p>
            <p>Hamburger-meny-tegnet med <a href="https://www.npmjs.com/package/hamburger-react" target="_blank" rel="noopener noreferrer">hamburger-react</a> (v2.5.2, Lisensiert under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">"MIT License"</a>)</p>
            <p>Enhetsdeteksjon med <a href="https://www.npmjs.com/package/react-device-detect" target="_blank" rel="noopener noreferrer">react-device-detect</a> (v2.2.3, Lisensiert under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">"MIT License"</a>)</p>
            <p>"Responsive" design med <a href="https://www.npmjs.com/package/react-responsive" target="_blank" rel="noopener noreferrer">react-responsive</a> (v10.0.1, Lisensiert under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">"MIT License"</a>)</p>
            

            <br />

            <p><b style={{fontWeight: "600"}}>Opphavsrett:</b></p>
            <p><b>© Teorom {yearDisplay} - </b><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a></p>
        </footer>
    );
};

//Eksporterer footeren
export default Footer;