import axios from "axios";
import { Inputs } from "../checkout/Checkout";

axios.defaults.baseURL = `http://localhost:5000`

type SouEnergyResponse = {
  distributor: string;
  data: {
    "CABO SOLAR PRETO:": string
    "CABO SOLAR VERMELHO:": string
    "CONECTOR MC4:": string
    "INVERSOR:": string
    "PAINEL FOTOVOLTAICO:": string
    "preco:": string
  }
}

type GTSolarResponse = {
  distributor: string;
  data: {}
}

export const searchSouEnergy = async (inputs: Inputs): Promise<SouEnergyResponse> => {
  const responseSouEnergy = new Promise<SouEnergyResponse>(async (resolve, _reject) => {
    const response = await axios.post('/souenergy', inputs)
    resolve({
      distributor: 'Sou Energy',
      data: {
        ...response.data
      }
    })
  })

  return responseSouEnergy
}

export const searchGTSolar = async (inputs: Inputs): Promise<GTSolarResponse> => {
  const responseGTSolar = new Promise<GTSolarResponse>(async (resolve, _reject) => {
    const response = await axios.post('/gtsolar', inputs)
    resolve({
      distributor: 'GT Solar',
      data: {
        ...response.data
      }
    })
  })

  return responseGTSolar
}
