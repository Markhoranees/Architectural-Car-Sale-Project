import React from 'react';
import ListItem from '../Components/ListItem';

const Listing = () => {
  // This is just a placeholder, in real application you'd fetch and display a list of cars
  const cars = [
    { id: 1, name: 'Toyota Camry', price: '$20,000' },
    { id: 2, name: 'Honda Accord', price: '$22,000' },
    { id: 3, name: 'Ford Mustang', price: '$25,000' }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Car Listings</h1>
      <ul>
        {cars.map(car => (
          <ListItem item={car}/>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
