import React from "react";
import img_plateado from "../assets/26.jpg";
const Plateado = () => {
  return (
    <div>
      <h1>Paramo cerro el plateado</h1>
      <p>
        El páramo es como un colchón que regula y preserva agua por su baja
        temperatura, la almacena y la va soltando muy lento hasta surtir el
        sistema lagunar.
        <hr />
        Es una riqueza el Cerro Plateado está entre los departamentos de Cauca y
        Nariño, tiene 17.070 hectáreas, en el 90 por ciento de su área se hallan
        ecosistemas naturales, como bosque elevado andino, páramo y subpáramo.
        En dicha región se han reconocido 25 especies de aves, en medio de las
        que se resaltan las nectarívoras, con 5 especies de colibríes, 3
        mieleros y los semilleros, además varias de estas especies conforman
        nuevos registros para la era, como la primavera pechicolorada, la cual
        no fue registrada para la cordillera occidental, de igual manera 7
        especies que fueron registradas por primera ocasión. De este ecosistema
        realizan parte 6 municipios del Cauca: Argelia, Balboa, El Tambo, Guapi,
        Patía-El Bordo y Timbiquí; y 2 de Nariño: El Charco y Leiva, por lo que
        se han predeterminado tips comunitarios de la Cordillera Oriental de
        Nariño-Copdiconc, en los cuales participan Elevado Guapi, Flujo de agua
        Napi, Flujo de agua San Francisco y Renacer Negron el Valle, una zona
        que es dependiente mucho de este líquido
      </p>
      <img
        className="rounded mx-auto d-block img-fluid img_paramos img_paramos"
        src={img_plateado}
        alt=""
      />
    </div>
  );
};

export default Plateado;
