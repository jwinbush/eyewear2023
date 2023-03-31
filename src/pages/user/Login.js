import { Link } from "react-router-dom";
import marriage from "../../assets/images/marriage.png";
function Login() {
  return (
    <div  className="h-screen md:flex">
      <div
         className="overflow-hidden md:flex w-1/2 bg-cover bg-center i justify-around items-center hidden"
        style={{ backgroundImage: `url(${marriage})` }}
      >
        <div>
          <h1
             className="bg-gradient-to-r bg-clip-text  text-transparent 
              from-yellow-400 via-yellow-700 to-yellow-300 font-bold text-6xl"
          >
            SharpWear
          </h1>
          <p  className="text-black mt-1 text-2xl font-bold">
            Tuxedos and suits, for rent and for keeps.
          </p>
        </div>
      </div>
      <div  className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form  className="bg-white w-full lg:px-10 px-3">
          <h1  className="text-gray-800 font-bold text-4xl mb-1">Hello Again!</h1>
          <p  className="text-2xl font-normal text-gray-600 mb-7">Welcome Back</p>

          <div  className="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
               className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div  className="flex items-center border-2 py-2 px-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
               className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <p
            
             className="bg-gradient-to-r
            from-yellow-400 via-yellow-700 to-yellow-300 mt-4 py-2 rounded-lg text-white font-semibold mb-2 text-center"
          >
            Login
          </p>
          <span  className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
