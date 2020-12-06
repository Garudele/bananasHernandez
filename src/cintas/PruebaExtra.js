import React, { Fragment, useState } from "react";


const Reportes = () => {
  
        let [cintas]=useState ([{
            "id_cinta": "1",
            "color": "Amarilla",
            "codigo":" #FAE619"
        },
        {
            "id_cinta": "2",
            "color": "Negra",
            "codigo": "#010101"
        },
        {
            "id_cinta": "3",
            "color": "Roja",
            "codigo": "#900100"
        },
        {
            "id_cinta": "4",
            "color": "Gris",
            "codigo": "#919191"
        },
        {
            "id_cinta": "5",
            "color": "Verde",
            "codigo": "#36E058"
        },
        {
            "id_cinta": "6",
            "color": "Lila",
            "codigo": "#8100b1"
        },
        {
            "id_cinta": "7",
            "color": "Cafe",
            "codigo": "#5b4200"
        },
        {
            "id_cinta": "8",
            "color": "Naranja",
            "codigo": "#F0B816"
        },
        {
            "id_cinta": "9",
            "color": "Azul",
            "codigo": "#3946ED"
        },
        {
            "id_cinta": "10",
            "color": "Blanca",
            "codigo": "#fdfdfd"
        }]);

        if (cintas.id_cinta === 1) {        
          
              return {
                ...cintas,
                cintas: cintas.filter((cinta
                    
                    ) => cinta.id_cinta !== 1), 
              }
              
            }
        console.log(cintas)

    

    return (
        <Fragment>
            <h1>afdsfasd</h1>
        </Fragment>
    )
}

export default Reportes;