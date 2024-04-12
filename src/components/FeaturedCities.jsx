import React from "react";
import BigCityCard from "./BigCityCard";
import delhi from "/assets/humayu.jpg";
import bangalore from "/assets/bangalore.jpg";
import mumbai from "/assets/mumbai.jpg";
import chennai from "/assets/chennai.jpg";
import hyd from "/assets/hyd.jpg";
import SmallCityCard from "./SmallCityCard";

const FeaturedCities = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-2xl font-bold">Trending destinations</h1>
        <p className="mt-2">Most popular choices for travelers from India</p>
        <div className="flex flex-col">
          <div className="py-5 flex gap-2">
            <BigCityCard image={delhi} name={"New Delhi"} />
            <BigCityCard image={bangalore} name={"Bangalore"} />
          </div>

          <div className="flex gap-2">
            <SmallCityCard image={mumbai} name={"Mumbai"}/> 
            <SmallCityCard image={chennai} name={"Chennai"}/> 
            <SmallCityCard image={hyd} name={"Hyderabad"}/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
