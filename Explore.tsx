export default function Explore() {
  return (
    <section
      id="explore"
      className="w-full bg-[#F5FAFC] text-gray-800 px-5 md:px-10 lg:px-16 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* EXPLORE MAIN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">

          {/* LEFT IMAGE */}
          <div className="w-full">
            <div className="w-full aspect-4/3 md:aspect-4/5 overflow-hidden rounded-sm bg-[#EAF2F8]">
              <img
                src="/pics/pic7.png"
                alt="Student learning with laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full py-4 md:py-8">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Explore The eLearning Institute
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-7 mb-5">
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-7 mb-8">
              Anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend
              to repeat predefined.
              <a
                href="#more"
                className="text-[#20B5D0] font-semibold ml-1"
              >
                See More
              </a>
            </p>

            {/* STATISTICS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">

              <div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  3.2K+
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Online Course
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  600+
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Expert member
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  1K+
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Rating & Review
                </p>
              </div>

            </div>

            {/* READ MORE BUTTON */}
            <a
              href="#more"
              className="inline-block bg-[#20B5D0] hover:bg-[#159DB8] text-white font-semibold px-7 py-3 rounded-md transition duration-300"
            >
              Read More
            </a>

          </div>
        </div>

        {/* READY TO JOIN SECTION */}
        <div className="mt-20 bg-[#20B5D0] text-white rounded-md px-6 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-7">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to join?
            </h2>

            <p className="text-white/90 text-sm leading-6 max-w-xl">
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout.
            </p>
          </div>

          <a
            href="/register"
            className="shrink-0 bg-white text-[#20B5D0] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md transition duration-300"
          >
            Registration
          </a>

        </div>

      </div>
    </section>
  );
}