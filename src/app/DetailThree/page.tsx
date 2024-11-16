import Link from "next/link";
import Image from "next/image";

export default function DetailThree() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-700 mx-20 underline text-nowrap py-16">
        Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <div className="flex flex-col items-center px-2 h-full w-full">
        <Link href="/DetailThree" passHref>
          <div className="w-full h-80 border-4 border-gray-400 rounded-lg bg-blue-200 p-1">
            <Image
              src="https://cache3.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100"
              alt="Suzuki Alto"
              className="cursor-pointer w-full h-full rounded-md"
              width={800}
              height={400}
            />
          </div>
        </Link>
        <p className="text-center px-4 mt-11 mb-6 text-black font-sans font-bold text-[16px]">
          The Suzuki Alto 2024 is a compact, affordable car with a simple and
          practical design, making it perfect for city driving and everyday use.
          It comes with basic safety features like airbags and stability control
          to help keep you safe on the road. The vehicle also offers easy phone
          connectivity with Bluetooth, ensuring you stay connected while on the
          go. Inside, you&apos;ll find a comfortable cabin with essential features
          and an easy-to-use dashboard, while the compact exterior makes it ideal
          for tight parking spaces. Reliable, economical, and full of value, the
          Alto is a great choice for anyone looking for a practical and
          budget-friendly car. The Suzuki Alto 2024 also boasts excellent fuel
          efficiency, making it an economical choice for both daily commutes and
          longer drives.
        </p>
        <h2 className="text-green-700 text-center text-2xl font-bold">
          PKR 30.5 lacs
        </h2>
        <div className="flex flex-row items-center py-11 space-x-4">
          <Link href="/Form" passHref>
            <button className="bg-blue-700 text-white w-44 h-12 rounded-md tex hover:bg-purple-900">
              Make Payment
            </button>
          </Link>
          <Link href="/" passHref>
            <button className="bg-red-500 hover:bg-red-700 text-white w-44 h-12 rounded-md">
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
