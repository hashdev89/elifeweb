import React, { useState } from 'react';

const GridSlider = () => {
  const cards = [
    { id: 1, title: 'Card 1', imageUrl: '/path/to/image1.jpg' },
    { id: 2, title: 'Card 2', imageUrl: '/path/to/image2.jpg' },
    { id: 3, title: 'Card 3', imageUrl: '/path/to/image3.jpg' },
    { id: 4, title: 'Card 4', imageUrl: '/path/to/image4.jpg' },
    // Add more cards as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`bg-white rounded-lg p-4 shadow-md ${
            index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'
          } transition-opacity duration-300`}
        >
          <img src={card.imageUrl} alt={card.title} className="w-full h-32 object-cover" />
          <h3 className="text-xl font-semibold">{card.title}</h3>
        </div>
      ))}
      <div className="flex justify-center mt-4 col-span-4 md:col-span-2 lg:col-span-4">
        <button
          onClick={prevSlide}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2"
        >
          Previous
        </button>
        <button onClick={nextSlide} className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default GridSlider;