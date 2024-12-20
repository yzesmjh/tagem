"use client";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ConnectionForm from "./ConnectionForm";

const WalletForm = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Loader component
  const loader = () => (
    <div className="p-10">
      <ClipLoader
        color="#010101" // Customize the color
        size={80} // Customize the size
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );

  // Set timeout to stop loading after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Turn off the loader after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const [openForm, setOpenForm] = useState(false);

  return !openForm ? (
    <div className="flex justify-center items-center h-full w-full">
      {isLoading ? (
        loader() // Invoke loader function here
      ) : (
        <div className="h-full w-full items-center flex flex-col justify-between">
          <div>{loader()}</div> {/* Invoke loader function here */}
          <div className="flex gap-10 ">
            <button
              onClick={() => closeModal()} // Call closeForm function on button click
              className="py-2 px-5 text-white bg-slate-600 hover:bg-slate-700 rounded-md"
            >
              Close
            </button>
            <button
              onClick={() => setOpenForm(true)}
              className="py-2 px-5 text-white bg-blue-600 hover:bg-blue-500 rounded-md"
            >
              Connect Manually
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <ConnectionForm />
  );
};

export default WalletForm;
