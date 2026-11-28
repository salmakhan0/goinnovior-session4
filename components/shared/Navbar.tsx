import { useState } from "react";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Deals", path: "/deals" },
    { name: "Success", path: "/success" },
    { name: "About", path: "/about" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Pro <span className="text-cyan-500">Edu</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan-500"
                    : "text-gray-700 hover:text-cyan-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Register Button */}
        <div className="hidden md:block">
          <Link
            to="/register"
            className="rounded-md border border-cyan-500 px-5 py-2.5 text-sm font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-gray-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-cyan-500"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="inline-block rounded-md border border-cyan-500 px-5 py-2 text-center font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}