import React from "react";

const SmallCityCard = ({image, name}) => {
  return (
    <div className="w-4/12 h-60 overflow-hidden rounded-md myShadow relative">
      <img
        className="w-full h-full object-cover relative -z-10"
        src={image}
        alt="image"
      />
      <div className="absolute top-5 left-5 text-2xl font-bold tracking-wider text-slate-100">
        {name}
      </div>
    </div>
  );
};

export default SmallCityCard;
