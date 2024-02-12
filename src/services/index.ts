import axios from "axios";
import { Inputs } from "../pages/checkout";

axios.defaults.baseURL = `http://localhost:5000`;

type SouEnergyResponse = {
  distributor: string;
  data: {};
};

type GTSolarResponse = {
  distributor: string;
  data: {};
};

export const updateDefaultHeaders = (token: string) => {
  localStorage.setItem("auth", token);
};

export const searchSouEnergy = async (
  inputs: Inputs
): Promise<SouEnergyResponse> => {
  const responseSouEnergy = new Promise<SouEnergyResponse>(
    (resolve, reject) => {
      axios
        .post("/souenergy", inputs, {
          headers: {
            Authorization: localStorage.getItem('auth')
          }
        })
        .then((data) =>
          resolve({
            distributor: "Sou Energy",
            data: {
              ...data.data,
            },
          })
        )
        .catch((err) => reject(err));
    }
  );

  return responseSouEnergy;
};

export const searchGTSolar = async (
  inputs: Inputs
): Promise<GTSolarResponse> => {
  const responseGTSolar = new Promise<GTSolarResponse>((resolve, reject) => {
    axios
      .post("/gtsolar", inputs, {
        headers: {
          Authorization: localStorage.getItem('auth')
        }
      })
      .then((data) =>
        resolve({
          distributor: "GT Solar",
          data: {
            ...data.data,
          },
        })
      )
      .catch((err) => reject(err));
  });

  return responseGTSolar;
};

export const authRequest = (authorizationHeader: string): Promise<string> => {
  const authPromise = new Promise<string>((resolve, reject) => {
    axios
      .get("/auth", {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then((data) => resolve(data.data))
      .catch((err) => reject(err));
  });

  return authPromise;
};
