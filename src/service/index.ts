import axios from "axios";
import { Inputs } from "../checkout/Checkout";

axios.defaults.baseURL = "http://localhost:5000"

export const sendForm = async (inputs: Inputs) => {
  return axios.post('/', inputs).then(response => response.data)
}