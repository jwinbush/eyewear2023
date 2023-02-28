import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useState } from "react";
import $ from "jquery";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import marriage from "../assets/marriage.png";

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
    <div className="bg-white uppercase text-sm">
      <Header />
      <div id="mainBody">
        <div className=" h-[780px] lg:h-[830px] w-full m-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full bg-top bg-cover duration-75 text-center"
          >
            <h1 class=" pt-[250px] lg:pt-[670px] mb-2 font-extrabold text-3xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-600 to-orange-400">
              Style that suits you
            </h1>
            <p class="text-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-600 to-orange-400 lg:text-xl ">
              Tuxedos and suits, for rent and for keeps.
            </p>
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 rounded-full text-2xl p-2 bg-white/30 text-gray-500 cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 rounded-full text-2xl p-2 bg-white/30 text-gray-500 cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        {/* <!-- Container for demo purpose --> */}
        <div className="container my-24 px-6 mx-auto">
          {/* <!-- Section: Design Block --> */}
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="md:text-3xl text-black font-bold mb-12 text-center ">
              OUR MOST-WANTED STYLES
            </h2>

            <div className="grid lg:grid-cols-5 lg:gap-6 xl:gap-x-12 sm:grid-cols-2 sm:gap-4">
              <div className="mb-6 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://static.theblacktux.com/products/tuxedos/Ocean%20Velvet%20Shawl%20Jacket%20Tuxedo/01_2019_0924_TBT_HC19_eComm_02_OceanVelvetShawl_097.jpeg?trim=0,186&width=461"
                      className="w-full h-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-black font-bold mb-3">
                    Ocean Velvet Tuxedo{" "}
                  </h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://static.theblacktux.com/products/tuxedos/Light%20Blue%20Shawl%20Tuxedo/01_2019_0924_TBT_HC19_eComm_01_LightBlueShawl_044.jpg?trim=0,186&width=461"
                      className="w-full h-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-black font-bold mb-3">
                    Light Blue Shawl Tuxedo{" "}
                  </h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://static.theblacktux.com/products/tuxedos/contrast-shawl-jacket-tuxedo/1_160223_BlkTuxEcom_WhiteDinnerBlkShawl_496_1812x1875_new.jpg?trim=0,186&width=461"
                      className="w-full h-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-black font-bold mb-3">
                    Contrast Shawl Jacket Tuxedo
                  </h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://static.theblacktux.com/products/suits/charcoal-suit/1_04_CS_1692_EXT_F_1812x1875.jpg?trim=0,186&width=461"
                      className="w-full h-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="  font-bold mb-3">Charcoal Suit</h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                </div>
              </div>

              <div className="mb-0">
                <div>
                  <div
                    className="relative overflow-hidden h-full bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://static.theblacktux.com/products/suits/black-suit/1_161129_TBT_Ecom_Black_Suit_1_1587_w1_1812x1875.jpg?trim=0,186&width=461"
                      className="w-full h-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="  font-bold mb-3">Black Suit</h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                </div>
              </div>
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
        className="bg-black z-50 fixed bottom-5 right-5 inline-block p-2 uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0"
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
                className="w-fullg"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-6">
                  Do not miss any updates.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-orange-500">
                    SIGN UP FOR WEEKLY NEWSLETTERS
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
                    className="inline-block px-7 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm leading-snug uppercase  shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
      <Footer />
    </div>
  );
}

export default Home;
