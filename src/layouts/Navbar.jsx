import { Link } from "react-router-dom";
import "./Layout.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>

            </ul>
            
            <ul className="navbar-right-side">
                
            </ul>
        </nav>
    )
}

export default Navbar;