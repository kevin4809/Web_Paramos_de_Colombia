import React from "react";
import img_rechiniga from "../assets/9.jpg";
const Rechiniga = () => {
  return (
    <div>
      <h1>Paramo de rechiniga</h1>

      <p>
        es el pico más alto de la Cordillera Oriental, en la Cordillera de los
        Andes de Colombia. También se llama Ritak'uwa, un nombre antiguo de los
        indígenas U'wa que viven en las tierras bajas del Parque Nacional Sierra
        Nevada del Cocuy y Güicán, donde se encuentra el Ritacuba Blanco. Se
        accede a la cumbre desde el oeste a través del pueblo de El Cocuy, el
        pueblo de Güicán y el caserío de Las Cabañas. La caminata es bastante
        fácil, pero el clima no es confiable y se debe cruzar un glaciar. Debido
        al calentamiento global, su glaciar se está derritiendo a tasas muy
        altas, retrocediendo 25 mts lineales por año; lo mismo está sucediendo a
        velocidades asombrosas con todas las demás montañas tropicales cubiertas
        de nieve en Colombia. En 1950, el glaciar Ritacuba Blanco se extendía
        hasta los 4.100 metros (13.500 pies) sobre el nivel del mar; en enero de
        2007 su punto más bajo fue a 4.500 metros (14.800 pies) sobre el nivel
        del mar. Si esta tasa de derretimiento continúa, se espera que el
        glaciar desaparezca antes de 2055.
      </p>

      <img className="rounded mx-auto d-block img-fluid img_paramos img_paramos" src={img_rechiniga} alt="" />
    </div>
  );
};

export default Rechiniga;
