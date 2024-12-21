import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#3b141c]">
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 min-h-screen max-w-[1300px] mx-auto">
        {/* Hero Details */}
        <div className="text-white px-10">
          <h2 className="text-5xl font-miniver text-[#f3961c]">Best Coffee</h2>
          <h3 className="mt-2 max-w-[70%] text-2xl font-semibold font-miniver">
            Make your day great with our special coffee!
          </h3>

          <p className="mt-6 max-w-[70%] mb-10 text-lg">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="px-6 py-3 bg-[#f3961c] text-[#3b141c] rounded-[30px] font-medium text-lg transition duration-300 hover:text-white hover:bg-transparent hover:border-2 hover:border-white"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-transparent rounded-[30px] font-medium text-lg text-white transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c] hover:border-[#f3961c]"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 max-w-md md:mr-8">
          <img src="/homebg.png" alt="Coffee" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Home;
