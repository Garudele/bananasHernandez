import axios from "axios";


class cintas {

    static async getData(){
        const baseUrl = "http://localhost/BananasHernandez/cintas/origen.php";
        let data=await axios.get(baseUrl);
        return(data.data);
    }

}

export default cintas;