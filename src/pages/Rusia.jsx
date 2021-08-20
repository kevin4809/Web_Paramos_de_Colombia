import React from "react";
import img_rusia from "../assets/8.jpg";
const Rusia = () => {
  return (
    <div>
      <h1>Paramo de la rusia</h1>
      <p>
        Más de 119 000 hectáreas de 23 municipios de Boyacá y
        Santander hacen parte del páramo Guantiva-La Rusia, un complejo
        distribuido en las cuencas de los ríos Sogamoso, Chicamocha, Fonce y
        Suárez y con 85 lagunas rodeadas de musgos y frailejones. Según el
        Instituto Humboldt, este páramo es altamente biodiverso. <hr />  En sus terrenos
        han sido registradas más de 960 especies de flora y fauna: 690 de
        plantas, 80 de mamíferos, 130 de aves, 23 de anfibios y 24 de
        invertebrados.  “Alberga cerca del 13% de la flora de los páramos del
        país”.  <hr />  Por ser parte de un extenso corredor de páramo y bosque andino,
        Guantiva-La Rusia es considerado un área prioritaria de conservación por
        los parches de robles de las especies Quercus humboldtii y
        Colombobalanus excelsa que allí sobreviven, y por contar con 14 tipos de
        frailejones únicos, una de las cifras más altas en los páramos
        colombianos. Otra de sus mayores joyas naturales son los bosques de
        árboles colorados (Polylepis quadrijuga), una especie nativa de la
        cordillera Oriental de Colombia catalogada como de importancia ecológica
        y de conservación. Estos árboles asociados a los ecosistemas de alta
        montaña como el bosque altoandino y los páramos, miden entre seis y ocho
        metros de altura y cuentan con la capacidad de adaptarse a condiciones
        de frío y crecer sobre las matrices de pastizales de páramos. “Su
        distribución altitudinal oscila entre los 2800 y 3600 metros sobre el
        nivel del mar.  <hr /> Los tallos son de color rojo intenso, por lo cual se le
        denomina comúnmente como colorado. También presenta cascarillas en el
        tallo que se desprenden con facilidad para impedir que se adhieran
        plantas como bromelias, orquídeas y musgos”, asegura la Corporación
        Autónoma Regional de Boyacá (Corpoboyacá). Los colorados cuentan con
        hojas pequeñas cubiertas de resina y unas flores en racimo. La
        polinización y dispersión de semillas es llevada a cabo por el viento.
        Sin embargo, la belleza de esta especie endémica está en un alto
        peligro.
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_rusia} alt="" />
    </div>
  );
};

export default Rusia;
