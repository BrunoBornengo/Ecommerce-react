import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Tienda Mate</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">INICIO</Link></li>
                <li><Link className="menu-link" to="/productos">PRODUCTOS</Link></li>
                <li><Link className="menu-link" to="/productos/Mates">MATES</Link></li>
                <li><Link className="menu-link" to="/productos/Bombillas">BOMBILLAS</Link></li>
                <li><Link className="menu-link" to="/productos/Bolsos materos">BOLSOS MATEROS</Link></li>
                <li><Link className="menu-link" to="/contacto">CONTACTO</Link></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default NavBar