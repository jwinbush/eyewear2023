import { Link } from 'react-router-dom';
import marriage from '../../assets/images/marriage.png';

export default function Signup() { 

	return(
<div  className="h-screen md:flex">
            <div
                     className="overflow-hidden md:flex w-1/2 bg-cover bg-center i justify-around items-center hidden" style={{backgroundImage: `url(${marriage})`}}>
                <div>
                    <h1  className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                    <p  className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                    <button type="submit"
                             className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-lg font-bold mb-2">Read More
                    </button>
                </div>

            </div>
            <div  className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form  className="bg-white">
                    <h1  className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p  className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    <div  className="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name"/>
                    </div>
                    <div  className="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                        </svg>
                        <input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username"/>
                    </div>
                    <div  className="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                        </svg>
                        <input  className="pl-2 outline-none border-none" type="text" name="" id=""
                               placeholder="Email Address"/>
                    </div>
                    <div  className="flex items-center border-2 py-2 px-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <input  className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password"/>
                    </div>
                    <button type="submit"
                             className="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2">Login
                    </button>
                    <span  className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>

                    {/* <!--Login checkbox confirmation--> */}
                    <fieldset  className="pt-10">
                        <legend  className="sr-only">Checkbox variants</legend>

                        <div  className="flex items-center mb-4">
                            <input id="checkbox-1" type="checkbox" value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-1"  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I
                                agree to the <Link to="/"  className="text-blue-600 hover:underline dark:text-blue-500" data-modal-target="defaultModal" data-modal-toggle="defaultModal" id="terms">terms
                                    and conditions</Link>.</label>
                        </div>

                        {/* <!-- Terms and conditions Main modal --> */}
                        <div id="defaultModal" tabindex="-1" aria-hidden="true"  className="fixed top-[40px] left-[40px] right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                            <div  className="relative w-full h-full max-w-2xl md:h-auto">
                                {/* <!-- Modal content --> */}
                                <div  className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* <!-- Modal header --> */}
                                    <div  className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                        <h3  className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Terms of Service
                                        </h3>
                                        <button type="button"  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                            <svg aria-hidden="true"  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span  className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* <!-- Modal body --> */}
                                    <div  className="p-6 space-y-6">
                                        <p  className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                        </p>
                                        <p  className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                        </p>
                                    </div>
                                    {/* <!-- Modal footer --> */}
                                    <div  className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button data-modal-hide="defaultModal" type="button" id="accept"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                        <button data-modal-hide="defaultModal" type="button" id="decline"  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className="flex items-center mb-4">
                            <input id="checkbox-2" type="checkbox" value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-2"  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I
                                want to get promotional offers</label>
                        </div>

                        <div  className="flex items-center mb-4">
                            <input id="checkbox-3" type="checkbox" value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-3"  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I
                                am 18 years or older</label>
                        </div>
                    </fieldset>

                </form>

            </div>
        </div>
)}
