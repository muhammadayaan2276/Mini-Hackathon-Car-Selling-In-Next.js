import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-bold font-serif text-red-700 hover:text-red-500">
          Ayaan&apos;s Auto Hub
        </h1>

        {/* Social Links */}
        <div className="flex space-x-10">
          <a
            href="https://www.facebook.com/profile.php?id=61569038724612"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              width={56}
              height={56}
              className="hover:opacity-75"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ayaan-0445322bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              alt="LinkedIn"
              width={56}
              height={56}
              className="hover:opacity-75"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 text-md">
          <Link href="/about">
            <a className="hover:underline">About Us</a>
          </Link>
          <Link href="/services">
            <a className="hover:underline">Services</a>
          </Link>
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="hover:underline">Privacy Policy</a>
          </Link>
        </nav>

        {/* Footer Text */}
        <p className="text-lg text-purple-800 hover:text-purple-500">
          &copy; 2024 Ayaan&apos;s Auto Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
