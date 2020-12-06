import axios from "axios";


class cintas {

    static async getDataFinca(){
        const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/origen.php";
        let data=await axios.get(baseUrl);
        return(data.data);
    }
    static async getDataColor(){
        const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/semanaCinta.php";
        let data=await axios.get(baseUrl);
        
        return(data.data);
    }
    static async getDataRegistrosPlantaciones(){
        const baseUrl = "http://bananashernandez.com/controlcintas/APICintas/plantaciones.php";
        let data=await axios.get(baseUrl);
        return(data.data);
              
 
    }     

}

export default cintas;