// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent ">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-1 justify-center md:justify-start">
          <Link href="/" className="text-[#ec4899] text-3xl font-bold">
            Abhijeet Gawade
          </Link>
        </div>

        <ul
          className="hidden sm:contents mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              className="block py-2 no-underline outline-none hover:no-underline"
              href="#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
