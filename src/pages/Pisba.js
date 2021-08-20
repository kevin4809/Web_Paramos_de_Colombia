import React from "react";
import img_pisba from "../assets/5.jpg";
const Pisba = () => {
  return (
    <div>
      <h1>Paramo de pisba</h1>
      <p>
        El Parque Nacional Natural Páramo de Pisba se encuentra ubicado en la
        Cordillera Oriental en la Región Andina de los Andes en Colombia.
        Consiste en ecosistemas de montaña, como los bosques de niebla y páramo.
        Aporta a los ríos Pauto y Cravo Sur, además de poseer varias lagunas de
        origen glaciar. Su superficie forma parte del departamento de Boyacá.
        Los municipios más cercanos son Jericó, Socotá, Socha, Tasco y Mongua.
        <hr />
        El Parque Nacional Natural Pisba tiene una localización estratégica ya
        que es el punto de nacimiento de importantes ríos, quebradas y Lagunas.
        Constituye un área representativa de los ecosistemas de páramo,
        subpáramo y bosque altoandino del nororiente de Boyacá conformando el
        llamado corredor Biológico Tota-Pisba-Cocuy. Posee elementos únicos y de
        gran relevancia que realzan su importancia en el contexto de la
        conservación de la biodiversidad de la Cordillera Oriental, se
        encuentran especies endémicas de flora tan importantes a nivel local y
        con amplia distribución a nivel nacional. En su interior nacen
        importantes lagunas de alta montaña que albergan una gran diversidad de
        fauna (principalmente aves migratorias y nativas) y flora. Estos sitios
        son de gran importancia por constituirse como los nacimientos de la red
        hídrica de la región Desde el punto de vista histórico, el Parque
        Nacional Natural Pisba se caracteriza por que al interior se encuentra
        un trayecto del camino que le dio paso a la tropa libertadora hacia el
        interior del país, donde se libró la Batalla del Puente de Boyacá y le
        dio la libertad a nuestro país.
        <hr />A partir de 1810 varias juntas autonomistas e independentistas se
        crean en la Nueva Granada (actual Colombia) en lo que pasó a conocerse
        como Gritos independentistas. Sin embargo, retomado el poder en España
        por Fernando VII, este envió una expedición de reconquista en 1815. El
        virreinato reinstaurado castigó duramente a los criollos que
        participaron de los levantamientos (patriotas) consolidándose un régimen
        del terror al mando del virrey Juan de Sámano. Varios grupos patriotas
        sobrevivieron entre ellos Francisco de Paula Santander, bien como
        guerrillas, bien formando grandes ejércitos en zonas como los Llanos. En
        1819, un ejército proveniente de los llanos y comandado por Simón
        Bolívar y Francisco de Paula Santander, asciende la Cordillera Oriental
        por el Páramo de Pisba y derrota al ejército realista en las batallas
        del Pantano de Vargas y el Puente de Boyacá de esta manera se crea la
        Gran Colombia (hoy dividida en las repúblicas de Colombia, Ecuador,
        Panamá y Venezuela).
      </p>
      <img className="rounded mx-auto d-block img-fluid img_paramos" src={img_pisba} alt="" />
    </div>
  );
};

export default Pisba;
