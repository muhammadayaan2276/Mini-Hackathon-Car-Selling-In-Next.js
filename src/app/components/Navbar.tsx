import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex flex-col justify-center">
      <nav className=" px-4 flex justify-center items-center flex-row w-full text-white font-bold bg-gray-950">
        <div className="mb-4 sm:mb-0">
          <Image
            className=" px-3 py-5 h-auto w-56 text-lg sm:text-xl md:text-2xl lg:text-2xl"
            src="/PakWheels-Blue-Tagline-Logo.png"
            alt="logo"
            width={40}
          height={40}
          />
        </div>

        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <ul className="flex flex-row ">
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Used Cars
            </li>
            <li
                className=" hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                New Cars
            </li>
            <li
                className="hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Bikes
            </li>
            <li
                className="hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Auto Store           
            </li>
            <li
                className=" hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Videos
            </li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Forums
            </li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Contact Us
            </li>
            <li
               className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                Blog
            </li>
            <li
                className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
                More
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-row gap-2">
            <li
              className="hidden lg:inline hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-bold">
              Sign In
            </li>
            <li
              className="hidden lg:inline hover:text-blue-600 hover:bg-white px-2 py-2 rounded-md text-sm font-bold">
              Sign Up
           </li>
          <button
              className="bg-red-500 hover:bg-red-800 rounded-md text-sm font-bold px-3 py-2">
              Post an Ad
          </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
