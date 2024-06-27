import React from 'react';

const CarDetail = () => {


  const car = {
    name: 'Toyota Camry',
    price: '$20,000',
    description: 'A reliable and fuel-efficient sedan perfect for daily commutes.'
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Car Details</h1>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">{car.name}</h2>
        <p className="text-lg">{car.price}</p>
        <p>{car.description}</p>
      </div>
    </div>

  );
};

export default CarDetail;
