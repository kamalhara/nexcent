/* eslint-disable @next/next/no-img-element */
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-(--footer) text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Section */}
        <div>
          <a href="#" className="inline-block mb-4">
            <img src="/nexcent.png" alt="Footer Logo" className="w-32" />
          </a>
          <p className="text-sm">Copyright © 2020 Nexcent Ltd.</p>
          <p className="text-sm mb-4">All rights reserved</p>

          <div className="flex space-x-4">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="font-semibold mb-3">Stay up to date</h4>
          <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 bg-transparent text-white outline-none"
            />
            <button className=" px-4 py-2  transition-all">➤</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
