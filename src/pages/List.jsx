import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import "./List.css";
import SearchItem from "../components/SearchItem";

const List = () => {
  const location = useLocation();
  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [myDes, setDes] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar type={"list"} />
      <div className="bg-rd-300 py-10 min-h-screen">
        <div className="w-9/12 mx-auto flex gap-5">
          <form className="bg-blue-900 w-2/5 rounded p-5 sticky top-3 h-fit">
            <h1 className="text-white text-xl font-bold tracking-wide mb-5">
              Search Your Next Trip
            </h1>
            <div className="flex flex-col">
              <label
                htmlFor="destination"
                className="text-white text-lg font-semibold tracking-wide mb-2"
              >
                Destination
              </label>
              <input
                className="outline-none border rounded px-3 py-2 mb-3"
                type="text"
                id="destination"
                value={myDes}
                onChange={(e) => setDes(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="date"
                className="text-white text-lg font-semibold tracking-wide mb-2"
              >
                Date
              </label>
              <input
                className="outline-none border rounded px-3 py-2"
                onClick={() => {
                  setOpenDate(!openDate);
                }}
                value={`${date[0].startDate
                  .toDateString()
                  .slice(0, -4)} -  ${date[0].endDate
                  .toDateString()
                  .slice(0, -4)}`}
              />
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="p-3 mt-2"
                />
              )}
            </div>

            {/* options */}
            <div className="mt-5 text-white">
              <h1 className="text-lg font-semibold tracking-wide">Options</h1>
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex justify-between items-center gap-2 mb-2 min">
                  <span>Min Price (Per Night)</span>
                  <input
                    placeholder="500"
                    className=" w-1/2 outline-none border rounded px-3 py-2 text-black "
                    type="number"
                  />
                </div>
                <div className="flex justify-between items-center gap-2 mb-2 max">
                  <span>Max Price (Per Night)</span>
                  <input
                    placeholder="10,000"
                    className=" w-1/2 outline-none border rounded px-3 py-2 text-black "
                    type="number"
                  />
                </div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <span>Adult</span>
                  <input
                    min={1}
                    placeholder="2"
                    className="w-1/2 outline-none border rounded px-3 py-2 text-black"
                    type="number"
                    value={options.adult}
                  />
                </div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <span>Children</span>
                  <input
                    min={0}
                    placeholder="2"
                    className="w-1/2 outline-none border rounded px-3 py-2 text-black"
                    type="number"
                    value={options.children}
                  />
                </div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <span>Room</span>
                  <input
                    min={1}
                    placeholder="1"
                    className="w-1/2 outline-none border rounded px-3 py-2 text-black"
                    type="number"
                    value={options.room}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-[#0A66C2] text-white py-2 w-5/12 rounded text-lg font-semibold tracking-wide">
                Search
              </button>
            </div>
          </form>
          <div className="w-5/5 flex flex-col gap-8">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
