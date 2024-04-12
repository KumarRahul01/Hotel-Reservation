import React, { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // for handling Calender
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showCalendar, setShowCalendar] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  // for handling date selection
  const [winLoad, setWinLoad] = useState(false);

  // to selct the Options
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation)=>{
    setOptions((prev) => {
      return {
       ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    })
  }

  const navigate = useNavigate();

  // for sending data to "/hotels" component
  const [destination, setDestination] = useState("");

    const handleSubmit = () => {
      navigate("/hotels", {state :{destination, date, options}});
    };

  return (
    <div className="w-full flex gap-1 border-4 border-orange-400 bg-orange-400 rounded-lg font-medium">
      <div className="w-full py-2 px-4 rounded flex items-center gap-4 text-black bg-white ">
        <IoBedOutline size={"1.6rem"} />
        <input
          type="text"
          className="h-10 p-3 outline-none tracking-wide"
          placeholder="Where are you going?"
          onChange={e => setDestination(e.target.value)}
        />
      </div>

      {/* Date Selector */}
      <div className="w-full py-2 px-4 rounded flex items-center gap-4 text-black relative bg-white z-10">
        <LiaCalendarAltSolid size={"1.6rem"} />
        <div>
          <span
            onClick={() => {
              setShowCalendar(!showCalendar);
              setWinLoad(!winLoad);
            }}
          >
            {winLoad
              ? `${date[0].startDate.toDateString().slice(0, -4)} - `
              : "Check-in - "}
            {winLoad
              ? `${date[0].endDate.toDateString().slice(0, -4)}`
              : "Check-out"}
          </span>
        </div>
        <div
          onMouseLeave={() => {
            setShowCalendar(false);
            setWinLoad(!false);
          }}
        >
          {showCalendar && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute left-0 top-12"
            />
          )}
        </div>
      </div>

      {/* Choose Person Option */}
      <div className="w-full py-2 px-4 rounded flex items-center gap-4 text-black relative bg-white z-10">
        <FaRegUser size={"1.3rem"} />
        <span
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >{`${options.adult} Adult , ${options.children} Children , ${options.room} Room`}</span>
        {showOptions && (
          <div className="absolute top-12 bg-white border w-full px-5 ml-5 py-5 flex flex-col gap-5">
            {/* Adult */}
            <div className="flex justify-between items-center  border p-2 rounded border-blue-500 shadow">
              <span>Adult</span>
              <div className="flex justify-center items-center gap-4 mr-4">
                <button
                  onClick={() => handleOption("adult", "d")}
                  disabled={options.adult <= 0}
                >
                  -
                </button>
                <span>{options.adult}</span>
                <button onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center border p-2 rounded border-blue-500 shadow">
              <span>Children</span>
              <div className="flex justify-center items-center gap-4 mr-4">
                <button
                  className=""
                  onClick={() => handleOption("children", "d")}
                  disabled={options.children <= 0}
                >
                  -
                </button>
                <span>{options.children}</span>
                <button onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex justify-between items-center  border p-2 rounded border-blue-500 shadow">
              <span>Rooms</span>
              <div className="flex justify-center items-center gap-4 mr-4">
                <button
                  onClick={() => handleOption("room", "d")}
                  disabled={options.room <= 0}
                >
                  -
                </button>
                <span>{options.room}</span>
                <button onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
            <button
              onClick={() => {
                setShowOptions(!showOptions);
              }}
              className="py-1 bg-[#0A66C2] min-w-fit text-white rounded text-lg tracking-wide"
            >
              Done
            </button>
          </div>
        )}
      </div>
      {/* button */}
      <button
        className="bg-[#0A66C2] px-6 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 font-medium text-lg tracking-wider"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
