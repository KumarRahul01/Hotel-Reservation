import React from "react";
import { Link } from "react-router-dom";
import Linkbutton from "./Linkbutton";
import Linklogos from "./Linklogos";
import Ctabutton from "./Ctabutton";
import SearchBar from "./SearchBar";

const Navbar = ({ type }) => {
  return (
    <div className="w-full bg-blue-900 text-white pt-2 pb-3">
      <div className="w-9/12 mx-auto py-5 relative">
        <div className="flex items-center justify-between">
          <Link className="text-xl font-semibold tracking-wide text-white" to="/">
            Booking.com
          </Link>
          {/* Links */}
          <div className="flex gap-7 mr-14">
            {/* link Buttons Components */}
            <Linkbutton to="/hotels" name="Register" />
            <Linkbutton to="/hotels/:id" name="Sign In" />
          </div>
        </div>

        {/* Logos */}
        <div>
          <Linklogos type={type}/>
        </div>
        { type !== "list" &&
          <>
            {/* Title */}
            <div className="w-7/12 mt-5">
              <h1 className="text-3xl font-bold">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="text-lg my-5">
                Get rewarded for your travels - unlock instant savings of 10% or
                more with a free Booking.com account
              </p>
            </div>

            {/* CTA Button */}
            <Ctabutton name={"Sign in / Register"} />

            {/* Search Bar */}
            <div className="absolute w-full hidden lg:block">
              <div className="flex">
                <SearchBar />
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
