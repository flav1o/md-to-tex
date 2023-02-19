import axios from "axios";
import { ENV } from "~/config/env";

const HTTP_CLIENT = axios.create({
  baseUrl: ENV.BASE_URL,
});

export { HTTP_CLIENT };
