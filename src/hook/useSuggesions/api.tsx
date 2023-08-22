import { cities, neighborhoods, streets } from "./mock";
import { delayMock, getPageTokenMock } from "../../util/mock";
import axios from "axios";
import {
  SuggestionParams,
  SuggestionsResponse,
} from "../../model/SearchSuggestion";

const API_URL = process.env.REACT_APP_PROPERTIES_API_URL;
const API_URL_SUGGESTIONS = `${API_URL}/suggestions`;

export async function fetchSuggestions(params: SuggestionParams) {
  const response = await axios.get<SuggestionsResponse>(API_URL_SUGGESTIONS, {
    params,
  });

  return response.data;
}

export async function fetchSuggestionsMock(
  params: SuggestionParams
): Promise<SuggestionsResponse> {
  const { index } = getPageTokenMock();

  if (params.term === "") {
    return { suggestions: [] };
  }

  if (params.location === "street") {
    return delayMock(streets[index]);
  }

  if (params.location === "neighborhood") {
    return delayMock(neighborhoods[index]);
  }

  return delayMock(cities[index]);
}
