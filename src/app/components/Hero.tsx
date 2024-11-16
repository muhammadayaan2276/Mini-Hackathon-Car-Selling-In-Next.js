export default function HeroSection() {
  return (
    <div className="flex py-4 pb-4 justify-center bg-white">
      <div className="w-full max-w-4xl gap-4">
        <h1 className="py-4 font-bold text-center mb-8 text-4xl w-full text-red-800">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>

        <div className="min-h-80 flex-col bg-white">
          <div className="w-fit mx-auto flex flex-cols-1 lg:flex-cols-3 md:flex-cols-2 justify-items-center gap-y-1 gap-x-14 mt-10 mb-5">
            <div className=" bg-white text-left">
              <h2 className="whitespace-nowrap text-2xl font-semibold mb-4 text-blue-800">
                Post your Ad on PakWheels
              </h2>
              <ul className="text-gray-800 space-y-3">
                <li>✔ Post your Ad for Free in 3 Easy Steps</li>
                <li className="whitespace-nowrap">
                  ✔ Get Genuine offers from Verified Buyers
                </li>
                <li>✔ Sell your car Fast at the Best Price</li>
              </ul>
              <button className="mt-4  bg-red-700 hover:bg-red-900 text-white px-14 py-3 rounded-lg">
                Post Your Ad
              </button>
            </div>
            <div className="flex flex-col px-11 bg-white items-center justify-between h-full">
              <div className="w-px h-24 bg-gray-600 mb-2"></div>
              <span className="text-gray-500 text-4xl font-semibold mb-2 uppercase ">
                or
              </span>
              <div className="w-px h-24 bg-gray-600 mb-2"></div>
            </div>

            <div className=" text-left bg-white">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Try PakWheels Sell It For Me
              </h2>
              <ul className="text-gray-700 space-y-3">
                <li>✔ Dedicated Sales Expert To Sell Your Car</li>
                <li className="whitespace-nowrap">
                  ✔ We Bargain For You And Share The Best Offer
                </li>
                <li>✔ We Ensure Safe & Secure Transaction</li>
              </ul>
              <button className="mt-4 bg-blue-700 hover:bg-blue-900 text-white px-12 py-3 rounded-lg">
                Register Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
