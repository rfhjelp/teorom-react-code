import { useState, useEffect } from "react";
import SearchDisplay from "../components/SearchDisplay";

const Search = () => {
    const [searchWord, setSearchWord] = useState('')
    const [searchDisplay, setSearchDisplay] = useState(<SearchDisplay searchWord={searchWord}/>)

    useEffect(()=>{
        const newSearchDisplay = setTimeout(() => {
            setSearchDisplay(<SearchDisplay searchWord={searchWord}/>)
        }, 300)
        return () => {
            clearTimeout(newSearchDisplay)
        }
    }, [searchWord]);
    
    return (
        <div id="search">
            <div id="search-form">
                <input type="text" placeholder="Søk (tips: bruk stikkord)"
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