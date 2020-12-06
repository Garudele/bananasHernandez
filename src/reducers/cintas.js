import { concat } from "lodash-es";

export default function reducer(state = {
    cintas: [{
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
      "codigo": "#8A060F"
  },
  {
      "id_cinta": "4",
      "color": "Gris",
      "codigo": "#919191"
  },
  {
      "id_cinta": "5",
      "color": "Verde",
      "codigo": "#175E25"
  },
  {
      "id_cinta": "6",
      "color": "Lila",
      "codigo": "#82168A"
  },
  {
      "id_cinta": "7",
      "color": "Cafe",
      "codigo": "#5b4200"
  },
  {
      "id_cinta": "8",
      "color": "Naranja",
      "codigo": "#F0820F"
  },
  {
      "id_cinta": "9",
      "color": "Azul",
      "codigo": "#0E6DC6"
  },
  {
      "id_cinta": "10",
      "color": "Blanca",
      "codigo": "#fdfdfd"}]   
      
      ,

      cinta:[],  
  }, action) {
    
  

    if (action.type === 'CINTA_ORDENADA') {
    let pivCont=state.c+1;
  
      return {
        ...state,
        cintas: state.cintas.filter((cinta) => cinta.id_cinta !== action.cinta.id_cinta),     
        cinta: state.cinta.concat(action.cinta)
      }
      
    }
    if (action.type === 'REGRESAR_CINTA') {
     
      return {
        ...state,
        cintas: state.cintas.concat(action.cinta),
        cintasOrdenadas: state.cintasOrdenadas.filter((cinta) => cinta.id_cinta !== action.cinta.id_cinta)
      }
    }
  
  
    if(action.type === 'LIMPIAR'){
      return{
        ...state,
        cintas: concat(action.cintas),
        cinta:[],
        
      }
     
    }
   

    return state;
  }