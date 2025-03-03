import React from 'react';

type MenuItemProps = {
  title: string;
  price: string;
  description: string;
};

const MenuItem = ({ title, price, description }: MenuItemProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-pink-400">{title}</h3>
        <span className="text-lg font-bold text-gray-800">{price}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      <hr className="border-t border-gray-200" />
    </div>
  );
};

export default MenuItem;
