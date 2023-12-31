/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux'
import CategoryModal from "./categoryModal";

interface IRocketsProps{
  rockets: any[]
}

export default function Categories({rockets}: IRocketsProps) {
  const [active, setActive] = React.useState(1);
  // const { rockets, loading } = useSelector((state:any) => state.rockets);
  const [open, setOpen] = useState(false)
  const [details, setDetails] = useState()

  const viewDetailsHandler = (data: any) => {
    setDetails(data)
    setOpen(!open)
  }

  const getItemProps = (index: React.SetStateAction<number>) => ({
    className:
      active === index
        ? "relative z-10 inline-flex items-center bg-gray-800 px-6 py-3 text-sm font-semibold text-white border focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        : "relative z-10 inline-flex items-center bg-indigo-600 px-6 py-3 text-sm bg-white border-2",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <>

    {open &&  <CategoryModal open={open} setOpen={setOpen} details={details} />}

    <section className="md:px-20">
      <div className="grid lg:grid-cols-5 p-10 md:grid-cols-3 grid-cols-2 gap-2 ">
        {rockets?.map((rocket:any) => (
          <div
          onClick = {() => viewDetailsHandler(rocket)} 
          key={rocket.id}className="w-full rounded-lg cursor-pointer max-w-[15rem] mb-6 text-center text-gray-700 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 text-white  hover:text-black  ">
            <img
              src={rocket?.flickr_images[0]              }
              className=" h-[12rem] w-[15rem]  overflow-hidden rounded-lg border-2  bg-transparent shadow-none"
            />
            <h1 className="mt-3 text-sm py-2 font-bold">
              {rocket.name}
            </h1>
          </div>
        ))}
      </div>


      <div className="flex items-center justify-center bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-center sm:hidden">
          <button {...getItemProps(1)}>1</button>
          <button {...getItemProps(2)}>2</button>
          <button {...getItemProps(3)}>3</button>
          <button {...getItemProps(4)}>4</button>
          <button {...getItemProps(5)}>5</button>
          <button {...getItemProps(6)}>6</button>
          <button {...getItemProps(7)}>7</button>
          <button {...getItemProps(8)}>8</button>
          <button {...getItemProps(9)}>9</button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={prev}
                className="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button {...getItemProps(1)}>1</button>
              <button {...getItemProps(2)}>2</button>
              <button {...getItemProps(3)}>3</button>
              <button {...getItemProps(4)}>4</button>
              <button {...getItemProps(5)}>5</button>
              <button {...getItemProps(6)}>6</button>
              <button {...getItemProps(7)}>7</button>
              <button {...getItemProps(8)}>8</button>
              <button {...getItemProps(9)}>9</button>
              <button
                onClick={next}
                className="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
