import { Link } from "react-router";

export default function Explore() {
  return (
    <section
      id="explore"
      className="w-full bg-[#F5FAFC] text-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* EXPLORE MAIN SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch w-full">

          {/* LEFT SIDE - IMAGE */}
          <div className="w-full min-h-75 sm:min-h-87.5 md:min-h-100 lg:min-h-112.5 flex items-center justify-center">

            <img
              src="/pics/pic7.png"
              alt="Student learning with laptop"
              className="w-full h-full min-h-75 sm:min-h-87.5 md:min-h-100 lg:min-h-112.5 object-contain object-center"
            />

          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full min-h-75 sm:min-h-87.5 md:min-h-100 lg:min-h-112.5 flex flex-col justify-center px-4 sm:px-5 md:px-6 lg:px-10 py-8 sm:py-6">

            {/* Small Heading */}
            <p className="text-[#20B5D0] text-xs sm:text-sm font-semibold tracking-wider mb-3">
              EXPLORE OUR INSTITUTE
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Explore The
              <br />
              eLearning Institute
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-xs sm:text-xs md:text-sm leading-6 sm:leading-7 mb-5">
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of
              letters.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">

              <div>
                <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-800">
                  3.2K+
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-800">
                  600+
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  Courses
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-800">
                  1K+
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  Instructors
                </p>
              </div>

            </div>

            {/* Read More Button */}
            <div>
              <Link
                to="/about"
                className="inline-block bg-[#20B5D0] text-white hover:bg-[#159bb5] text-xs sm:text-sm font-semibold px-6 sm:px-7 py-2.5 sm:py-3 rounded-sm transition duration-300"
              >
                Read More
              </Link>
            </div>

          </div>

        </div>

        {/* READY TO JOIN SECTION */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#20B5D0] text-white rounded-sm px-5 sm:px-8 md:px-10 lg:px-12 py-7 sm:py-9 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-7">

          <div className="text-center md:text-left">

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
              Ready to join?
            </h2>

            <p className="text-white/90 text-xs sm:text-sm leading-6 max-w-xl">
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout.
            </p>

          </div>

          <Link
            to="/register"
            className="shrink-0 bg-white text-[#20B5D0] hover:bg-gray-100 text-xs sm:text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm transition duration-300"
          >
            Registration
          </Link>

        </div>

      </div>
    </section>
  );
}