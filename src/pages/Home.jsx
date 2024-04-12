import React from "react";
import Navbar from "../components/Navbar";
import FeaturedCities from "../components/FeaturedCities";
import Email from "../components/Email";
import Cards from "../components/Cards";
import tak from "/assets/Cards/tak.webp";
import hab from "/assets/Cards/habour.webp";
import fin from "/assets/Cards/finland.webp";
import casa from "/assets/Cards/casa.webp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-yllow-200">

      {/* Navbar */}
      <Navbar />

      {/* Cities */}
      <div className="w-9/12 mx-auto mt-10">
        <FeaturedCities />
      </div>

      {/* Unique Properties */}
      <div className="w-9/12 mx-auto mt-10">
        <h1 className="text-2xl font-bold">
          Stay at our top unique properties
        </h1>
        <p className="mt-2">
          From castles and villas to boats and igloos, we have it all
        </p>
        <div className="py-5 flex gap-5 mb-10">
          <Cards image={tak} name={"TalkLand"} location={"Fiji, Austria"} star={"9.3"} comment={"Wonderful"} review={"203 Reviews"}/>
          <Cards image={hab} name={"Finland"} location={"India, Austria"} star={"9.5"} comment={"Excellent"} review={"20 Reviews"} />
          <Cards image={tak} name={"Switzerland"} location={"Juhu, Jamica"} star={"9.1"} comment={"Fabulous"} review={"500 Reviews"} />
          <Cards image={casa} name={"Jamnagar"} location={"Gujrat, Inida"} star={"9.9"} comment={"Wonderful"} review={"2100 Reviews"} />
        </div>
      </div>

      {/* Unique Properties */}
      <div className="w-9/12 mx-auto mt-5">
        <h1 className="text-2xl font-bold">
          Stay at our top unique properties
        </h1>
        <p className="mt-2">
          From castles and villas to boats and igloos, we have it all
        </p>
        <div className="py-5 flex gap-5 mb-10">
          <Cards image={tak} name={"TalkLand"} location={"Fiji, Austria"} star={"9.3"} comment={"Wonderful"} review={"203 Reviews"}/>
          <Cards image={hab} name={"Finland"} location={"India, Austria"} star={"9.5"} comment={"Excellent"} review={"20 Reviews"} />
          <Cards image={tak} name={"Switzerland"} location={"Juhu, Jamica"} star={"9.1"} comment={"Fabulous"} review={"500 Reviews"} />
          <Cards image={casa} name={"Jamnagar"} location={"Gujrat, Inida"} star={"9.9"} comment={"Wonderful"} review={"2100 Reviews"} />
        </div>
      </div>

      {/* Email */}
      <Email />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;
