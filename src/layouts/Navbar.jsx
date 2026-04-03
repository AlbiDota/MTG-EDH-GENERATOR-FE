import { Link } from "react-router-dom";
import "./Layout.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="https://github.com/AlbiDota/MTG-EDH-GENERATOR-FE" target="_blank" rel="noopener noreferrer">Frontend</Link></li>
                <li><Link to="https://github.com/AlbiDota/MTG-EDH-GENERATOR-BE" target="_blank" rel="noopener noreferrer">Backend</Link></li>
                

            </ul>
            
            <ul className="navbar-right-side">
                <li><Link to="https://github.com/AlbiDota"target="_blank" rel="noopener noreferrer">Github profile</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;