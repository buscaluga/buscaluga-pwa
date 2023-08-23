import { propertiesResponsePaginated } from "./mock";
import {
  PropertiesBody,
  PropertiesParams,
  PropertiesResponse,
} from "../../model/Property";
import axios from "axios";

const API_URL = process.env.REACT_APP_PROPERTIES_API_URL;
const API_URL_PROPERTIES = `${API_URL}/properties`;

export async function fetchProperties(
  params: PropertiesParams,
  body: PropertiesBody
) {
  const response = await axios.post<PropertiesResponse>(
    API_URL_PROPERTIES,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
      params,
    }
  );

  return response.data;
}
