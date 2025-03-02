import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries/queris";
import ProductCard from "@/components/product-card";
import { Product } from "./types";

const All: React.FC = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-600 rounded-md shadow-md w-fit">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="mx-auto pt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Products</h1>
      
      {/* Left-aligned product list */}
      <div className="grid grid-cols-3 gap-6 ">
        {data?.products?.map((product: Product) => (
          <ProductCard key={product.id} name={product.name} img={product.images[0]} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default All;
