const courses = [
  {
    title: "Fundamental Of UI/UX Design",
    image: "/pics/pic1.png",
  },
  {
    title: "Javascript Basic to advanced",
    image: "/pics/pic2.png",
  },
  {
    title: "Fullstack Web Development",
    image: "/pics/pic3.png",
  },
  {
    title: "Digital Marketing",
    image: "/pics/pic4.png",
  },
  {
    title: "Photography Basic Rules",
    image: "/pics/pic5.png",
  },
  {
    title: "Motion Graphics",
    image: "/pics/pic6.png",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-white text-gray-800 py-16 px-5 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Popular Courses
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-7">
            It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">

          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-5 items-center sm:items-start"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full sm:w-44 md:w-48 aspect-square object-cover rounded-md"
              />

              <div className="flex-1 w-full">
                <h3 className="text-xl font-bold mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mb-3">
                  Some quick example text to build on the card title
                  and make up the bulk of the card.
                </p>

                <p className="text-sky-500 font-bold">
                  Price : 20$
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md transition">
            See More Courses
          </button>
        </div>

      </div>
    </section>
  );
}