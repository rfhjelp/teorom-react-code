import { SlShare } from "react-icons/sl";

const Share = (props) => {
    const sharePressed = () => {
        /*
        
        Development: localhost:3000/teorom#/spesifikt-fag-id/
        Github pages: https://rfhjelp.github.io/teorom/#/spesifikt-fag-id/

        */
        const link = `https://rfhjelp.github.io/teorom/#/spesifikt-fag-id/${props.link}`

        if(window.confirm("Vil du kopiere linken til denne videoen?")) {
            try {
                navigator.clipboard.writeText(link);
                alert("Linken ble kopiert!")
            } catch (error) {
                alert("Linken kunne ikke kopieres. Prøv igjen senere eller bytt nettleser.")
            }
        } else {
        };
    };

    return (
        <button id="share-btn" onClick={sharePressed}><span><SlShare size={24} style={{marginRight: "5px"}} />Del video</span></button>
    )
};

export default Share;