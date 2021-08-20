import React from "react";
import img_cruz_verde from "../assets/3.jpg";
const Cruzverde = () => {
  return (
    <div>
      <h1>Paramo de la cruz verde</h1>
      <p>
        El páramo Cruz Verde es un páramo ubicado al este del Distrito Capital
        de Bogotá y en la parte sureste del departamento de Cundinamarca Es
        parte del mismo sistema que el páramo de Sumapaz.
        <hr />
        El páramo de Cruz Verde se encuentra entre los 3.300 y los 3.700 metros
        sobre el nivel del mar. Se ubica en el oriente de Bogotá y ocupa el
        territorio de la zona capitalina y una pequeña parte de los municipios
        de Chipak, Ubak, Jocchi y La Calera. En su territorio nacieron tanto el
        río Fucha que discurre por la sabana de Bogotá como el río Palma que
        baña la ciudad de Ubak. Posee bosques secundarios y afloramientos
        geológicos de rocas sedimentarias del Cretácico y Terciario. Tiene una
        amplia variedad de frailejones y helechos. También se encuentra el
        Parque Ecológico Mataretonda en su territorio. Presenta diferentes
        humedales interconectados.
        <br />
        A pesar de que se trata de una zona ecológica protegida, tanto la
        deforestación por quema y tala como las actividades agrícolas y de
        ganadería amenazan con desertificarlo. ​ Del mismo modo, desde hace
        siglos se extrae de sus terrenos material para la construcción, lo cual
        ha transformado su morfología y ha afectado su biodiversidad
        <hr />
        El Páramo Cruz Verde Sumapaz alberga una maravillosa biodiversidad: Se
        han identificado al menos 1166 plantas, 18 anfibios, 83 mamíferos y 208
        aves. Igualmente se destacan especies endémicas de plantas 2 y aves 6,
        es decir, estas especies se encuentran exclusivamente en este lugar.
        Este territorio ambiental es una reserva estrechamente relacionada con
        los eventos climáticos y las dinámicas biológicas entre
        Bogotá-Ciudad-Región y la región Orinoquía y Amazonía.
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos img_paramos" src={img_cruz_verde} alt="" />
    </div>
  );
};

export default Cruzverde;
