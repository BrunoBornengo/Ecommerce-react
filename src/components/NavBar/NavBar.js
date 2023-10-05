import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo"><h1>Tienda Mate</h1></a>
            <ul className="menu">
                <li className="menu-link" href="#">INICIO</li>
                <li className="menu-link" href="#">PRODUCTOS</li>
                <li className="menu-link" href="#">NOSOTROS</li>
                <li className="menu-link" href="#">CONTACTO</li>
            </ul>
            {/* <CartWidget/> */}
        </nav>
    )
}

export default NavBar