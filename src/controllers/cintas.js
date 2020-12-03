import axios from "axios";


class cintas {

    static async getDataFinca(){
        const baseUrl = "http://localhost/BananasHernandez/cintas/origen.php";
        let data=await axios.get(baseUrl);
        return(data.data);
    }
    static async getDataColor(){
        const baseUrl = "http://localhost/BananasHernandez/cintas/semanaCinta.php";
        let data=await axios.get(baseUrl);
        
        return(data.data);
    }
    static async getDataRegistrosPlantaciones(){
        const baseUrl = "http://localhost/BananasHernandez/cintas/plantaciones.php";
        let data=await axios.get(baseUrl);
        return(data.data);
       
        

    }     

}

export default cintas;