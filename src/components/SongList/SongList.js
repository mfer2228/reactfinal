import Item from "../item/Item";


// este componente se encarga de que las canciones sean agregadas a la playlist

const ItemList = ({products }) => {
   return(
    <div className="ListGroup">
        {products.map (prod => <Item key={prod.id} {...prod} />)}
    </div>
   )
  };

export default ItemList