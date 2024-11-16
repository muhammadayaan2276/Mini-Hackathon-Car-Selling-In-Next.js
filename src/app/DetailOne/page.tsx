import Link from "next/link";

export default function DetailOne() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-700 mx-20 underline text-nowrap py-16">
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <div className="flex flex-col items-center px-2 h-full w-full">
        <Link href="/DetailOne" passHref>
          <div className="w-full h-80 border-4 border-gray-400 rounded-lg bg-blue-200 p-1">
            <img
              src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
              alt="Toyota Corolla"
              className="cursor-pointer w-full h-full rounded-md"
            />
          </div>
        </Link>
        <p className="text-center px-4 mt-11 mb-6 text-black font-sans font-bold text-[16px]">
          The Toyota Corolla 2024 is a dependable, fuel-efficient car with a
          stylish and comfortable design, making it perfect for everyday use. It
          comes with advanced safety features like lane assistance to help keep
          you on track and adaptive cruise control for a more relaxed driving
          experience. The car also offers easy phone connectivity with Apple
          CarPlay and Android Auto, ensuring you stay connected while on the go.
          Inside, you'll find a spacious and user-friendly cabin with modern
          technology, while the sleek exterior adds a touch of elegance.
          Affordable, reliable, and packed with features, the Corolla is a top
          choice for anyone looking for a practical and stylish vehicle.
        </p>
        <h2 className="text-green-700 text-center text-2xl font-bold">
          PKR 75.5 lacs
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
