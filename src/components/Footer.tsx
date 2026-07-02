import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#00807E] text-white py-14">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold ">
            MedLab
          </h2>

          <p className="mt-4 text-white leading-7">
            Trusted medical diagnostic services with easy online booking.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-white">
            <Link to="/" className="hover:text-teal-400 transition">
              Home
            </Link>
            <Link to="/tests" className="hover:text-teal-400 transition">
              Tests
            </Link>
            <Link to="/about" className="hover:text-teal-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-teal-400 transition">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-white">
            <p>support@medlab.com</p>
            <p>+91 9876543210</p>
            <p>India</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-white">
        © 2026 MedLab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;