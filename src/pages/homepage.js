import React from "react";
import Listgroup from "../components/Listgroup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sumapaz from "./Sumapaz";
import Cruzverde from "./Cruzverde";
import Lashermosas from "./Lashermosas";
import Pisba from "./Pisba";
import "../components/Etilos.css";
import Saturban from "./Saturban";
import Elalmorzadero from "./Elalmorzadero";
import Rusia from "./Rusia";
import Rechiniga from "./Rechiniga";
import Barragan from "./Barragan";
import Citara from "./Farallones";
import Totabijagual from "./Totabijagual";
import Chingaza from "./Chingaza";
import Pajablanca from "./PajaBlanca";
import Guerrero from "./Guerrero";
import Santarosa from "./Santarosa";
import Yacuanquer from "./Yaquanquer";
import Guasca from "./Guasca";
import Belmira from "./Belmira";
import Santaines from "./Santaines";
import Duende from "./Duende";
import Alfonbras from "./Alfonbras";
import Tatama from "./Tatama";
import Oceta from "./Oceta";
import Tinajas from "./Tinajas";
import Plateado from "./Plateado";
import Sol from "./Sol";
import Sonson from "./Sonson";
import Baldias from "./Baldias";
import Nudo from "./Nudo";





function homePage() {
  return (
    <div>
      <Router>
        <h1 className="titulo_principal">Paramos de Colombia</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
            
              <Listgroup />
            </div>
            <div className="col">
              <Switch>
                <Route path="/sumapaz" exact>
                  <Sumapaz />
                  <listgroup/>
                </Route>
                <Route path="/cruzverde">
                  <Cruzverde />
                </Route>
                <Route path="/lashermosas">
                  <Lashermosas />
                </Route>
                <Route path="/pisba">
                  <Pisba />
                </Route>
                <Route path="/saturban">
                  <Saturban />
                </Route>
                <Route path="/paramo_el_almorzadero">
                  <Elalmorzadero />
                </Route>
                <Route path="/paramo_de_la_rusia">
                  <Rusia />
                </Route>
                <Route path="/paramo_de_rechiniga">
                  <Rechiniga />
                </Route>
                <Route path="/paramo_de_barragan">
                  <Barragan />
                </Route>
                <Route path="/paramos_farallones_de_citara">
                  <Citara />
                </Route>
                <Route path="/paramo_totabigual">
                  <Totabijagual />
                </Route>
                <Route path="/paramo_chingaza">
                  <Chingaza />
                </Route>
                <Route path="/paramo_de_la_paja_blanca">
                  <Pajablanca />
                </Route>
                <Route path="/paramo_de_guerrero">
                  <Guerrero />
                </Route>
                <Route path="/paramillo_de_santarosa">
                  <Santarosa />
                </Route>
                <Route path="/paramo_de_yacuanquer">
                  <Yacuanquer />
                </Route>
                <Route path="/paramo_de_guasca">
                  <Guasca />
                </Route>
                <Route path="/paramo_de_belmira">
                  <Belmira />
                </Route>
                <Route path="/paramo_de_santa_ines">
                  <Santaines />
                </Route>
                <Route path="/paramo_del_duende">
                  <Duende />
                </Route>
                <Route path="/paramo_de_las_alfombras">
                  <Alfonbras />
                </Route>
                <Route path="/paramo_de_tatama">
                  <Tatama />
                </Route>
                <Route path="/paramo_oceta">
                  <Oceta />
                </Route>
                <Route path="/paramo_de_las_tinajas">
                  <Tinajas />
                </Route>
                <Route path="/paramo_cerro_plateado">
                  <Plateado />
                </Route>
                <Route path="/paramo_del_sol">
                  <Sol />
                </Route>
                <Route path="/paramo_de_sonson">
                  <Sonson />
                </Route>
                <Route path="/paramo_de_las_baldias">
                  <Baldias />
                </Route>
                <Route path="/Nudo_de_paramillo">
                  <Nudo />
                </Route>
                
                <Route path="/"></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default homePage;
