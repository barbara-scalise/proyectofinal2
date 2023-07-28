import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="contenedor">
      <div className="column is-one-quarter">
        <div className="card equal-height">
          <div className="card-image has-text-centered">
            <figure className="image is-64x64 is-inline-block">
              <img src={img} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{description}</p>
                <p className="subtitle is-6">Precio: ${price}</p>
                <p className="subtitle is-6">Stock Disponible: {stock}</p>
              </div>
            </div>
            <div className="content">
              <ItemCount
                initial={1}
                stock={stock}
                onAdd={(quantity) => console.log("cantidad agregada", quantity)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
