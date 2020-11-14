import { concat } from "lodash-es";

export default function reducer(state = {
    cintas: [],
    cintasOrdenadas: [],
    patronCintas:[],
    c:0,   
  }, action) {
    
    if(action.type=== 'CARGAR'){
      console.log(action.respuesta)
      return{
        ...state,
        cintas: concat(action.respuesta) 
      }
    }

    if (action.type === 'CINTA_ORDENADA') {
    let pivCont=state.c+1;
  
      return {
        ...state,
        cintasOrdenadas: state.cintasOrdenadas.concat(action.cinta),
        cintas: state.cintas.filter((cinta) => cinta.id_cinta !== action.cinta.id_cinta),
        c:pivCont,
        patronCintas:state.patronCintas.concat({position:pivCont,params:action.cinta}),
        
  
      }
      
    }
    if (action.type === 'REGRESAR_CINTA') {
      alert(JSON.stringify(action.cinta))
      alert(JSON.stringify(state.cintas))
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