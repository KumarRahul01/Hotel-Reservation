import React from "react";

const Email = () => {
  return (
    <div className="w-full bg-blue-900 p-5 text-center">
        <h1 className="text-2xl font-semibold pt-5 text-white">Save time, save money!</h1>
        <h3 className="text-xl my-2 text-white">Sign up and we'll send the best deals to you</h3>
        <form className=" w-4/12 h-10 mx-auto flex gap-3 my-5">
          <input type="email" required className="w-full rounded px-4 py-2 outline-none focus:border-gray-200 focus:border-2" placeholder="email@gmail.com"/>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">Subscribe</button>
        </form>
      </div>
  );
};

export default Email;
