import React from "react";
import { SlShareAlt } from "react-icons/sl";

const Description = (props) => {
    const information = props.information;    

    let textDisplay = false;
    if ('text' in information) {        
        const textSplit = information.text.split("\n")
        textDisplay = textSplit.map((textPart, i) => {
            const last = !(textSplit.length - 1 === i);
            return (
                <React.Fragment key={i}>
                    {textPart}
                    {last && <br />}
                </React.Fragment>
            );
        });
    }
    let linkDisplay = false;
    if ('links' in information) {
        if (information.links.length > 0) {
            linkDisplay = information.links.map((linkObj, i) => (
                <li key={i}><a href={linkObj.link} target="_blank" rel="noreferrer">{linkObj.name}</a><SlShareAlt style={{marginLeft: "20px"}}/></li>
            ));
        }
    }

    return (
        <div id="description">
            {textDisplay &&
                <>
                    <h3 style={{margin: "5px 0px 2px"}}>Beskrivelse</h3>
                    <p style={{lineHeight: "1.3em", margin: "0 2px"}}>
                        {textDisplay}
                    </p>
                </>
            }
            {
                (linkDisplay)
                &&
                <>
                    <h3 style={{margin: "5px 0px 2px"}}>Link{information.links.length > 1 && "er"}</h3>
                    <ul style={{lineHeight: "1.3em", margin: "5px 2px 20px", padding: "1px 0 1px 20px", listStyle: "none"}}>
                        {linkDisplay}
                    </ul>
                </>
            }
        </div>
    );
};

export default Description;