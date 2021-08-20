import React from "react";
import img_total from "../assets/12.jpg";
const Totabijagual = () => {
  return (
    <div>
      <h1>Paramo de tota-bijagual</h1>

      <p>
        Actualmente, la Corporación cuenta con tres (3) ecosistemas declarados
        como áreas protegidas, entre ellos, se encuentran el páramo de Rabanal,
        el páramo de Cristales y Castillejo, además de Cuchillas Negra y
        Guanaque. El complejo de páramo Mamapacha y Bijagual se encuentra
        ubicado entre los municipios de Garagoa, Chinavita, Ramiriquí, Tibaná,
        Ciénega y Viracachá, pertenecientes a la jurisdicción de Corpochivor; se
        caracteriza principalmente por tener zonas de páramo y bosque
        altoandino, por lo cual, su altura varía entre los 1750 y 3500 msnm,
        abarcando un área total de 25.568,45 ha. Este páramo es estratégico
        debido a la multiplicidad de servicios ambientales, funciones naturales
        relacionadas con su capacidad de interceptar, almacenar y regular los
        flujos hídricos superficiales y subterráneos, y hábitat de especies en
        peligro de extinción como el Oso Andino (Tremarctos ornatus), el
        Periquito Aliamarillo (Pirrhura callyptera), el Pato Andino (Oxyura
        jamaicensis) y la Nutria (Lontra aff. longicaudis), siendo esta última,
        el único registro en Colombia de esta especie a una altura de 3.110
        msnm., convirtiéndose en un indicador de conservación del ecosistema y
        calidad de agua. Hasta el momento, Corpochivor ha realizado
        socializaciones satisfactorias con las administraciones municipales de
        Garagoa, Chinavita, Ramiriquí, Tibaná, Ciénega y Viracachá, habitantes
        del páramo, comunidad organizada, concejales, juntas de acueductos
        veredales y juntas de acción comunal con el fin de generar acuerdos que
        permitan la protección del recurso hídrico como principal servicio
        ecosistémico del páramo de Mamapacha y Bijagual.
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_total} alt="" />
    </div>
  );
};

export default Totabijagual;
