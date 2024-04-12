import React from 'react'
import Navbar from '../components/Navbar'
import Email from '../components/Email'
import Footer from '../components/Footer'
import { MdOutlineLocationOn } from "react-icons/md";
import CarouselItem from '../components/CarouselItem';

const Hotel = () => {


  return (
    <div>
      <Navbar type={"list"} />
        <div className="w-9/12 mx-auto tracking-wide relative">
          <h1 className="text-3xl font-bold tracking-wide mt-10 text-[#0A66C2]">Tower Street Apartments</h1>
          <div className="flex items-center mt-2 mb-5 font-medium">
            <MdOutlineLocationOn size={"1.3rem"} />
            <span>5 Old Town, Block-22, 201309</span>
          </div>
          <h2 className="text-sm font-medium mb-5">Excellent location - 500m from center</h2>
          <p className="font-medium mb-5">Book a stay over $114 at this property and get a free airport taxi</p>
          {/* images/ carousel */}
          <div>
            <CarouselItem />
          </div>
          <h2 className="text-xl font-bold my-5">Stay in the heart of the london</h2>
          <p className="w-8/12 tracking-normal mb-32">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, mollitia quis eos odit consequatur assumenda dolorum ullam veritatis explicabo laboriosam laborum ad tempora! Ipsum nam culpa quos voluptates tempora exercitationem consectetur delectus dolorum? Tempore voluptatibus voluptatum molestiae repellendus voluptates dolorum, reprehenderit rem, hic, deserunt corporis fugit fuga quod voluptate incidunt?</p>
          <div className="absolute top-1 right-0">
            <div className="text-xl px-4 py-1 bg-[#0a6cc2] text-white font-medium tracking-wide rounded">Reserve Now</div>
          </div>
          <div className="absolute -bottom-24 right-0 bg-blue-100 rounded w-3/12">
            <h2 className="text-xl font-medium p-5">Prefer for a 9-night stay!</h2>
            <p className="pb-5 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos nihil porro quidem molestias tenetur aliquid doloremque commodi ipsum necessitatibus.</p>
            <div className="text-lg text-center px-4 py-1 bg-[#0a6cc2] text-white font-medium tracking-wide rounded">Reserve or Book Now!</div>
          </div>
        </div>
      <Email />
      <Footer />
    </div>
  )
}

export default Hotel