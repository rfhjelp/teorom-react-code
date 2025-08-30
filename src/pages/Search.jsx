import { useState, useEffect } from "react";
import SearchDisplay from "../components/SearchDisplay";

const Search = () => {
    const [searchWord, setSearchWord] = useState('')
    const [searchDisplay, setSearchDisplay] = useState(<SearchDisplay searchWord={searchWord}/>)
    const [algoInfoShow, setAlgoInfoShow] = useState(false);

    useEffect(()=>{
        const newSearchDisplay = setTimeout(() => {
            setSearchDisplay(<SearchDisplay matchingWords={algoInfoShow} searchWord={searchWord}/>)
        }, 300)
        return () => {
            clearTimeout(newSearchDisplay)
        }
    }, [searchWord, algoInfoShow]);

    const algoInfoToggle = () => {
        if (algoInfoShow) {
            setAlgoInfoShow(false)
        } else {
            setAlgoInfoShow(true)
        }
    };
    
    return (
        <div id="search">
            <div id="algo-info">
                <p onClick={algoInfoToggle} id="algo-info-toggle" className="anti-select">{algoInfoShow ? "Skjul" : "Les mer om hvordan søkealgoritmen fungerer ..."}</p>
                {
                    algoInfoShow &&
                    <div>
                        <ul>
                            <li>
                                Først blir all tekst gjort om til små bokstaver, slik at store og små bokstaver ikke spiller noen rolle. For eksempel blir "Brøk Addisjon" til "brøk addisjon".
                            </li>
                            <li>
                                Deretter deler algoritmen opp teksten i en liste med enkeltord, ved å splitte på mellomrom. Slik blir "brøk addisjon" til "brøk" og "addisjon".
                            </li>
                            <li>
                                Til slutt sammenligner algoritmen hvert av søkeordene med alle titlene, og rangerer resultatene etter hvor godt de matcher. Først vises titler som inneholder alle søkeordene, som både "brøk" og "addisjon", deretter titler som inneholder bare ett av ordene, for eksempel bare "brøk" eller bare "addisjon".
                            </li>
                        </ul>
                    </div>
                }
            </div>
            <div id="search-form">
                <input type="text" placeholder="Søk (bruk stikkord, skill med mellomrom)"
                    value={searchWord}
                    onChange={(e) => {setSearchWord(e.target.value)}}
                />
            </div>
            <div id="search-results">
                {searchDisplay}
            </div>
        </div>
    );
};

export default Search;