import axios from 'axios' 

const instance = axios.create({
  baseURL: 'https://react-my-burger-a68d0-default-rtdb.firebaseio.com/'
})

export default instance; 

