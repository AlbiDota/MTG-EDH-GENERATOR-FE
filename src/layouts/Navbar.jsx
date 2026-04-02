import { Link } from "react-router-dom";
import "./Layout.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="https://github.com/AlbiDota/MTG-EDH-GENERATOR-FE">Frontend</Link></li>
                <li><Link to="https://github.com/AlbiDota/MTG-EDH-GENERATOR-BE">Backend</Link></li>
                

            </ul>
            
            <ul className="navbar-right-side">
                <li><Link to="https://github.com/AlbiDota">Github profile</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;