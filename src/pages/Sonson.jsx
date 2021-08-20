import React from "react";
import img_sonson from "../assets/28.png";
const Sonson = () => {
  return (
    <div>
      <h1>Paramo de sonson</h1>
      <p>
        El Páramo de Sonsón es una fundamental reserva ecológica donde abundan
        especies de fauna y flora únicas en el planeta, aquí nacen ríos y
        quebradas que desembocan en el Flujo de agua Magdalena. El Patrimonio
        Natural de Sonsón está formado por formaciones geológicas y
        fisiográficas que conforman el hábitat de especies animales y vegetales
        con costo científico y de conservación. Aquí radica el valor de defender
        y mantener el Patrimonio Cultural, Tangible e Intangible y Natural de
        Sonsón.
        <hr />
        El Páramo de Sonsón es una fundamental reserva ecológica ubicada en
        jurisdicción del municipio de Sonsón, (departamento de Antioquia,
        Colombia), donde abundan relevantes especies de fauna y flora, únicas en
        el planeta. Ahí nacen ríos y quebradas, los cuales desembocan en el
        Flujo de agua Magdalena. Limita con los municipios de Argelia y Nariño.
        Su conservación es materia de análisis a causa de las autoridades del
        medio ambiente, y para este objetivo se han implementado varios
        programas de índole nacional, como el programa de "familias
        guardabosques", entre otros.
        <hr />
        El Páramo de Sonsón pertenece a la Cordillera Central de Colombia y en
        su punto mayor puede llegar a 3350 m.s.n.m.
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_sonson} alt="" />
    </div>
  );
};

export default Sonson;
