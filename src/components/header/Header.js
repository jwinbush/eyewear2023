import React from "react";
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav
        className="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div className="px-6">
          <button
            className="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentQ"
            aria-controls="navbarSupportedContentQ"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
              <li data-te-nav-item-ref>
                <a
                  className="block py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Regular link
                </a>
              </li>
              <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
                <a
                  className="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                  href="#"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  type="button"
                  id="dropdownMenuButtonQ"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-nav-link-ref
                >
                  Mega menu
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
                  className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButtonY"
                  data-te-dropdown-menu-ref
                >
                  <div className="px-6 py-5 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                      <div>
                        <p className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                          Lorem ipsum
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <p className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                          Explit voluptas
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <p className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                          Iste quaerato
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <p className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                          Cras justo odio
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center border-b border-neutral-200 px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="flex w-full items-center px-6 py-3 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                        >
                          <div className="shrink-0">
                            <img
                              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                              className="w-20 rounded shadow-lg dark:shadow-black/10"
                              alt="Hollywood Sign on The Hill"
                            />
                          </div>
                          <div className="ml-4 grow">
                            <p className="mb-1 font-semibold">
                              Sed ut perspiciatis unde omnis
                            </p>
                            <p>
                              <u>15.07.2021</u>
                            </p>
                          </div>
                        </a>
                      </div>
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
