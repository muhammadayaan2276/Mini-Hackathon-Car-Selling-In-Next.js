import Link from "next/link";
import Image from "next/image";

export default function DetailTwo() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-700 mx-20 underline text-nowrap py-16">
        Land Cruiser 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <div className="flex flex-col items-center px-2 h-full w-full">
        <Link href="/DetailTwo" passHref>
          <div className="w-full h-80 border-4 border-gray-400 rounded-lg bg-blue-200 p-1">
            <Image
              src="https://cache2.pakwheels.com/system/car_generation_pictures/6008/original/Land_Cruiser_300_-_PNG.png?1635484577"
              alt="Land Cruiser"
              className="cursor-pointer w-full h-full rounded-md"
              width={800}
              height={400}
            />
          </div>
        </Link>
        <p className="text-center px-4 mt-11 mb-6 text-black font-sans font-bold text-[16px]">
          The Toyota Land Cruiser 2024 is a powerful, durable SUV with a rugged
          and luxurious design, making it perfect for both off-road adventures
          and city driving. It comes with advanced safety features like lane
          assistance to help keep you on track and adaptive cruise control for a
          more comfortable driving experience. The vehicle also offers easy
          phone connectivity with Apple CarPlay and Android Auto, keeping you
          connected while on the go. Inside, you&apos;ll find a spacious and premium
          cabin with high-end technology, while the bold exterior adds a sense
          of strength and elegance. Reliable, capable, and packed with features,
          the Land Cruiser is a top choice for those seeking an adventurous yet
          refined vehicle.
        </p>
        <h2 className="text-green-700 text-center text-2xl font-bold">
          PKR 12.0 crore
        </h2>
        <div className="flex flex-row items-center py-11 space-x-4">
          <Link href="/Form" passHref>
            <button className="bg-blue-700 text-white w-44 h-12 rounded-md tex hover:bg-purple-900">
              Make Payment
            </button>
          </Link>
          <Link href="/" passHref>
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
