import { PropertiesBody, PropertiesResponse } from "../../model/Property";

// POST /properties

export const propertiesBody: PropertiesBody = {
  acquisitionType: "rent",
  location: {
    cities: ["Rio de Janeiro - RJ", "São Paulo - SP"],
    neighborhoods: [{ name: "Copacabana", city: "Rio de Janeiro - RJ" }],
    streets: [
      {
        name: "Avenida Nossa Senhora de Copacabana",
        neightborhood: "Copacabana, Rio de Janeiro - RJ",
      },
    ],
  },
  filter: {},
  sortBy: "more-relevant",
  pageToken: "abcd",
};

export const propertiesResponsePaginated: PropertiesResponse[] = [
  {
    properties: [
      {
        aquisitionType: "rent",
        rentFrequency: "monthly",
        bathroomQty: 1,
        bedroomQty: 2,
        parkingQty: 1,
        sizeArea: 32,
        price: {
          value: 180000,
          condominium: 25000,
          tax: 9800,
        },
        address: {
          state: "RJ",
          city: "Rio de Janeiro",
          neighborhood: "Copacabana",
          street: "Rua Barata Ribeiro",
        },
        source: {
          name: "ZAP",
          page: "https://www.amazon.com.br/Nintendo-Switch-Azul-Vermelho-Neon/dp/B07VGRJDFY",
        },
        images: [
          "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/d941bf7fd795eceef0cbe6b140c61464/apartamento-com-2-quartos-para-alugar-51m-no-copacabana-rio-de-janeiro.jpg",
        ],
      },
      {
        aquisitionType: "rent",
        bathroomQty: 1,
        bedroomQty: 2,
        parkingQty: 1,
        sizeArea: 32,
        images: [
          "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/d941bf7fd795eceef0cbe6b140c61464/apartamento-com-2-quartos-para-alugar-51m-no-copacabana-rio-de-janeiro.jpg",
        ],
        price: {
          value: 180000,
          condominium: 25000,
          tax: 9800,
        },
        address: {
          state: "RJ",
          city: "Rio de Janeiro",
          neighborhood: "Copacabana",
          street: "Rua Barata Ribeiro",
        },
        source: {
          name: "ZAP",

          page: "https://www.amazon.com.br/Nintendo-Switch-Azul-Vermelho-Neon/dp/B07VGRJDFY",
        },
      },
    ],
    nextPageToken: "b",
  },
  {
    properties: [
      {
        aquisitionType: "rent",
        rentFrequency: "monthly",
        bathroomQty: 1,
        bedroomQty: 2,
        parkingQty: 1,
        sizeArea: 32,
        price: {
          value: 180000,
          condominium: 25000,
          tax: 9800,
        },
        address: {
          state: "RJ",
          city: "Rio de Janeiro",
          neighborhood: "Copacabana",
          street: "Rua Barata Ribeiro",
        },
        source: {
          name: "ZAP",
          page: "https://www.amazon.com.br/Nintendo-Switch-Azul-Vermelho-Neon/dp/B07VGRJDFY",
        },
        images: [
          "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/d941bf7fd795eceef0cbe6b140c61464/apartamento-com-2-quartos-para-alugar-51m-no-copacabana-rio-de-janeiro.jpg",
        ],
      },
      {
        aquisitionType: "rent",
        bathroomQty: 1,
        bedroomQty: 2,
        parkingQty: 1,
        sizeArea: 32,
        images: [
          "https://resizedimgs.zapimoveis.com.br/fit-in/800x360/named.images.sp/d941bf7fd795eceef0cbe6b140c61464/apartamento-com-2-quartos-para-alugar-51m-no-copacabana-rio-de-janeiro.jpg",
        ],
        price: {
          value: 180000,
          condominium: 25000,
          tax: 9800,
        },
        address: {
          state: "RJ",
          city: "Rio de Janeiro",
          neighborhood: "Copacabana",
          street: "Rua Barata Ribeiro",
        },
        source: {
          name: "ZAP",

          page: "https://www.amazon.com.br/Nintendo-Switch-Azul-Vermelho-Neon/dp/B07VGRJDFY",
        },
      },
    ],
  },
];
