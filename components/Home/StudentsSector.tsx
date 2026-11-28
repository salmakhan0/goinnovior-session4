
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const students = [
  {
    name: "Awlad Hossain",
    role: "UI/UX Designer",
    image: "/pics/stu1.png",
  },
  {
    name: "Jannatul Islam",
    role: "Motion Design",
    image: "/pics/stu2.png",
  },
  {
    name: "Imran Hossain",
    role: "Graphic Designer",
    image: "/pics/stu3.png",
  },
  {
    name: "Nishi Akter",
    role: "Web Developer",
    image: "/pics/stu4.png",
  },
];

const testimonials = [
  {
    name: "Awlad Hossain",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 3,
    feedback:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    name: "Shanto Akter",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    feedback:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];

export default function StudentsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Students Section */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Meet Our Successful
              <br />
              Students
            </h2>
            <p className="mt-3 max-w-md text-xs leading-6 text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          
{/* Student Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

  {students.map((student) => (
    <div
      key={student.name}
      className="w-full overflow-hidden border border-gray-200 bg-white rounded-sm transition-all duration-300 hover:shadow-md"
    >
      {/* Student Image */}
      <div className="w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-full object-cover object-top block"
        />
      </div>

      {/* Student Information */}
      <div className="flex flex-col items-center justify-center text-center px-2 py-3 min-h-14.5">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">
          {student.name}
        </h3>

        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
          {student.role}
        </p>
      </div>
    </div>
  ))}

</div>

{/* View All */}
<div className="mt-5 text-center">
  <Link
    to="/students"
    className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold px-6 py-2.5 rounded-sm"
  >
    View All
  </Link>
</div>
</div>

        {/* Testimonials Section */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Some Students Feedback
            </h2>
            <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-gray-500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-sm border border-gray-200 p-5 transition hover:shadow-md sm:p-6"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <Quote className="h-7 w-7 fill-gray-300 text-gray-300" />

                    <div className="flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs leading-6 text-gray-500">
                    {item.feedback}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              aria-label="Previous feedback"
              className="absolute -left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-sky-100 text-sky-500 shadow-sm hover:bg-sky-500 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              aria-label="Next feedback"
              className="absolute -right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm hover:bg-sky-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
