import { NavLink } from "react-router-dom";

function NavDisplayWide() {
    return (
        <div className="nav-display-wide" >
            <NavLink to="/fag" className="header-link-option">
                Fag
            </NavLink>
            <NavLink to="/sok" className="header-link-option">
                Søk
            </NavLink>
        </div>
    );
};

export default NavDisplayWide;