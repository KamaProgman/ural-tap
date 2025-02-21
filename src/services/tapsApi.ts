import { ITaps } from "../types/taps";
import makeRequest from "./api"

export const fetchTaps = async (userId: number) => {
  try {
    const res = await makeRequest.get<ITaps>(`/taps?userId=${userId}`)

    return res.data
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const updateBalance = async (userId: number, balance: number) => {
  try {
    const res = await makeRequest.put(`/users/${userId}`, { balance: balance })

    return res
  } catch (error) {
    console.error(error);
    throw error
  }
}