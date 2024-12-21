import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-28 bg-[#faf4f5] h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1300px] mx-auto">
        {/* About Image */}
        <div className="flex-shrink-0 py-3 mx-14">
          <img
            src="/about-image.jpg"
            alt="About"
            className="h-[400px] w-[400px] object-cover rounded-full "
          />
        </div>

        {/* About Details */}
        <div className="max-w-[50%] text-center lg:text-left">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-8 mb-12 leading-[30px] text-lg">
            At Coffee House in Berndorf, Germany, we pride ourselves on being a
            go-to destination for coffee lovers and conversation seekers alike.
            We're dedicated to providing an exceptional coffee experience in a
            cozy and inviting atmosphere, where guests can relax, unwind, and
            enjoy their time in comfort.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="#"
              className="text-[#3b141c] text-2xl transition duration-200 hover:text-[#f3961c]"
            >
              <FaFacebook /> {/* Facebook Icon */}
            </a>
            <a
              href="#"
              className="text-[#3b141c] text-2xl transition duration-200 hover:text-[#f3961c]"
            >
              <FaInstagram /> {/* Instagram Icon */}
            </a>
            <a
              href="#"
              className="text-[#3b141c] text-2xl transition duration-200 hover:text-[#f3961c]"
            >
              <FaTwitter /> {/* Twitter Icon */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
