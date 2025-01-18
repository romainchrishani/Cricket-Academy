import React from 'react';
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const InstructorsCard = ({ staff }) => {
  const { name, image, designation, description } = staff;

  return (
    <div className="card card-compact max-w-md shadow-xl">
      <figure className="flex justify-center p-4">
        <img
          className="w-96 h-96 object-cover rounded-lg hover:grayscale transition-all duration-300"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body p-6 text-gray-800 dark:text-white">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">{designation}</p>
        <p className="text-base mb-4">{description}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
