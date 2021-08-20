import React from "react";
import img_guerrero from "../assets/15.jpg";
const Guerrero = () => {
  return (
    <div>
      <h1>Paramo de guerrero</h1>
      <p>
        El complejo de Guerrero se ubica en el norte de Cundinamarca y
        comprende, entre otros, los cerros Socotá, Santuario y Colorado, los
        páramos Napa, Alto, Guargüa y Laguna Verde, los altos de La Mina y El
        Muchacho y la cuchilla El Tablazo. El complejo se ubica hacia las zonas
        altas de los municipios de Carmen de Carupa, Tausa, Zipaquirá,
        Subachoque, Cogua, Pacho, San Cayetano y Susa, principalmente. La
        autoridad ambiental de la zona es la Corporación Autónoma Regional –CAR.
        Está en jurisdicción de dieciséis municipios, sin embargo sólo ocho
        municipios tienen una extensión por encima del 1%; Carmen de Carupa es
        el municipio con mayor área dentro del páramo: ocupa 9944 hectáreas, que
        corresponden al 23%; le siguen Tausa, con el 22%, Zipaquirá, con el
        15,5%, y Subachoque, con el 11,8%.
        <hr />
        Se encuentra ubicado entre los 3200 y los 3780 metros sobre el nivel del
        mar (msmm). Este páramo constituye uno de los mayores ensanchamientos y
        elevaciones del Eje Occidental de la Cordillera Oriental, a la latitud
        del Altiplano de Bogotá-Ubaté. Está compuesto por localidades como
        cerros Socotá, Santuario y Colorado, páramos Napa, Alto, Guargua y
        laguna Verde; los altos de La Mina y El Muchacho y cuchilla El Tablazo.
        El complejo se ubica hacia las zonas altas de los municipios de Carmen
        de Carupa, Tausa, Zipaquirá, Subachoque, Cogua, Pacho, San Cayetano y
        Susa en Cundinamarca.
        <hr />
        En esta zona nacieron varias subcuencas, que abastecen al río Bogotá,
        que a su vez aporta el 15% del agua de la capital. También suministra
        algunos acueductos locales y municipales para abastecer de agua a las
        familias que viven en Páramo y otras en ciudades cercanas. Guerrero es
        una de las principales zonas productoras de papa y leche del país. Estos
        productos y sus derivados se distribuyen a pueblos y ciudades cercanas,
        como Bogotá, Bucaramanga, Cali y todo el territorio nacional. Sin
        embargo, dado que las actividades agrícolas (principalmente cultivos de
        papa) y la ganadería se han desarrollado y cambiado históricamente el
        territorio, este complejo es un área altamente transformada. Una de las
        formas históricas de adquisición de tierras muestra que los agricultores
        de la zona se vieron inicialmente obligados a trasladarse a estos
        espacios "periféricos" para ganarse la vida;
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_guerrero} alt="" />
    </div>
  );
};

export default Guerrero;
