import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-#abb8c3 shadow-sm p-8">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl tracking-widest font-bold text-black">DEPOT</h1>
        </div>

        {/* Button Section */}
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white text-x  hover:shadow-2xl hover:text-black px-12 py-4 shadow hover:bg-red-400">
            PURCHASE
          </button>
        </div>

      </div>  
    </header>
  );
};

export default Navbar;
