import React from 'react';

interface ProductCardProps {
  name: string;
  img: string;
  price:number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, img ,price}) => {
  return (
    <div className="bg-white h-[444px] w-[386px]  hover:shadow-lg hover:border overflow-hidden transition-transform hover:scale-105 duration-300 ">
      <div className=' p-4 h-3/4'>
        <img src={img} alt={name} className="w-full h-full object-fit bg-center" />
      </div>
      <div className="p-4 h-1/4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
        <p>${price}</p>
      </div>

    </div>
  );
};

export default ProductCard;
