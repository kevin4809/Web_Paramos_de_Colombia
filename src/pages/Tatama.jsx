import React from "react";
import img_tatama from "../assets/23.jpg";
const Tatama = () => {
  return (
    <div>
      <h1>Paramo de tatama</h1>
      <p>
        Su ubicación geográfica, la presencia de un páramo virgen y el excelente
        estado de conservación en que se encuentra, convierten al Parque Natural
        Tatamá en un área protegida de alto interés científico y un refugio
        natural intacto para muchas especies vegetales y animales. El parque se
        destaca en la Cordillera Occidental por el excelente estado de
        conservación de sus ecosistemas. En su territorio nacen afluentes que
        drenan en las vertientes de los ríos San Juan y Cauca y en su parte más
        alta alberga el páramo de Tatamá, que junto con los de Frontino y El
        Duende son los únicos tres páramos de Colombia que no han sufrido
        alteración humana.
        <hr />
        Por su ubicación geográfica, la existencia de un páramo virgen y su buen
        estado de protección, el Parque Tatamar se ha convertido en un área
        protegida de alto valor científico y un refugio natural completo para
        muchas especies de plantas y animales. El parque se destaca en la
        Cordillera Occidental por la buena protección de su ecosistema. En su
        territorio nacieron afluentes que fluyen desde las vertientes de los
        ríos San Juan y Cauca. En su punto más alto está el páramo Tatamá, con
        Frontino y El Duende. Duende) juntos, son los únicos tres Páramo
        (Páramo) en Colombia que no han ha sufrido una transformación humana.
        Una característica muy destacada de la estructura ecológica, los grandes
        valles glaciares entre 2800 y 3400 msnm son escasos. Entre ellos se
        encuentra la vegetación de páramo.
        <hr />
        La fauna del parque es muy diversa, representada principalmente por
        aves, mamíferos, anfibios y reptiles, esto se explica por el gradiente
        de altitud protegido.En lo que respecta a las aves, existen tres
        especies endémicas, dos de la sierra occidental, una de la costa del
        Pacífico, además, 11 de las 63 especies de aves en peligro de extinción
        están protegidas. Uno de los mayores beneficios que brinda el parque es
        su papel en la regulación del agua, desde donde su acueducto abastece al
        menos a 9 localidades, y también juega un papel muy importante en la
        producción agrícola en los sectores de Risaralda y Valle.
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_tatama} alt="" />
    </div>
  );
};

export default Tatama;
