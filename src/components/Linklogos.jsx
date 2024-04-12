import React from "react";
import { IoBed } from "react-icons/io5";
import { IoAirplane } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";



const Linklogos = ({type}) => {
  return (
    <div className={`${type !== "list" ? "my-5 py-3" : "mt-5"}`}>
      <div className="flex items-center md:gap-8 h-10">
        <button className="focus:border-2 border-white rounded-3xl p-2 flex items-center gap-1">
          <IoBed />
          <span>
            <p>Stays</p>
          </span>
        </button>

        <button className="focus:border-2 border-white rounded-3xl p-2 flex items-center gap-1">
        <IoAirplane />
          <span>
            <p>Flights</p>
          </span>
        </button>

        <button className="focus:border-2 border-white rounded-3xl p-2 flex items-center gap-1">
        <FaCar />
          <span>
            <p>Car rentals</p>
          </span>
        </button>
        
        <button className="focus:border-2 border-white rounded-3xl p-2 flex items-center gap-1">
        <FaMapLocationDot />
          <span>
            <p>Attractions</p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Linklogos;
