import Link from "next/link";

export default function Thankyou() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <h2 className="text-blue-600 text-6xl text-center font-bold pt-56 font-serif">
        Thank you for Shopping!!!
      </h2>
      <br />
      <p className="text-center pt-6 text-xl text-black font-bold">
        Your order will be delivered in 3 Business days...
      </p>

      <Link href="/">
        <div className="flex items-center justify-center pt-16">
          <button className="bg-red-500 hover:bg-red-700 text-white h-12 w-44 rounded-md text-center">
            Continue Shopping
          </button>
        </div>
      </Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
