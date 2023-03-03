import $ from "jquery";
import marriage from "../../assets/marriage.png";
import { Link } from "react-router-dom";
import headimage from "../../assets/headerimage.png";

//jQuery scroll to top
$(document).ready(function () {
  $("#btn-back-to-top").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

function NewArrivals() {
  const list = [
    {
      id: 1,
      title: "New Arrivals",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010154_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/new",
    },
    {
      id: 2,
      title: "Business",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010624_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/business",
    },
    {
      id: 3,
      title: "Tuxedos",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15014321_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/tuxedo",
    },
    {
      id: 4,
      title: "Formal events",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010615_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/formal",
    },
    {
      id: 5,
      title: "Wedding",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010648_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/wedding",
    },
    {
      id: 6,
      title: "New Arrivals",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15014327_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/new",
    },
    {
      id: 7,
      title: "Business",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15015273_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/business",
    },
    {
      id: 8,
      title: "Tuxedos",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15011416_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/tuxedo",
    },
    {
      id: 9,
      title: "Formal events",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010685_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/formal",
    },
    {
      id: 10,
      title: "Wedding",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15015805_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/wedding",
    },
    {
      id: 11,
      title: "New Arrivals",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010154_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/new",
    },
    {
      id: 12,
      title: "Business",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010925_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/business",
    },
    {
      id: 13,
      title: "Tuxedos",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15012094_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/tuxedo",
    },
    {
      id: 14,
      title: "Formal events",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15014884_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/formal",
    },
    {
      id: 15,
      title: "Wedding",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010677_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/wedding",
    },
    {
      id: 16,
      title: "New Arrivals",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15010154_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/new",
    },
    {
      id: 17,
      title: "Business",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15012081_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/business",
    },
    {
      id: 18,
      title: "Tuxedos",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15016676_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/tuxedo",
    },
    {
      id: 19,
      title: "Formal events",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15013415_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/formal",
    },
    {
      id: 20,
      title: "Wedding",
      imageSrc:
        "https://i8.amplience.net/i/indochino/15012631_0_0.webp?w=312&sm=aspect&aspect=0.5693430656934306:1&qlt=100",
      link: "/suits-tuxedos/wedding",
    },
  ];

  return (
    <div className="bg-white uppercase text-sm">
      <div id="mainBody">
        <div className=" h-[100px] lg:h-[250px] w-full m-auto relative group">
          <div
            style={{
              backgroundImage: `url(${headimage})`,
            }}
            className="w-full h-full bg-top bg-cover duration-75 text-left  pl-6 lg:pl-28"
          >
            <p class=" pt-[10px] lg:pt-[70px] mb-2 text-xs lg:text-sm text-gray-500 lg:text-md ">
              Shop the collection
            </p>
            <h1 class=" lg:mb-2 font-bold text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black ">
              New Suits & Tuxedos
            </h1>
            <p class="lg:text-sm text-xs lg:text-black lg:text-md lg:visible invisible">
              Ranging from four different styles. Find the perfect suit for you.
            </p>
          </div>
        </div>
        {/* <!-- Container for demo purpose --> */}
        <div className="container my-8 lg:my-24 px-6 mx-auto">
          {/* <!-- Section: Design Block --> */}
          <section className="lg:mb-32 text-gray-800 text-center">
            <h2 className="lg:text-3xl text-md text-black font-semibold mb-12 text-left ">
              New Arrivals
            </h2>

            <div className="grid lg:grid-cols-5 lg:gap-6 xl:gap-x-12 sm:grid-cols-2 sm:gap-4">
              {/* {suitsTuxedosList.map(({ title, imageSrc, link }) => (
                        <div>
                          <p className="block w-full pt-2 font-semibold uppercase">
                            {title}
                          </p>
                          <div
                            className="relative my-4 overflow-hidden bg-cover bg-no-repeat hover:animate-pulse"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            <img
                              src={imageSrc}
                              className="w-full h-full shadow-lg xs:max-h-[100px] sm:max-h-[210px] lg:h-[320px]"
                              alt="From theblacktux.com"
                            />
                            <Link to={link} onClick={refreshPage}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </Link>
                          </div>
                        </div>
                      ))} */}
              {list.map(({ title, imageSrc, link }) => (
                <div className="mb-6 lg:mb-0">
                  <div>
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
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

                    <h5 className="text-black font-bold mb-3">{title}</h5>
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
    </div>
  );
}

export default NewArrivals;
