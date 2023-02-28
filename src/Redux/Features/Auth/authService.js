import axios from 'axios';
import { CONSUMER_API } from '../../../Utilities/APIs/APIs';

// Register user

async function consumerRegister(consumerData) {

    const response = await axios.post(CONSUMER_API + 'register', consumerData);

    if (response.data) {
        localStorage.setItem('consumer', JSON.stringify(response.data))
    }

    return response.data

}

async function consumerLogin(consumerData) {

    const response = await axios.post(CONSUMER_API + 'login/', consumerData);

    if (response.data) {
        localStorage.setItem('consumer', JSON.stringify(response.data))
    }

    return response.data

}


const logout = () => {
    localStorage.removeItem('consumer')
}

const authService = {
    consumerRegister,
    consumerLogin,
    logout
}

export default authService;