import axios from "axios";
// import { Inputs } from "../checkout/Checkout";

axios.defaults.baseURL = `http://${import.meta.env.VITE_BACKEND_URL}:8080`

export const sendForm = async () => {
  // const responseGTSolar = new Promise(async (resolve, _reject) => {
  //   const data = await axios.post('/gtsolar', inputs)
  //   resolve(data.data)
  // })
  const getHelloWorld = new Promise(async (resolve, _reject) => {
    const data = await axios.get('/')
    resolve(data.data)
  })
  // const responseSouEnergy = new Promise(async (resolve, _reject) => {
  //   const data = await axios.post('/souenergy', inputs)
  //   resolve(data.data)
  // })

  return Promise.all([getHelloWorld])
}
