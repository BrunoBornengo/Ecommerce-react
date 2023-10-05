import React from "react";

const Item = ( {producto}) => {
    return (
        <div className="producto">
            <img src={producto.image}/>
        </div>
    )
}

export default Item