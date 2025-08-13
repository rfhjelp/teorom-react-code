import React from "react";
import { SlShareAlt } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Description = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); //Sant om bredden er MINDRE enn 767 piksler
  const information = props.information;
  const [showOrNot, setShowOrNot] = useState("Vis")

  let textDisplay = false;
  if ("text" in information) {
    const textSplit = information.text.split("\n");
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
  if ("links" in information) {
    if (information.links.length > 0) {
      linkDisplay = information.links.map((linkObj, i) => (
        <li key={i}>
          <a href={linkObj.link} target="_blank" rel="noreferrer">
            {linkObj.name}
          </a>
          <SlShareAlt style={{ marginLeft: "20px" }} />
        </li>
      ));
    }
  }

  const toggleDescription = () => {
    const descriptionText = document.getElementById("description-link-and-text");
    const hiddenState = (descriptionText.style.display === "none" ? true : false)

    if (hiddenState) {
        descriptionText.style.display = "block";
        setShowOrNot("Skjul")
    } else {
        descriptionText.style.display = "none";
        setShowOrNot("Vis")
    };
  };

  let toggleButtonText = "";
  if (textDisplay && linkDisplay) {
    const multi = (information.links.length > 1 ? "er" : "")
    toggleButtonText = "beskrivelse og link" + multi
  } else if (textDisplay) {
    toggleButtonText = "beskrivelse"
  } else if (linkDisplay) {
    const multi = (information.links.length > 1 ? "er" : "")
    toggleButtonText = "link" + multi
  }

  return (
    <div id="description">
        {
            ((textDisplay || linkDisplay) && isMobile)
            &&
            <button id="toggle-description" onClick={toggleDescription}><span><b>{showOrNot}</b> {toggleButtonText}</span></button>
        }
      <div style={{display: (!isMobile) ? 'block' : 'none', backgroundColor: (!isMobile) ? 'transparent' : 'lightGray'}} id="description-link-and-text">
        {textDisplay && (
          <>
            <h2 style={{ margin: "5px 0px 2px" }}><b>Beskrivelse</b></h2>
            <p style={{ lineHeight: "1.3em", margin: "0 2px" }}>
              {textDisplay}
            </p>
          </>
        )}
        {linkDisplay && (
          <>
            <h3 style={{ margin: "5px 0px 2px" }}>
              <b>Link{information.links.length > 1 && "er"}</b>
            </h3>
            <ul
              style={{
                lineHeight: "1.3em",
                margin: "5px 2px 20px",
                padding: "1px 0 1px 20px",
                listStyle: "none",
              }}
            >
              {linkDisplay}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Description;
