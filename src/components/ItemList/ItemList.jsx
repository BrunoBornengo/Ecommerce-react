import Item from "../../Item/Item"

const ItemList = ( {productos, titulo} ) => {

    console.log(productos)
    return (
        <div className="container">
            <h2 className="main-title">{titulo}</h2>

            <div className="productos">
                { productos.map((prod) => <Item productos={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}

export default ItemList