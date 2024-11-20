import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.127:9090", // Exemplo: http://192.168.0.10:8080/api
});

export const createClient = async (clientData: any) => {
  try {
    const response = await api.post("/clients", clientData);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao criar cliente:",
      error.response?.data || error.message
    );
    throw error;
  }
};
