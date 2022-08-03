import axios from "axios";

// Cria uma nova instancia do axios para ser utilizadas nas requisições
const instance = axios.create({
  baseURL: process.env.IG_API_URL,
});

export default instance;
