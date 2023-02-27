import React from "react";
import $ from "jquery";

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
        "https://static.theblacktux.com/products/vests/navy-vest/1_08_CLBNS_3552_Ext_F_1812x1875.jpg?width=845&height=875",
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
                            className="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            <img
                              src={imageSrc}
                              className="w-full h-full shadow-lg"
                              alt="From theblacktux.com"
                            />
                            <a href={link}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                          <div className="mt-1 mb-3 flex items-center justify-between">
                            <p className="flex items-center text-primary dark:text-primary-400">
                              <span className="mr-2 w-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5"
                                >
                                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                                </svg>
                              </span>
                              Travels
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
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
                            className="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            <img
                              src={imageSrc}
                              className="w-full h-full shadow-lg dark:shadow-black "
                              alt="From theblacktux.com"
                            />
                            <a href={link}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                          <div className="mt-1 mb-3 flex items-center justify-between">
                            <p className="flex items-center text-primary dark:text-primary-400">
                              <span className="mr-2 w-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5"
                                >
                                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                                </svg>
                              </span>
                              Travels
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
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
                    <div className=" grid gap-6 md:grid-cols-5">
                      {accessoriesList.map(({ title, imageSrc, link }) => (
                        <div>
                          <p className="block w-full pt-2 font-semibold uppercase">
                            {title}
                          </p>
                          <div
                            className="relative my-4 overflow-hidden bg-cover bg-no-repeat"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            <img
                              src={imageSrc}
                              className="w-full h-full shadow-lg"
                              alt="From theblacktux.com"
                            />
                            <a href={link}>
                              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                          </div>
                          <div className="mt-1 mb-3 flex items-center justify-between">
                            <p className="flex items-center text-primary dark:text-primary-400">
                              <span className="mr-2 w-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5"
                                >
                                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                                </svg>
                              </span>
                              Travels
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
