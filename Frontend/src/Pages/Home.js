import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <section className="text-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-orange-600">
              Finance Your Next Car In Minutes
            </h1>
            <div className="flex justify-center">
              <Link
                to="/register"
                className="inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg font-bold"
              >
                Get Registered!
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* You can add an image here if needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
