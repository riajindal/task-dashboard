import React from "react";

function Searchbar(){
    return <div className="relative mx-auto mb-5 mt-2 bg-purple-100 p-2 rounded w-1/2 border-2 border-slate-400 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 absolute left-0 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
            <input type="text" className='bg-transparent ml-7 no-outline' placeholder='Search...'></input>
        </div>
};

export default Searchbar;