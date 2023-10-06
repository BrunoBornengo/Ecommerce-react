import React from "react";
import { Link } from "react-router-dom";

const Item = ( {productos}) => {
    return (
        <div className="producto">
            <img src={productos.imagen}/>

            <div>
                <h4>{productos.titulo}</h4>
                <p>Precio: ${productos.precio}</p>
                <p>Categoria: {productos.categoria}</p>
                <Link className="ver-mas" to={`/item/${productos.id}`}>Ver más</Link>
            </div>



        </div>
    )
}

export default Item