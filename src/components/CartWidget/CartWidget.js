import { Link } from 'react-router-dom'
import carrito from './assets/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () =>{

    const {cantidadEnCarrito } = useContext(CartContext);

    return(
        <div>
            <Link className='menu-link' to="/carrito">CARRITO</Link>
            <span className='numero'>{cantidadEnCarrito()}</span>
        </div>
    )

}

export default CartWidget