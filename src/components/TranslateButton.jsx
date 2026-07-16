import React from "react";

const TranslateButton = ({ onClick }) => {
  return (
    <div className=" w-full translateBtn flex justify-center p-2 ">
      <button
        type="button"
        onClick={onClick}
        className="w-full  max-w-xs text-gray-800 dark:text-white cursor-pointer border border-gray-100 dark:border-white   focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-lg bg-white hover:bg-[#0096c7] active:bg-[#006d77] md:w-1/5 md:px-8 pt-2 pb-2 pl-4 pr-4 rounded-xl font-semibold  dark:bg-[#0077b6] transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-lg active:scale-95 text-shadow-lg">
        Translate
      </button>
    </div>
  );
};

export default TranslateButton;
