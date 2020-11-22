import { concat } from "lodash-es";

export default function reducer(state = {
    cintas: [{"id_cinta":"1","color":"Amarilla","codigo":"#fff60f"},{"id_cinta":"2","color":"Negra","codigo":"#010101"},{"id_cinta":"3","color":"Roja","codigo":"#900100"},{"id_cinta":"4","color":"Gris","codigo":"#919191"},{"id_cinta":"5","color":"Verde","codigo":"#008436"},{"id_cinta":"6","color":"Lila","codigo":"#8100b1"},{"id_cinta":"7","color":"Cafe","codigo":"#5b4200"},{"id_cinta":"8","color":"Naranja","codigo":"#fe7c00"},{"id_cinta":"9","color":"Azul","codigo":"#0700e7"},{"id_cinta":"10","color":"Blanca","codigo":"#fdfdfd"}],
    cintasOrdenadas: [],
    patronCintas:[],
    cinta:[],
    c:0,   
  }, action) {
    
    // if(action.type=== 'CARGAR'){
      
    //   return{
    //     ...state,
    //     cintas: concat(action.respuesta) 
    //   }
    // }

    if (action.type === 'CINTA_ORDENADA') {
    let pivCont=state.c+1;
  
      return {
        ...state,
        cintasOrdenadas: state.cintasOrdenadas.concat(action.cinta),
        cintas: state.cintas.filter((cinta) => cinta.id_cinta !== action.cinta.id_cinta),
        c:pivCont,
        patronCintas:state.patronCintas.concat({position:pivCont,params:action.cinta}),       
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
        cintasOrdenadas: [],
        patronCintas:[]
      }
     
    }
   

    return state;
  }