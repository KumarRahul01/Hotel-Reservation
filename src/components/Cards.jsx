import React from "react";

const Cards = ({ image, name, location, star, comment, review }) => {
  return (
    <div className="w-72 h-80 rounded-lg overflow-hidden shadow-xl">
      <img className="w-full h-[65%]" src={image} alt="img" />
      <div className="p-3">
        <h1 className="text-lg font-medium tracking-wide">{name}</h1>
        <p className="text-[14px] pb-2 text-gray-500">{location}</p>
        <div className="flex items-center gap-2">
          <div className="p-1 bg-blue-800 text-white rounded-md text-sm">
            {star}
          </div>
          <p className="text-sm">
            {comment} . <span className="text-gray-500">{review}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
