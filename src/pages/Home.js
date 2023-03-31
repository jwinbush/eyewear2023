// import Header from "../components/header/Header";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useState } from "react";
import $ from "jquery";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import marriage from "../assets/images/marriage.png";
import individual from "../assets/images/individual.png";
import engaged from "../assets/images/engaged.png";
import group from "../assets/images/group.png";

import { Link } from "react-router-dom";

//jQuery scroll to top
$(document).ready(function () {
  $("#btn-back-to-top").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

function Home() {
  const slides = [
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image2,
    },
    {
      url: image5,
    },
  ];

  const list = [
    {
      id: 1,
      title: "Hampton Black and Ivory Tuxedo",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010764_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 1,
      title: "Highworth Navy Tuxedo",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15011682_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 3,
      title: "Hemsworth Charcoal Suit",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010624_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 4,
      title: "Hampton Ivory Tuxedo",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010757_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 5,
      title: "Hayle Sharkskin Slate Blue Suit",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010685_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
  ];

  const recommended = [
    {
      id: 1,
      title: "Halton Navy Chino",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15014593_0_0.webp?pcrop=1300,1600,2340,3200&w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 1,
      title: "Helston Anti-Wrinkle White Shirt",
      imageSrc:
        "https://i8.amplience.net/s/indochino/6431254_0_set/white-solid-design-helston-shirt.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 3,
      title: "Huntley Olive Quilted Chesterfield Overcoat",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15013974_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 4,
      title: "Black Velvet Bow Tie",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15014714_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
    {
      id: 5,
      title: "Harford Velvet Navy Suit",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15011698_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/details",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white uppercase text-md">
      {/* <Header /> */}
      <div id="mainBody">
        <div className=" h-[800px] lg:h-screen w-full m-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="font-Streamster normal-case w-full h-[830px] bg-top bg-cover duration-75 text-center"
          >
            <h1
              id="mainText"
              className=" pt-[250px] lg:pt-[600px] pb-6 lg:pb-8 lg:font-bold text-[3.1rem] lg:text-9xl bg-gradient-to-r bg-clip-text  text-transparent 
              from-yellow-400 via-yellow-700 to-yellow-300
              animate-text"
            >
              Style that suits you
            </h1>
            <p
              className="text-xl  text-white
             lg:text-3xl font-[200] "
            >
              Tuxedos and suits, for rent and for keeps.
            </p>
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 rounded-full lg:text-3xl text-2xl p-2  text-gray-900 cursor-pointer w-10 h-10 lg:w-12 lg:h-12">
            <BsChevronCompactLeft onClick={prevSlide} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 rounded-full lg:text-3xl text-2xl p-2  text-gray-900 cursor-pointer w-10 h-10 lg:w-12 lg:h-12">
            <BsChevronCompactRight onClick={nextSlide} />
          </div>
        </div>
        {/* <!-- Container for demo purpose --> */}
        <div className="container mt-24 mx-auto h-full">
          {/* <!-- Section: Design Block --> */}
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="lg:text-4xl text-2xl text-black font-bold mb-12 text-center ">
              OUR MOST-WANTED STYLES
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-5 lg:gap-6 grid-cols-1 gap-4">
              {list.map(({ title, imageSrc, link }) => (
                <div className="mb-6 lg:mb-0">
                  <div>
                    <div
                      className="relative overflow-hidden  bg-no-repeat bg-cover ripple hover:animate-pulse mb-2"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={imageSrc}
                        className="w-full h-full"
                        alt="Louvre"
                      />
                      <Link to={link}>
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </Link>
                    </div>

                    <h5 className="text-black mb-3 pb-6">{title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        <div className="container mt-24 mx-auto h-full">
          {/* <!-- Section: Design Block --> */}
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="lg:text-4xl text-2xl text-black font-bold mb-12 text-center ">
              RECOMMENDATIONS FOR YOU
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-5 lg:gap-6 grid-cols-1 gap-4">
              {recommended.map(({ title, imageSrc, link }) => (
                <div className="mb-6 lg:mb-0">
                  <div>
                    <div
                      className="relative overflow-hidden  bg-no-repeat bg-cover ripple hover:animate-pulse mb-2"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={imageSrc}
                        className="w-full h-full"
                        alt="Louvre"
                      />
                      <Link to={link}>
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </Link>
                    </div>

                    <h5 className="text-black mb-3 pb-6">{title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
      </div>
      {/* <!-- Back to top button --> */}
      <button
        type="button"
        id="btn-back-to-top"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="bg-black z-50 fixed rounded-full bottom-5 right-5 inline-block p-2 uppercase leading-normal text-white transition duration-150 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke-width="2.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="container mt-4 text-center"></div>
      {/* <!-- Section: Design Block --> */}
      <section className="bg-gray-200 filter-blur-xl w-full lg:h-screen h-full">
        <h1 className="text-7xl text-black p-6 font-extrabold">
          Appointment Types
        </h1>
        <p className="text-black text-xl max-w-3xl px-6">
          Book an appointment that caters to your specific suit-uation to get
          the most out of your experience fitting in-person at a suit store.
          Local showrooms offer specialized appointment types within these
          categories, so find what fits at the SuitShop near you.
        </p>
        <div className="grid lg:grid-cols-3 gap-6 p-6 text-black">
          <div className="bg-white p-2">
            <img
              className="w-full hover:animate-pulse"
              src={individual}
              alt=""
            />
            <h1 className="py-4 text-4xl font-bold">Individual Fitting</h1>
            <p className="text-lg py-1">
              Heading into the showroom on your own? A quick suit fitting or
              styling appointment makes suit shopping a snap, whether you're
              looking for an event or personal style.
            </p>
            <p className="text-lg py-1">
              Ideal time out from event date: 3 months-6 weeks
            </p>
            <Link to="/locations">
              <button
                type="submit"
                className="normal-case my-4 lg:text-xl px-4 py-2 bg-black  text-white font-medium text-xl leading-snug  shadow-md hover:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Book Appointment
              </button>
            </Link>
          </div>
          <div className="bg-white p-2">
            <img className="w-full hover:animate-pulse" src={engaged} alt="" />
            <h1 className="py-4 text-4xl font-bold">
              Engaged Couple Consultation
            </h1>
            <p className="text-lg py-1">
              Wedding planning? Bring your fiancé to see colors and styles and
              try on sizes and accessories. We'll walk you through next steps
              and find your perfect wedding suits.
            </p>
            <p className="text-lg py-1">
              Ideal time out from event date: 3 months-6 weeks
            </p>
            <Link to="/locations">
              <button
                type="submit"
                className="normal-case my-4 lg:text-xl px-4 py-2 bg-black  text-white font-medium text-xl leading-snug  shadow-md hover:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Book Appointment
              </button>
            </Link>
          </div>
          <div className="bg-white p-2">
            <img className="w-full hover:animate-pulse" src={group} alt="" />
            <h1 className="py-4 text-4xl font-bold">Group Fittings</h1>
            <p className="text-lg py-1">
              Get the party started! Bring your loved ones or wedding party for
              wedding suit fittings as a group. Wedding dress shopping has
              nothing on us: get your fit and make it fun!
            </p>
            <p className="text-lg py-1">
              Ideal time out from event date: 5-6 Months
            </p>
            <Link to="/locations">
              <button
                type="submit"
                className="normal-case my-4 lg:text-xl px-4 py-2 bg-black  text-white font-medium text-xl leading-snug  shadow-md hover:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-4 p-6"></div>
      </section>

      {/* <!-- Explanation --> */}
      <div className="container mt-4 text-center text-neutral-800 dark:text-neutral-200"></div>
      {/* <!-- Section: Design Block --> */}
      <section className=" text-white text-center lg:text-left">
        <div className="block  shadow-lg bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto hidden lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src={marriage}
                alt="Trendy Pants and Shoes"
                className="w-full"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Do not miss any updates.
                  <br />
                  <span className="normal-case font-Streamster text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-700">
                    Sign up for weekly newsletters.
                  </span>
                </h2>
                <p className="text-white mb-12">
                  We will keep you posted on new products and great offers.
                </p>
                <div className="md:flex flex-row">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="normal-case lg:text-3xl font-Streamster inline-block px-7 py-3 bg-gradient-to-r from-yellow-300 to-yellow-700  text-white font-medium text-xl leading-snug  shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
}

export default Home;
