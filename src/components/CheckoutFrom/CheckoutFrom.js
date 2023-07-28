import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    if (emailVerification !== email) {
      console.error(
        "Verifica que el email y el email de confirmacion sean el mismo"
      );
      //SetError("error en validacion de emails")
    } else {
      const userData = {
        name,
        phone,
        email,
      };
      onConfirm(userData);
    }
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="label">
          Nombre
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className="label">
          Apellido
          <input
            className="Input"
            type="text"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            required
          />
        </label>
        <label className="label">
          Telefono
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="label">
          Email
          <input
            className="Input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <label className="label">
          Verificacion Email
          <input
            className="Input"
            type="email"
            value={emailVerification}
            onChange={({ target }) => setEmailVerification(target.value)}
            required
          />
        </label>
        <div className="Label">
          <button type="submit" className="Button">
            Crear Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
