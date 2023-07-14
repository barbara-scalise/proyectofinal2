import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
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
              <div className="media-left"></div>
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">Precio: ${price}</p>
                <p className="subtitle is-6">Stock Disponible: {stock}</p>
              </div>
            </div>

            <div className="content">
              <Link
                to={`/item/${id}`}
                className="option"
                class="button is-primary"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
