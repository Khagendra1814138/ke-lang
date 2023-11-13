import React from "react";

import "./Instruments.css";

//Images Imports
import Tamborine from "../../Images/otherInstruments/tamborine.png";
import keSangla from "../../Images/otherInstruments/keSangla.png";
import Jhympta2 from "../../Images/otherInstruments/Jhympta2.png";

export const OtherInstrumentsPage = () => {

    return (
        <div className="instrumentsPage">
            <header className="diagonalHeader">Instruments</header>

            <section className="secOverflowHidden">
                <image className="purpleBg" style={{backgroundImage: `url(${Tamborine})`}}>
                </image>
                <p className="purpleBgParahraph"> 
                    <h2><span>TAMORINE</span></h2>
                    Although not traditional limbu instrument, the tamorine has been recently adapted and played by the girls during the chyabrung performance. Its not commonly played and its normally played around Taplejung region.
                </p>
            </section>

            <section className="secOverflowHidden">
                <image className="purpleBg" style={{backgroundImage: `url(${Jhympta2})`}}>
                </image>
                <p className="purpleBgParahraph"> 
                    <h2><span>JHYMPTA</span></h2>
                    Although not traditional limbu instrument, the tamorine has been recently adapted and played by the girls during the chyabrung performance. Its not commonly played and its normally played around Taplejung region.
                </p>
            </section>

            <section className="secOverflowHidden">
                <image className="purpleBg" style={{backgroundImage: `url(${keSangla})`}}>
                </image>
                <p className="purpleBgParahraph"> 
                    <h2><span>KE-SANGLA</span></h2>
                    Although not traditional limbu instrument, the tamorine has been recently adapted and played by the girls during the chyabrung performance. Its not commonly played and its normally played around Taplejung region.
                </p>
            </section>

        </div>
    );
}