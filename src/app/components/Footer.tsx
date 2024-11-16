import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold font-serif text-red-700 hover:text-red-500">
          Ayaan's Auto Hub
        </h1>

        <div className="flex space-x-10">
          <a
            href="https://www.facebook.com/profile.php?id=61569038724612"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-14 h-14 hover:opacity-75"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ayaan-0445322bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              alt="LinkedIn"
              className="w-14 h-14 hover:opacity-75"
            />
          </a>
        </div>

        <nav className="flex flex-wrap justify-center space-x-4 text-md">
          <div className="hover:underline">About Us</div>
          <div className="hover:underline">Services</div>
          <div className="hover:underline">Contact</div>
          <div className="hover:underline">Privacy Policy</div>
        </nav>

        <p className="text-lg text-purple-800 hover:text-purple-500">
          &copy; 2024 Ayaan's Auto Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
