import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda Mate</h3>
            <div>
                <button>MATE IMPERIAL GOLD</button>
                <button>BOLSO MATERO</button>
                <button>TERMO STANLEY</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar