import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombre, descripcion, precio, quantity }) => {
  const { removeItem } = useContext(CartContext);
  const subTotal = precio * quantity;
  const removeProduct = () => {
    removeItem(id);
  };
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <p>Descripcion del producto: {descripcion}</p>
      <p>Precio ${precio}</p>
      <p>SubTotal: ${subTotal}</p>
      <button onClick={() => removeProduct(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
