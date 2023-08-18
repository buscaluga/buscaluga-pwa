import { SuggestionsResponse } from "../../model/SearchSuggestion";

// /suggestions?city=copa&pageToken=
export const cities: SuggestionsResponse = {
  suggestions: ["Copa do Sul - SC"],
  nextPageToken: "abcd",
};

// /suggestions?neighborhood=copa&pageToken=
export const neighborhoods: SuggestionsResponse = {
  suggestions: [{ name: "Copacabana", city: "Rio de Janeiro - RJ" }],
  nextPageToken: "abcd",
};

// /suggestions?street=copa&pageToken=
export const streets: SuggestionsResponse = {
  suggestions: [
    {
      name: "Avenida Nossa Senhora de Copacabana",
      neightborhood: "Copacabana, Rio de Janeiro - RJ",
    },
  ],
  nextPageToken: "abcd",
};
