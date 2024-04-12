import React from "react";

const SearchItem = () => {
  return (
    <div className="w-full border shadow-md rounded-md relative">
      <div className="flex p-3 gap-5">
        <img
          className="w-60 h-60 object-cover rounded-xl"
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb"
          alt="img"
        />
        <div className="">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-[#0A66C2] ">
              The Continent
            </h1>
            <p className="text-sm mb-3">500m from center</p>

            <h2 className="text-lg font-bold tracking-wide py-1 mb-2">
              Stay in the heart of the london
            </h2>
            <p className="w-2/3 text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit expedita
              quisquam molestiae laboriosam ullam architecto libero ...
            </p>
            <div className="flex gap-2">
              <div className="px-2 py-1 font-medium tracking-wide bg-[#0A66C2] w-fit rounded text-white my-2 text-xs">
                Free Cancelation
              </div>
              <div className="px-2 py-1 font-medium tracking-wide bg-[#0A66C2] w-fit rounded text-white my-2 text-xs">
                Free Airport Taxi
              </div>
            </div>
            <p className="text-[13px]">You can cancel later, so lock this gtreat deal now !!</p>
          </div>

          <div className="absolute top-3 right-5 text-md font-semibold tracking-wide ">
            Excellent{" "}
            <span className="p-1 bg-[#0A66C2] text-white rounded">8.8</span>
          </div>

          <div className="absolute bottom-5 right-5 text-md tracking-wide text-right">
            <div className="font-semibold pb-2">$120</div>
            <div className="text-sm font-medium mb-4">Includes all taxes & fees</div>
            <span className="p-1 bg-[#0A66C2] text-white rounded font-medium">
              See Availability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
