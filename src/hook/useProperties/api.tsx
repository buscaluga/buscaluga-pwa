import propertiesMock from "./mock";
import { Property } from "../../model/Property";
import { mockWrapper } from "../../util/mock";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_PROPERTIES = `${API_URL}/properties`;

export interface PropertiesResponse {
  properties: Property[];
}

export async function fetchProperties(): Promise<PropertiesResponse> {
  const mock = await mockWrapper<Property[]>(propertiesMock)

  if (mock) {
    return { properties: mock }
  }

  const response = await fetch(API_URL_PROPERTIES);

  return response.json();
}