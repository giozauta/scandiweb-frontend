import { gql } from "@apollo/client";

// Define the GraphQL query
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      in_stock
      description
      category_id
      brand
      category
      images
      price
    }
  }
`;

export const GET_TECH_PRODUCTS = gql`
  query GetTechProducts {
    products(category: "tech") {
      id
      name
      in_stock
      description
      category_id
      brand
      category
      images
      price
    }
  }
`;


export const GET_CLOTHES_PRODUCTS = gql`
  query GetTechProducts {
    products(category: "clothes") {
      id
      name
      in_stock
      description
      category_id
      brand
      category
      images
      price
    }
  }
`;
