import React from "react";
import img_santaines from "../assets/20.jpg";
const Santaines = () => {
  return (
    <div>
      <h1>Paramo de santa ines</h1>
      <p>
        Sistema de Páramos y Bosques Altoandinos del Noroccidente Medio
        Antioqueño: 42.600 hectáreas de un territorio rico en agua. En lo más
        alto, a 3.350 metros, queda el páramo de Belmira (Santa Inés), la
        fábrica de agua del Valle de Aburrá.
        <hr />
        Allí nace el 70 por ciento del líquido que consumen los 3,5 millones de
        habitantes de esa región y las más de 35.000 personas que viven en los
        municipios aledaños. Es un sistema que aún conserva importantes
        poblaciones vegetales y animales representativos de los ecosistemas de
        alta montaña y resulta estratégico por la oferta ambiental de agua que
        beneficia a aproximadamente 64.000 habitantes de las zonas rurales de
        once municipios, y 980.000 habitantes del área metropolitana del Valle
        de Aburrá. El páramo se llama Santa Inés por la quebrada que nace en su
        territorio. En marzo de 2016 el gobierno delimitó este ecosistema.
        <br/>
        Y se supone que desde entonces quedaron prohibidas todas las
        actividades económicas que podrían hacerle daño. Este se extiende en
        11.100 hectáreas sobre el territorio de Belmira, San José de la Montaña,
        Entrerríos, San Pedro de los Milagros, San Andrés de Cuerquia,
        Sabanalarga, Liborina, Olaya, San Jerónimo y Sopetrán. El páramo surte
        al embalse Riogrande II, el espejo de agua más grande de Antioquia y el
        único de uso compartido que posee Empresas Públicas de Medellín (EPM) en
        la región, es decir, que sirve para generar energía y suministrar agua
        potable. Sus aguas van a dar a la central La Tasajera, que aporta 306
        megavatios al Sistema Interconectado Nacional y que se suma a los 405
        megavatios de Porce y Guatapé (596 megavatios).
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_santaines} alt="" />
    </div>
  );
};

export default Santaines;

