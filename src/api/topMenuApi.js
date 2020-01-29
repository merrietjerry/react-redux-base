import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/top-menu";

export function getTopMenu() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

