import React from "react";
import img_baldias from "../assets/29.jpg";
const Baldias = () => {
  return (
    <div>
      <h1>Paramo de las baldias</h1>
      <p>
        El páramo Las Baldías está situado en la Cordillera Central del
        departamento de Antioquia, 30 km de distancia del Área Metropolitana del
        Valle de Aburrá Está en jurisdicción de los municipios de Precioso, San
        Jerónimo, San Pedro de los Milagros y Medellín. Hace parte de las
        vertientes del altiplano norte que drenan sus aguas hacia la zona
        occidente, de trascendencia estratégica para la conservación y
        regulación de este recurso para una región cálida de gran demanda
        turística como lo son los municipios de San Jerónimo y Sopetràn
        primordialmente.
        <hr />
        Con apenas 860 hectáreas, Las Baldías es el páramo más diminuto del
        territorio, no obstante, realizando una comparación con 8 de los
        monumentales del territorio, en medio de éstos el de Belmira-Santa Inés,
        Chingaza y San Turbán; Las Baldías se encuentra en el tercer sitio
        referente a número de pobladores beneficiados con suministro de agua por
        hectárea (ha) de páramo.
        <hr />
        Pese a las transformaciones que ha sufrido durante los años gracias a su
        simple ingreso, Las Baldías continúa siendo un corredor biológico
        fundamental para la fauna silvestre de nuestro valle y hábitat de
        frailejonales y otras especies exclusivas de páramo.
        <hr />
        El páramo Las Baldías pertenece a los ecosistemas más frágiles del Valle
        de Aburrá. Se sitúa en el corregimiento de San Félix, en el municipio de
        Hermoso. De ahí nacen las quebradas El Hato, La García, La Madera y La
        Iguaná.
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_baldias} alt="" />
    </div>
  );
};

export default Baldias;
