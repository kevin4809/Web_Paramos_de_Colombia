import React from "react";
import img_barragan from "../assets/10.jpeg";
const Barragan = () => {
  return (
    <div>
      <h1>Paramo de barragan</h1>
      <p>
        Resultado El páramo Chilí – Barragán cuenta con un área de 80.708
        hectáreas y se encuentra localizado en la jurisdicción de los
        departamentos de Quindío, Tolima y Valle del Cauca. Sevilla es el único
        municipio del Valle del Cauca que hace parte de este páramo y tiene
        además, algunas hectáreas en el Páramo de las Hermosas. En Sevilla Valle
        se encuentra la reserva de la sociedad civil «El Valle de los
        Frailejones» con 6.247 hectáreas, que albergan hermosas lagunas y
        montañas tupidas de frailejones, pajonales y musgos; precisamente está
        vegetación es la que le permite ser una invaluable despensa de agua para
        los tres departamentos, beneficiando a más de 3’000.000 de habitantes
        con el preciado líquido. Desde Sevilla, se llega saliendo por el barrio
        Las Margaritas, generalmente en Jeep Willyz por lo exigente de la vía;
        son cerca de 60 kms por carretera destapada con grandes pendientes y
        peñascos, pero con unos paisajes sin igual que a medida que se gana
        altura van cambiando su vegetación y poco a poco, después de pasar La
        Unión, donde se encuentran los ríos Tibí y Los Osos, para formar el Río
        Bugalagrande, se empiezan a ver Palmas de Cera, cascadas y grandes
        montañas con la vegetación típica del páramo; hasta llegar después de 4
        horas, al predio La Mina, donde se encuentra el guardabosques y guía de
        la Reserva Natural de la Sociedad Civil Valle de la Frailejones, a unos
        3600 mtsnm.
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_barragan} alt="" />
    </div>
  );
};

export default Barragan;
