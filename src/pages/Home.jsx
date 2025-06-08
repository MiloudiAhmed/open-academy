import { Hero } from "../components/Hero";
import { LevelSelector } from "../components/LevelSelector";
import Navbar from "../components/Navbar";
import { QuizPromo } from "../components/QuizPromo";
import { SuggestedCourses } from "../components/SuggestedCourses";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Hero />
      <LevelSelector />
      <SuggestedCourses />
      <QuizPromo />
      {/* Footer */}
    </div>
  );
};
