import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/news";

export function getNews() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}


