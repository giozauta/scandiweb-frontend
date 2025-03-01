import { gql } from "@apollo/client";

// Define the GraphQL query
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
      id
      in_stock
    }
  }
`;