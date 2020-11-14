import axios from "axios";


class cintas {

    static async getData(){
        const baseUrl = "http://localhost/bananashernandez/cintas/";
        let data=await axios.get(baseUrl);
        return(data.data);
    }

}

export default cintas;