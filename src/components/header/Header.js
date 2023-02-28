import React from "react";
import $ from "jquery";
import watch from "../../assets/watch.png";

// import { Link } from 'react-router-dom';

//jQuery for navbar

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 0) {
//     $('.a').fadeOut();
//   } else {
//     $('.a').fadeIn();
//   }
// });

// Navbar buttons
$(function () {
  $("#list").click(function () {
    $("#navbarSupportedContentQ").animate({ width: "toggle" }, 350); //slides content onclick
    $("#suitsMenu").hide();
    $("#clothingMenu").hide();
    $("#accessoriesMenu").hide();
  });
});

$(document).ready(function () {
  $("#suitsMenuButton").hover(function () {
    $("#clothingMenu").fadeOut(300);
    $("#accessoriesMenu").fadeOut(300);
    $("#suitsMenu").slideDown("medium");
  });
  $("#suitsMenu").mouseleave(function () {
    $("#suitsMenu").fadeOut(300);
  });
});

$(document).ready(function () {
  $("#clothingMenuButton").hover(function () {
    $("#suitsMenu").fadeOut(300);
    $("#accessoriesMenu").fadeOut(300);
    $("#clothingMenu").slideDown("medium");
  });
  $("#clothingMenu").mouseleave(function () {
    $("#clothingMenu").fadeOut(300);
  });
});

$(document).ready(function () {
  $("#accessoriesMenuButton").hover(function () {
    $("#suitsMenu").fadeOut(300);
    $("#clothingMenu").fadeOut(300);
    $("#accessoriesMenu").slideDown("medium");
  });
  $("#accessoriesMenu").mouseleave(function () {
    $("#accessoriesMenu").fadeOut(300);
  });
});

const Header = () => {
  //For suits & tuxedos ul list
  const suitsTuxedosList = [
    {
      id: 1,
      title: "New Arrivals",
      imageSrc:
        "https://static.theblacktux.com/products/suits/medium-blue-suit/2_10142022_BLACKTUX104649_3.4.jpg?width=845&height=875",
      link: "#",
    },
    {
      id: 2,
      title: "Business",
      imageSrc:
        "https://static.theblacktux.com/products/suits/black-suit/5_161129_TBT_Ecom_Black_Suit_1_1608_w1_1812x1875.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Tuxedos",
      imageSrc:
        "https://static.theblacktux.com/products/tuxedos/marigold-shawl-jacket-tuxedo/03_2018_0907_TBT_HC18_MarigoldShawlJacketTux_15_V2_w1_1812x1875.JPG?width=845&height=875",
      link: "#",
    },
    {
      id: 4,
      title: "Formal events",
      imageSrc:
        "https://static.theblacktux.com/products/tuxedos/notched-lapel-tuxedo/2_02_NLT_0706_Ext_F_1812x1875.jpg?width=845&height=875",
      link: "#",
    },
    {
      id: 5,
      title: "Wedding",
      imageSrc:
        "https://static.theblacktux.com/products/tuxedos/Light%20Blue%20Shawl%20Tuxedo/01_2019_0924_TBT_HC19_eComm_01_LightBlueShawl_044.jpg?width=845&height=875",
      link: "#",
    },
  ];

  //For clothing ul list
  const clothingList = [
    {
      id: 1,
      title: "Shirts",
      imageSrc:
        "https://static.theblacktux.com/products/shirts/white-dress-shirt/2_06_CLBBP_2836_F_1812x1875.jpg?width=845&height=875",
      link: "#",
    },
    {
      id: 2,
      title: "Sweaters",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPI4t4nY_EZeaxN-EZ0FVoIuGw7ISewXV-IQ&usqp=CAU",
      link: "#",
    },
    {
      id: 3,
      title: "Vests",
      imageSrc:
        "https://static.theblacktux.com/products/vests/navy-vest/1_08_CLBNS_3552_Ext_F_1812x1875.jpg?width=845&height=875",
      link: "#",
    },
    {
      id: 4,
      title: "Pants",
      imageSrc:
        "https://static.theblacktux.com/products/suits/light-grey-suit/7_161129_TBT_Ecom_Light_Gray_Suit_2_1474_w1_1812x1875.jpg?width=845&height=875",
      link: "#",
    },
    {
      id: 5,
      title: "Shoes",
      imageSrc:
        "https://static.theblacktux.com/products/shoes/cap-toe-shoes/1_005_1812x1875.jpg?width=845&height=875",
      link: "#",
    },
  ];

  //For clothing ul list
  const accessoriesList = [
    {
      id: 1,
      title: "Neckwear",
      imageSrc:
        "https://static.theblacktux.com/products/neckwear/black-cotton-neck-tie/1_TIE_FLAT_BLUE_MATTE_amended-to-black-cotton-necktie_1812x1875.jpg?trim=0,186&width=461",
      link: "#",
    },
    {
      id: 2,
      title: "Belts & Suspenders",
      imageSrc:
        "https://static.theblacktux.com/products/belts/black-belt/1_334_1812x1875.jpg?trim=0,186&width=461",
      link: "#",
    },
    {
      id: 3,
      title: "Clips",
      imageSrc:
        "https://static.theblacktux.com/products/accessory/tie-clip/1_20161028_StillLife_TieClip_0335_w1_1812x1875.jpg?trim=0,186&width=461",
      link: "#",
    },
    {
      id: 4,
      title: "Pocket Squares",
      imageSrc:
        "https://static.theblacktux.com/products/accessory/black-linen-pocket-square/MS-PS01-BK001_Large_1_1812x1875.jpg?trim=0,186&width=461",
      link: "#",
    },
    {
      id: 5,
      title: "Cufflinks & Studs",
      imageSrc:
        "https://static.theblacktux.com/products/cufflinks-studs/gold-tone-pearl-cufflinks/JY_015_gold_pearl_0083_1812x1875.jpg?trim=0,186&width=461",
      link: "#",
    },
    {
      id: 6,
      title: "Watches",
      imageSrc:
        watch,
      link: "#",
    },
  ];

  return (
    <div className="uppercase text-xs font-bold">
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 border-b border-gray-700 text-center py-2 text-xs text-white">
        <h1>
          <a href="/#" className="cursor-pointer">
            Join for exclusive offers 🎖️
          </a>
        </h1>
      </div>
      <nav
        className="relative flex w-full items-center justify-between bg-black py-2 text-white shadow-lg lg:flex-wrap lg:justify-start border-b border-gray-700"
        data-te-navbar-ref
      >
        {/* <div className="border-0 py-3 text-xl flex leading-none transition-shadow duration-150 ease-in-outtext-white">
          <h1>Hello</h1>
        </div> */}
        <div className="px-6">
          <button
            className="border-0 py-3 text-xl leading-none transition-shadow duration-150 ease-in-outtext-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentQ"
            aria-controls="navbarSupportedContentQ"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="list"
          >
            <span className="[&>svg]:w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentQ"
            data-te-collapse-item
          >
            <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
              <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
                <a
                  className="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out lg:px-2 hover:text-gray-400"
                  href="/#"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  type="button"
                  id="suitsMenuButton"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-nav-link-ref
                >
                  Suits & Tuxedos
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div
                  id="suitsMenu"
                  className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-700 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButtonU"
                  data-te-dropdown-menu-ref
                >
                  <div className=" flex px-6 py-5 lg:px-8 bg-white">
                    <div className=" grid gap-6 md:grid-cols-5">
                      {suitsTuxedosList.map(({ title, imageSrc, link }) => (
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
                              className="w-full h-full shadow-lg sm:max-h-[350px] lg:h-[320px]"
                              alt="From theblacktux.com"
                            />
                            <a href={link}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                          
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
              <li
                className="static lg:px-8"
                data-te-nav-item-ref
                data-te-dropdown-ref
              >
                <a
                  className="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out lg:px-2 hover:text-gray-400"
                  href="/#"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  type="button"
                  id="clothingMenuButton"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-nav-link-ref
                >
                  Clothing
                  <span className="ml-2 w-2 focus:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div
                  id="clothingMenu"
                  className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-700 shadow-lg dark:bg-neutral-700  [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButtonU"
                  data-te-dropdown-menu-ref
                >
                  <div className=" flex px-6 py-5 lg:px-8 bg-white">
                    <div className=" grid gap-6 md:grid-cols-5">
                      {clothingList.map(({ title, imageSrc, link }) => (
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
                              className="w-full h-full sm:max-h-[350px] lg:h-[320px]  shadow-lg dark:shadow-black "
                              alt="From theblacktux.com"
                            />
                            <a href={link}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                          
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
              <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
                <a
                  className="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-gray-400 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="/#"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  type="button"
                  id="accessoriesMenuButton"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-nav-link-ref
                >
                  Accessories
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div
                  id="accessoriesMenu"
                  className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-700 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButtonY"
                  data-te-dropdown-menu-ref
                >
                  <div className="flex px-6 py-5 lg:px-8 bg-white">
                    <div className=" grid gap-6 md:grid-cols-6">
                      {accessoriesList.map(({ title, imageSrc, link }) => (
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
                              className="w-full h-full shadow-lg sm:max-h-[350px] lg:h-[320px]"
                              alt="From theblacktux.com"
                            />
                            <a href={link}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                        
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              {/* <li> <a
                  className="lg:px-10 flex flex-row items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-gray-400 dark:hover:text-white dark:focus:text-white "
                  href="/#"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  type="button"
                  id="showroomsMenuButton"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-nav-link-ref
                >
                  Showrooms
                  
                </a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
