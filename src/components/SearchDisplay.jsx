import searchAlgo from "../js/searchAlgo";
import { useNavigate } from "react-router-dom";

const SearchDisplay = (props) => {
    const navigate = useNavigate();
    const searchWord = props.searchWord;

    const videos = searchAlgo(searchWord);

    const listDisplay = videos.map((video, i) => {
        const linkUSed = `/spesifikt-fag/${video.icourse}/${video.icategory}/${video.ivideo}` // `/spesifikt-fag/${courseI}/${iCategory}/${i}`
        
        const handleClick = () => {
            setTimeout(() => {
                navigate(linkUSed);
            }, 200)
        };
        
        return (
            <tr key={i} className="search-tr search-tr-res anti-select" onClick={handleClick}>
                <td className="search-tr-name">
                    <p>{video.title}</p>
                </td>
                <td>{video.category}</td>
                <td><p>{video.grade}</p></td>
            </tr>
        )
    });

    return (
        <div id="result">
            {(videos.length > 0)
            ?
                <>
                    <h1>Resultater</h1>
                    <table id="search-table">
                        <thead>
                            <tr className="search-tr">
                                <th>Tittel</th>
                                <th>Kategori</th>
                                <th id="trinn-th">Nivå (gitt i trinn)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listDisplay}
                        </tbody>
                    </table>
                </>
            :
                <h1 className="error">Ikke noe resultat funnet for '<i>{searchWord}</i>'</h1>
            }
        </div>
    );
};

export default SearchDisplay;