import React from "react";
import img_alfombras from "../assets/22.jpg";
const Alfonbras = () => {
  return (
    <div>
      <h1>Paramo de las alfombras</h1>
      <p>
        El páramo de las Alfombras, se encuentra localizado en el corredor
        oriental de la cordillera oriental en jurisdicción del departamento de
        Boyacá, y los municipios de Tota y Aquitania, tiene una extensión de
        30.700,33 hectáreas,comprendidas entre las cotas altitudinales de 3000
        msnm hasta 3850 msnm.Según el EOT, del municipio de Aquitania y el EOT
        delmunicipio de Tota, el páramo de las Alfombras en estosmunicipios se
        encuentra caracterizado por la presencia de pajonales, matorrales,y
        frailejones, con alta presencia de fisonomías vegetales, con
        temperaturapromedio anual de 10 grados Centígrados. También es
        característica la presencia de pantanos y turberas en la parte más alta.
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_alfombras} alt="" />
    </div>
  );
};


export default Alfonbras;
