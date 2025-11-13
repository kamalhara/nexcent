import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
function Navbar() {
  return (
    <nav className="flex  items-center justify-between  mt-10">
      <p className="text-4xl font-bold text-gray-700">Nexcent</p>
      <div className="md:hidden sm:hidden">
        <AiOutlineMenuFold className="text-gray-800" size={28} />
      </div>
      <div className="md:flex gap-10 hidden">
        <Link href="#" className="text-xl text-gray-700 ">
          Home
        </Link>
        <Link href="#" className="text-xl text-gray-700">
          Service
        </Link>
        <Link href="#" className="text-xl text-gray-700">
          Feature
        </Link>
        <Link href="#" className="text-xl text-gray-700">
          Product
        </Link>
        <Link href="#" className="text-xl text-gray-700">
          Testimonial
        </Link>
        <Link href="#" className="text-xl text-gray-700">
          FAQ
        </Link>
      </div>
      <div className="md:flex hidden gap-4 items-center">
        <Link href="/login" className="text-xl text-(--green)">
          Login
        </Link>
        <Link
          href="#"
          className="text-xl text-white rounded-md bg-(--green) py-2 px-5  hover:bg-white hover:border-2 hover:border-(--green) hover:text-(--green)"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
