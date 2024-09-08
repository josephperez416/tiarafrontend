import { createContext, useState } from 'react';

export const ServiceDetailsContext = createContext();

function ServiceDetailsProvider({ children }) {

  const reviews = [
    { profileImage: 'https://via.placeholder.com/56', rating: 4.5, name: 'John Doe', date: '2023-08-21', review: 'This is a fantastic product! The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.' },
    { profileImage: 'https://via.placeholder.com/56', rating: 5, name: 'Jane Smith', date: '2023-08-20', review: 'Incredible experience! The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.' },
    { profileImage: 'https://via.placeholder.com/56', rating: 4, name: 'Mike Johnson', date: '2023-08-19', review: 'Pretty good, but room for improvement. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.' },
    { profileImage: 'https://via.placeholder.com/56', rating: 3.5, name: 'Lisa Williams', date: '2023-08-18', review: 'Average product. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.' },
    { profileImage: 'https://via.placeholder.com/56', rating: 2, name: 'Bob Brown', date: '2023-08-17', review: 'Not what I expected. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.' },
  ];
  
  const images = [
    'https://via.placeholder.com/1000x700',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x650',
    'https://via.placeholder.com/800x840',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/500x500',
  ];
  
  const description = 'Mariachi San Luis is a vibrant mariachi band known for their energetic' + 
    'performances and colorful costumes, blending traditional Mexican folk music with modern pop influences.' +
    'Their lively shows, complete with intricate guitar solos and passionate vocal harmonies, have made them a' +
    'favorite at festivals and celebrations across the globe.';
  
  const locationHours = 
  {
    location : '1234 Mariachi Plaza, Los Angeles, CA 90001',
    hours : [
      'Monday: 9am - 5pm',
      'Tuesday: 9am - 5pm',
      'Wednesday: 9am - 5pm',
      'Thursday: 9am - 5pm',
    ]
  };
  
  
  const importantDetails = 
  {
    travel : '0-15 miles',
    minTime: '3 months',
    eventSize: '51-150 guests'
  }
  
  const offeredBy = 'Mariachi San Luis is was started childhood friends and musical prodigies,' + 
    'Carlos "El Maestro" Hernandez and Sofia "La Reina" Morales. ' +
    'Together, they have built the band from a local sensation into an internationally acclaimed act, ' +
    'combining their talents in business and artistry to manage and lead the ensemble.';
  
  const productsServices = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 5.49 },
    { name: 'Product 3', price: 7.99 },
  ];
  
  const cardDetails = {
    name: 'Mariachi San Luis',
    cityState: 'Los Angeles, CA',
    price: '$1,200,000',
    rating: 4.8,
    imageUrl: 'https://via.placeholder.com/1000x600'
  };

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <ServiceDetailsContext.Provider 
      value={{ 
        reviews, 
        images, 
        description, 
        locationHours, 
        importantDetails,
        offeredBy,
        productsServices,
        cardDetails,
        totalPrice,
        setTotalPrice}}>
      {children}
    </ServiceDetailsContext.Provider>
  );
}

export default ServiceDetailsProvider;