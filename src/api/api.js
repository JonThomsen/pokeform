import axios from "axios";

const API_TOKEN = "token=7s5txcu909kwc48wookgw8g00occokk";
const BASE_URL = "https://coletum.com/api/";
const QUERY = `graphql?query={form_structure(formId:6950)
  {label,componentId,type,helpBlock,order,components}}`;

export function fetchForm() {
  const url = `${BASE_URL}${QUERY}&${API_TOKEN}`;
  const response = axios.get(url);

  return {
    type: "FETCH_FORM",
    payload: response
  };
}
