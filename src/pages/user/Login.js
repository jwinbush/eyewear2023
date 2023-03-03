import { Link } from 'react-router-dom';

function Login() { 

	return(
<div class="w-full lg:h-[830px]">
  <form class="bg-white w-full h-full shadow-md rounded px-8 pt-8 lg:pt-[15rem] pb-8">
    <div class="mb-4 lg:px-[20rem]">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div class="mb-6 lg:px-[20rem]">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between lg:px-[20rem]">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <Link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/">
        Forgot Password?
      </Link>
    </div>
  
  </form>
  
</div>
)}

export default Login;