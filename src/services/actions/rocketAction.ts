import axios from "axios";
const BASE_URL = "https://api.spacexdata.com/v4"

const getAllRockets = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const { data } = await axios.get(`${BASE_URL}/rockets`, config)
    return data
}

const rocketService = {
    getAllRockets
}

export default rocketService 