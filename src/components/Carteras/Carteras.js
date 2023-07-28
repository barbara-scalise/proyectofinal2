import React from "react";
import imagenCarteras from "./imagenCarteras/chiusa.jpg";
import imagenCarteras from "./imgenCarteras/francesa.jpg";

function Carteras() {
  return (
    <div>
      <div>
        <img src={imagenCarteras} alt="chiusa.jpg" />
        <span>Cantidad: 4</span>
      </div>
      <div>
        <img src={imagenCarteras} alt="francesa.jpg" />
        <span>Stock: 20</span>
      </div>
      <div>
        <img src={imagenCarteras} alt="gemma.jpg" />
        <span>Stock: 14</span>
      </div>
      <div>
        <img src={imagenCarteras} alt="perla.jpg" />
        <span>Stock: 10</span>
      </div>
    </div>
  );
}

export default Carteras;
