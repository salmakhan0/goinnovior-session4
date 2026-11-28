import Courses from "../../components/Home/Courses";
import Explore from "../../components/Home/Explore";
import Hero from "../../components/Home/Hero";
import Reviews from "../../components/Home/Reviews";
import StudentsSection from "../../components/Home/StudentsSector";

export default function Home() {
  return (
    <>
      <Hero />
      <Courses/>
      <Explore/>
      <StudentsSection/>
      <Reviews/>
    </>
  );
}