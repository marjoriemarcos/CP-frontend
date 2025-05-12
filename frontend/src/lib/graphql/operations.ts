import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY_BY_ID = gql`
  query GetCountryById($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_CONTINENT = gql`
  query GetContinent {
    continents {
      id
      name
    }
  }
`;

export const ADD_CONTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const ADD_CONTINENT = gql`
  mutation AddContinent($data: NewContinentInput!) {
    addContinent(data: $data) {
      name
    }
  }
`;
