"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

// react-slick Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Images
// X
import project0 from "../../public/images/products/project0.jpg";
import project1 from "../../public/images/products/project1.jpg";
import project2 from "../../public/images/products/project2.png";
import project3 from "../../public/images/products/project3.png";
import project4 from "../../public/images/products/project4.png";
import project5 from "../../public/images/products/project5.png";
import project6 from "../../public/images/products/project6.png";
import project7 from "../../public/images/products/project7.png";
// Y
import project8 from "../../public/images/products/project8.png";
import project9 from "../../public/images/products/project9.png";
import project10 from "../../public/images/products/project10.png";
import project11 from "../../public/images/products/project11.png";
import project12 from "../../public/images/products/project12.png";
import project13 from "../../public/images/products/project13.png";
import project14 from "../../public/images/products/project14.png";
import project15 from "../../public/images/products/project15.png";
// SVG
import locationSVG from "../../public/images/landing_page/contact-section/location-svg-icon.svg";
import telephoneSVG from "../../public/images/landing_page/contact-section/telephone-svg-icon.svg";

const projectImagesX = [
  {
    id: 0,
    src: project0,
  },
  {
    id: 1,
    src: project1,
  },
  {
    id: 2,
    src: project2,
  },
  {
    id: 3,
    src: project3,
  },
  {
    id: 4,
    src: project4,
  },
  {
    id: 5,
    src: project5,
  },
  {
    id: 6,
    src: project6,
  },
  {
    id: 7,
    src: project7,
  },
];
const projectImagesY = [
  {
    id: 0,
    src: project8,
  },
  {
    id: 1,
    src: project9,
  },
  {
    id: 2,
    src: project10,
  },
  {
    id: 3,
    src: project11,
  },
  {
    id: 4,
    src: project12,
  },
  {
    id: 5,
    src: project13,
  },
  {
    id: 6,
    src: project14,
  },
  {
    id: 7,
    src: project15,
  },
];

export default function Products() {
  // react-slick config
  const sliderRef = useRef(null);
  useEffect(() => {
    const slider = sliderRef.current.innerSlider;
    slider.autoPlay();

    return () => {
      slider.pause();
    };
  }, []);
  const settings = {
    ref: sliderRef,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Carousel Section ========= */}
        <section className="section-container" id="carousel">
          <h1
            className="text-2xl font-sansMedium mt-12 
            md:mt-24 md:text-3xl lg:text-4xl xl:text-5xl md:font-sans"
          >
            Discover our works
          </h1>
          <p
            className="text-base mt-4 text-soft 
            xl:w-1/2 md:text-xl md:mt-12"
          >
            See how our expertise in web development has helped businesses like
            yours achieve online success through innovative and customized
            solutions
          </p>

          {/* Start Carousel */}
          {/* X */}
          <Slider {...settings} speed={5000} className="mt-12">
            {projectImagesX &&
              projectImagesX.map((projectImage) => {
                return (
                  <Image
                    className="px-2"
                    key={projectImage.id}
                    src={projectImage.src}
                    alt={projectImage.src}
                    loading="lazy"
                  />
                );
              })}
          </Slider>
          {/* Y */}
          <Slider {...settings} speed={6000} className="mt-4 mb-24">
            {projectImagesY &&
              projectImagesY.map((projectImage) => {
                return (
                  <Image
                    className="px-2"
                    key={projectImage.id}
                    src={projectImage.src}
                    alt={projectImage.src}
                    loading="lazy"
                  />
                );
              })}
          </Slider>
          {/* End Carousel */}
        </section>
        {/* ========= End Carousel Section ========= */}

        {/* ========= Start Map Section ========= */}
        <section
          className="mt-12 
          md:mt-32"
        >
          {/* Container */}
          <div className="section-container ">
            <h2
              className="text-center text-2xl font-sansMedium
              xl:text-4xl lg:text-3xl lg:font-sans"
            >
              Where to find us?
            </h2>
            <p
              className="text-soft mt-4 text-center mx-auto 
              md:max-w-lg"
            >
              Arrange an appointment for a consultation meeting by visiting one
              of our nearby offices or reaching us through the email address
              provided.
            </p>
          </div>

          {/* Start Map */}
          <iframe
            className="mt-12 w-full h-[30rem]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.67922529230734!2d121.39708924445328!3d14.26094247701575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e3aad5147297%3A0xb2cb5699ab7d9b4d!2s796W%2B9RW%2C%20Sampaguita%20St%2C%20Santa%20Cruz%2C%20Laguna!5e0!3m2!1sen!2sph!4v1687399910745!5m2!1sen!2sph"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          {/* End Map */}

          <div
            className="bg-[#19B89B] h-[37rem] relative 
            md:h-[30rem]"
          >
            {/* Start Absolute Card */}
            <div
              className="-top-24 bg-white border-secondary border-4 py-4 px-6 flex inset-x-12 flex-col
              2xl:inset-x-96 xl:inset-x-56 lg:inset-x-32 md:inset-x-16 md:rounded-2xl md:absolute xl:-top-20 md:flex-row"
            >
              {/* Left Part */}
              <div
                className="basis-1/2 py-8 flex flex-col space-y-4 
                md:border-r-2"
              >
                {/* Address */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-5 mt-1"
                      src={locationSVG}
                      alt="location-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft">
                    National Highway, Sitio Ilaya, Brgy. Sto Domingo, Bay Laguna
                  </div>
                </div>
                {/* Contact Number */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-4 mt-1"
                      src={telephoneSVG}
                      alt="telephone-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft underline">
                    +63930-547-5411
                  </div>
                </div>
              </div>
              {/* Right Part */}
              <div
                className="basis-1/2 py-8 flex flex-col space-y-4 
                md:pl-4"
              >
                {/* Address */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-5 mt-1"
                      src={locationSVG}
                      alt="location-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft">
                    Brgy. Bubukal, Sitio Sampaguita, Sta. Cruz Laguna
                  </div>
                </div>
                {/* Contact Number */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-4 mt-1"
                      src={telephoneSVG}
                      alt="telephone-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft underline">
                    +63955-916-8806
                  </div>
                </div>
              </div>
            </div>
            {/* End Absolute Card */}

            <h1
              className="text-3xl text-white text-center pt-12 
              md:pt-44 md:text-5xl"
            >
              Join Us
            </h1>
            <p
              className="font-serif mt-4 text-center text-white 
              sm:text-xl"
            >
              “Let&#39;s get started and make your mark on the digital world!”
            </p>
            <div
              className="text-center mt-8
              md:mt-12"
            >
              <Link href="/solutions">
                <button className="bg-white px-6 py-2 rounded-sm shadow font-sansMedium">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* ========= End Map Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
