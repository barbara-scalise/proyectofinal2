import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="contenedor">
      <div class="column is-one-quarter">
        <div class="card equal-height">
          <div class="card-image has-text-centered">
            <figure class="image is-64x64 is-inline-block">
              <img src={img} alt={name} />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{name}</p>
                <p class="subtitle is-6">{description}</p>
                <p class="subtitle is-6">Precio: ${price}</p>
                <p class="subtitle is-6">Stock Disponible: {stock}</p>
              </div>
            </div>
            <div class="content">
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
