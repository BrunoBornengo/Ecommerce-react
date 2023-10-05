import Item from "../../Item/Item"

const ItemList = ( {productos} ) => {

    console.log(productos)
    return (
        <div className="container">
            <h2 className="main-title">Productos</h2>

            <div className="productos">
                { productos.map((prod) => <Item productos={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}

export default ItemList