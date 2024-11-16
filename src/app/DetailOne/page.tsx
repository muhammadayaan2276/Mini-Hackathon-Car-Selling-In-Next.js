import Link from "next/link";
import Image from "next/image";

export default function DetailFour() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-700 mx-20 underline py-16">
        Toyota Yaris 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <div className="flex flex-col items-center px-2 h-full w-full">
        <Link href="/DetailFour">
          <div className="w-full h-80 border-4 border-gray-400 rounded-lg bg-blue-200 p-1">
            <Image
              src="https://cache4.pakwheels.com/system/car_generation_pictures/7721/original/Yaris.png?1716536903"
              alt="Toyota Yaris"
              width={640} // Define width and height
              height={480}
              className="cursor-pointer w-full h-full rounded-md"
            />
          </div>
        </Link>
        <p className="text-center px-4 mt-11 mb-6 text-black font-sans font-bold text-[16px]">
          The Toyota Yaris 2024 is a compact, stylish car with a modern and
          practical design, making it perfect for both city driving and long
          trips. It comes with advanced safety features like pre-collision
          warning and lane assist to help keep you safe on the road. The vehicle
          also offers easy phone connectivity with Apple CarPlay and Android
          Auto, so you can stay connected while driving. Inside, you&apos;ll find a
          comfortable cabin with modern features and an intuitive dashboard,
          while the sleek exterior gives it a bold, dynamic look. Reliable,
          efficient, and packed with features, the Yaris is a great choice for
          anyone looking for a compact and well-equipped car.
        </p>
        <h2 className="text-green-700 text-center text-2xl font-bold">
          PKR 63.2 lacs
        </h2>
        <div className="flex flex-row items-center py-11 space-x-4">
          <Link href="/Form">
            <button className="bg-blue-700 text-white w-44 h-12 rounded-md hover:bg-purple-900">
              Make Payment
            </button>
          </Link>
          <Link href="/">
            <button className="bg-red-500 hover:bg-red-700 text-white w-44 h-12 rounded-md ">
              Go Back
            </button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
