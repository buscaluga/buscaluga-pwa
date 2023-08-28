import { SuggestionsResponse } from "../../model/SearchSuggestion";

// /suggestions?city=copa&pageToken=
export const cities: SuggestionsResponse[] = [
  {
    suggestions: [
      "Copa do Sul - SC",
      "Copa do Sul - SC 2",
      "Copa do Sul - SC 3",
    ],
    nextPageToken: "b",
  },
  {
    suggestions: [
      "Copa do Norte - BH",
      "Copa do Norte - BH 2",
      "Copa do Norte - BH 3",
    ],
    nextPageToken: "c",
  },
  {
    suggestions: [
      "Copa do Centro - DF",
      "Copa do Centro - DF 2",
      "Copa do Centro - DF 3",
    ],
  },
];

// /suggestions?neighborhood=copa&pageToken=
export const neighborhoods: SuggestionsResponse[] = [
  {
    suggestions: [
      { name: "Copacabana", city: "Rio de Janeiro - RJ" },
      { name: "Copacabana 2", city: "Rio de Janeiro - RJ" },
      { name: "Copacabana 3", city: "Rio de Janeiro - RJ" },
    ],
    nextPageToken: "b",
  },
  {
    suggestions: [
      { name: "Copacabana 4", city: "Rio de Janeiro - RJ" },
      { name: "Copacabana 5", city: "Rio de Janeiro - RJ" },
      { name: "Copacabana 6", city: "Rio de Janeiro - RJ" },
    ]
  },
];

// /suggestions?street=copa&pageToken=
export const streets: SuggestionsResponse[] = [
  {
    suggestions: [
      {
        name: "Avenida Nossa Senhora de Copacabana",
        neightborhood: "Copacabana, Rio de Janeiro - RJ",
      },
      {
        name: "Avenida Nossa Senhora de Copacabana 2",
        neightborhood: "Copacabana, Rio de Janeiro - RJ",
      },
      {
        name: "Avenida Nossa Senhora de Copacabana 3",
        neightborhood: "Copacabana, Rio de Janeiro - RJ",
      },
    ]
  },
];
