import { useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
  {
    image: "/pics/hero.png",
    title: "Get Started Digital Learning",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "/pics/hero.png",
    title: "Upgrade Your Skills Today",
    description:
      "Learn new skills, explore new opportunities and build a better future with our learning platform.",
  },
  {
    image: "/pics/hero.png",
    title: "Learn Anytime Anywhere",
    description:
      "Discover exciting courses and improve your knowledge with flexible online learning.",
  },
  {
    image: "/pics/hero.png",
    title: "Build Your Digital Future",
    description:
      "Start your journey with expert-led courses and practical learning experiences.",
  },
  {
    image: "/pics/hero.png",
    title: "Explore New Opportunities",
    description:
      "Unlock your potential and achieve your goals through quality digital education.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6 lg:px-8">

      <div className="relative h-105 overflow-hidden rounded-2xl sm:h-120 md:h-125 lg:h-140">

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-5 text-center sm:px-10 md:px-16">

              <div className="max-w-3xl text-white">

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
                  {slide.description}
                </p>

                <Link
                  to="/courses"
                  className="mt-7 inline-block rounded-md bg-cyan-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 sm:px-8 sm:py-4"
                >
                  Get Started
                </Link>

              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-cyan-500 sm:left-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-cyan-500 sm:right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-cyan-400"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}