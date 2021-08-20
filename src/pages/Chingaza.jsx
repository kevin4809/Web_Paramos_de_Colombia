import React from "react";
import img_chingaza from "../assets/13.jpg";
const Chingaza = () => {
  return (
    <div>
      <h1>Paramo de Chingaza</h1>
      <p>
        El páramo de Chingaza, situado en el Parque Nacional Natural del mismo
        nombre, es un refugio de fauna y flora silvestre que abastece de agua a
        Bogotá y que, según ambientalistas, puede estar en peligro si se excede
        la explotación de su riqueza hídrica. El Parque de Chingaza está
        enclavado en la Cordillera Oriental de los Andes, a unos 99 kilómetros
        de Bogotá, y alcanza una altitud de hasta 4.020 metros sobre el nivel
        del mar, lo que hace de esta reserva uno de los principales atractivos
        ecoturísticos de la zona. Este ecosistema, que se extiende por 76.600
        hectáreas, abarca los municipios de Fómeque, Guasca, La Calera, Choachí,
        Gachalá, Junín y Medina, en el departamento de Cundinamarca, así como
        Restrepo, Cumaral, El Calvario y San Juanito en Meta (centro). Entre la
        rica biodiversidad que caracteriza al bosque alto andino y al páramo del
        Parque de Chingaza habitan el Oso de Anteojos (Tremarctos ornatus) y
        otras especies como el venado, el puma y el leopardo.
        <hr />
        El Parque Nacional Natural Chingaza, es un tesoro natural y cultural del
        centro de Colombia, la magia de sus montañas guarda secretos y
        pensamientos heredados de los Muiscas y los Guayupes, pueblos indígenas
        que resguardaban este territorio, así como de comunidades campesinas que
        habitaron la región hace menos de 40 años. En la actualidad es refugio
        de fauna y flora de los Andes que revelan al visitante el secreto de la
        vida.
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_chingaza} alt="" />
    </div>
  );
};

export default Chingaza;
