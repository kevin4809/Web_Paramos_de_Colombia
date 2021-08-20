import React from "react";
import img_guasca from "../assets/18.jpg";
const Guasca = () => {
  return (
    <div>
      <h1>Paramo de guasca</h1>

      <p>
        La Reserva El Zoque esta ubicada en el páramo de Guasca a una hora de
        Bogotá. A 6.5 kms del pueblo de Guasca via Gacheta se encuentra la
        Reserva El Zoque. Si quieres visitar la Reserva El Zoque ponte en
        contacto con nosotros para realizar tu reserva de visita. Te puedes
        comunicar a través de nuestras redes sociales, al teléfono de contacto o
        a través de este formulario. La Reserva El Zoque cuenta con una
        capacidad de carga limitada y trabaja a base del turismo comunitario y
        nos apoyamos de los saberes locales.
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_guasca} alt="" />
    </div>
  );
};

export default Guasca;
