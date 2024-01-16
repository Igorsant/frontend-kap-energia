import axios from "axios";
import { Inputs } from "../checkout/Checkout";

axios.defaults.baseURL = `http://${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}`

export const sendForm = async (inputs: Inputs) => {
  const responseGTSolar = new Promise(async (resolve, _reject) => {
    const data = await axios.post('/gtsolar', inputs)
    resolve(data.data)
  })
  const responseSouEnergy = new Promise(async (resolve, _reject) => {
    const data = await axios.post('/souenergy', inputs)
    resolve(data.data)
  })

  return Promise.all([responseGTSolar, responseSouEnergy])
}
