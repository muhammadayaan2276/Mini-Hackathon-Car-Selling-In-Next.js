// src/app/FeaturedCars/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function FeaturedCars() {
  return (
    <div className="flex flex-col bg-gray-200">
      <div className="flex items-center justify-between w-full px-7">
        <h1 className="text-3xl py-5 font-semibold text-black whitespace-nowrap">
          Featured New Cars
        </h1>
        <div className="text-blue-500 hover:underline whitespace-nowrap font-medium hover:text-blue-900">
          View All New Cars
        </div>
      </div>

      <div className="w-96 flex justify-center items-center">
        <ul className="flex flex-row items-start space-x-20 pl-20 py-4 sm:flex-row">
          <li>
            <div className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">
              Popular
            </div>
          </li>
          <li>
            <div className="hover:font-bold mb-2 pb-2 rounded-md text-1xl font-medium">
              Upcoming
            </div>
          </li>
          <li>
            <div className="hover:font-bold mb-2 pb-2 rounded-md text-1xl text-nowrap font-medium">
              Newly Launched
            </div>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto w-fit mt-10 mb-5">
        {/* Car 1: Toyota Corolla */}
        <div className="flex flex-col items-center px-2 h-96 w-72">
          <Link href="/DetailOne" passHref>
            <Image
              src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
              alt="Toyota Corolla"
              width={500}
              height={300}
              className="cursor-pointer pb-4 w-72 h-64"
            />
            <h2 className="text-center font-bold text-2xl text-blue-800 hover:text-blue-600">
              Toyota Corolla
            </h2>
            <p className="text-center text-green-500">PKR 75.5 lacs</p>
            <div className="flex justify-center items-center py-2">
              <span className="text-yellow-600 text-2xl">{"★★★☆☆"}</span>
              <span className="text-black ml-2">626 Reviews</span>
            </div>
          </Link>
        </div>

        {/* Car 2: Toyota Land Cruiser */}
        <div className="flex flex-col items-center px-2 h-96 w-72">
          <Link href="/DetailTwo" passHref>
            <Image
              src="https://cache2.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577"
              alt="Toyota Land Cruiser"
              width={500}
              height={300}
              className="cursor-pointer pb-4 w-72 h-64"
            />
            <h2 className="text-center font-bold text-2xl text-blue-800 hover:text-blue-600">
              Toyota Land Cruiser
            </h2>
            <p className="text-center text-green-500">PKR 12.0 crore</p>
            <div className="flex justify-center items-center py-2">
              <span className="text-yellow-600 text-2xl">{"★★★☆☆"}</span>
              <span className="text-black ml-2">31 Reviews</span>
            </div>
          </Link>
        </div>

        {/* Car 3: Suzuki Alto */}
        <div className="flex flex-col items-center px-2 h-96 w-72">
          <Link href="/DetailThree" passHref>
            <Image
              src="https://cache3.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100"
              alt="Suzuki Alto"
              width={500}
              height={300}
              className="cursor-pointer pb-4 w-72 h-64"
            />
            <h2 className="text-center font-bold text-2xl text-blue-800 hover:text-blue-600">
              Suzuki Alto
            </h2>
            <p className="text-center text-green-500">PKR 30.5 lacs</p>
            <div className="flex justify-center items-center py-2">
              <span className="text-yellow-600 text-2xl">{"★★★☆☆"}</span>
              <span className="text-black ml-2">200 Reviews</span>
            </div>
          </Link>
        </div>

        {/* Car 4: Toyota Yaris */}
        <div className="flex flex-col items-center px-2 h-96 w-72">
          <Link href="/DetailFour" passHref>
            <Image
              src="https://cache4.pakwheels.com/system/car_generation_pictures/7721/original/Yaris.png?1716536903"
              alt="Toyota Yaris"
              width={500}
              height={300}
              className="cursor-pointer pb-4 w-72 h-64"
            />
            <h2 className="text-center font-bold text-2xl text-blue-800 hover:text-blue-600">
              Toyota Yaris
            </h2>
            <p className="text-center text-green-500">PKR 63.2 lacs</p>
            <div className="flex justify-center items-center py-2">
              <span className="text-yellow-600 text-2xl">{"★★★☆☆"}</span>
              <span className="text-black ml-2">138 Reviews</span>
            </div>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
}
