import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries/queris";

const All: React.FC = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>All Products</h1>
      <div>
        {data?.products?.map((product: { id: number; name: string }) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>ID: {product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
