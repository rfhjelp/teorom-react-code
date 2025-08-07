//Mobil navigeringssystemet

import { NavLink } from "react-router-dom";
import HamburgerR from "hamburger-react";   //Hamburger symbolet som brukes for å bytte mellom å vise og fjerne menyen
import { useState } from "react";           //Trenger for å ha live oppdatering på om menyen er åpen

const Hamburger = () => {
    const [open, setOpen] = useState(false) //åpen eller lukket mobil meny

    return (
        <div className="hamburger-parent">
            <HamburgerR
                size={34}
                toggled={open}
                toggle={setOpen}
            />
            {open && <div className="nav-display-wide">
                <NavLink to="/fag" className="header-link-option">
                    Fag
                </NavLink>
                <NavLink to="/sok" className="header-link-option">
                    Søk
                </NavLink>
            </div>}
        </div>
    );
};

export default Hamburger;