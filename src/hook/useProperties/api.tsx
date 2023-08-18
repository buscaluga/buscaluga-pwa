import { propertiesResponsePaginated } from "./mock";
import { PropertiesBody, PropertiesResponse } from "../../model/Property";
import { mockWrapper } from "../../util/mock";
import axios from "axios";

const API_URL = process.env.REACT_APP_PROPERTIES_API_URL;
const API_URL_PROPERTIES = `${API_URL}/properties`;

export async function fetchProperties(body: PropertiesBody) {
  const mock = await mockWrapper(propertiesResponsePaginated);
  if (mock) {
    if ((body.pageToken = "b")) {
      return mock[1];
    }
    if ((body.pageToken = "c")) {
      return mock[2];
    }
    
    return mock[0]
  }

  const response = await axios.post<PropertiesResponse>(
    API_URL_PROPERTIES,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}
