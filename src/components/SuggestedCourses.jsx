import { Star } from "lucide-react";
import Container from "./Container"; // adapte le chemin selon ta structure
import { Link } from "react-router-dom";

const courses = [
  {
    title: "2 ème Bac_SVT",
    subject: "Sciences Physiques",
    teacher: "Pr. Smyel",
    rating: 4.9,
    reviews: 1241,
    image: "/svt.avif",
  },
  {
    title: "2 ème Bac_Mathématiques",
    subject: "Sciences Mathématiques (A / B)",
    teacher: "Pr. Adil",
    rating: 4.8,
    reviews: 928,
    image: "/math.jpg",
  },
  {
    title: "1 ère Bac_Histoire Géographie",
    subject: "Toutes les filières",
    teacher: "Pr. Elbagbouchi",
    rating: 4.7,
    reviews: 1111,
    image: "/histoire.avif",
  },
  {
    title: "1 ère Bac_Éducation Islamique",
    subject: "Toutes les filières",
    teacher: "Pr. Abzazi",
    rating: 4.8,
    reviews: 408,
    image: "/education-islamique.avif",
  },
  {
    title: "2 ème Bac_Physique et Chimie",
    subject: "Sciences Physiques",
    teacher: "Pr. Smdi",
    rating: 4.9,
    reviews: 1270,
    image: "/physique-chimie.avif",
  },
  {
    title: "2 ème Bac_Comptabilité et Math Financières",
    subject: "Sciences Économiques",
    teacher: "Pr. Ounacer",
    rating: 4.8,
    reviews: 1030,
    image: "/comptabilite.avif",
  },
  {
    title: "1 ère Bac_Arabe",
    subject: "Toutes les filières",
    teacher: "Pr. Oumziti",
    rating: 4.7,
    reviews: 142,
    image: "/arabe.avif",
  },
  {
    title: "1 ère Bac_Français",
    subject: "Toutes les filières",
    teacher: "Pr. Oumziti",
    rating: 4.9,
    reviews: 4570,
    image: "/francais.jpg",
  },
  {
    title: "Tronc Commun_Physique et Chimie",
    subject: "Sciences",
    teacher: "Pr. Outna",
    rating: 4.5,
    reviews: 963,
    image: "/tc-physique.jpg",
  },
  {
    title: "2 ème Bac_Sciences de l’ingénieur",
    subject: "Sciences Mathématiques (B)",
    teacher: "Pr. Moulod",
    rating: 4.6,
    reviews: 284,
    image: "/ingenieur.avif",
  },
  {
    title: "Tronc Commun_SVT",
    subject: "Sciences",
    teacher: "Pr. Smyel",
    rating: 4.8,
    reviews: 342,
    image: "/tc-svt.avif",
  },
  {
    title: "2 ème Bac_Philosophie",
    subject: "Toutes les filières",
    teacher: "Pr. Amrabet",
    rating: 4.7,
    reviews: 975,
    image: "/philosophie.avif",
  },
  // ➕ Tu peux ajouter plus de cours ici
];

export const SuggestedCourses = () => {
  return (
    <section className="px-6 lg:px-16 py-12">
      <Container>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Des cours qui pourraient vous intéresser...
            </h2>
            <Link
              to="/courses"
              className="text-sm md:text-base text-blue-700 font-medium hover:underline"
            >
              Tout afficher
            </Link>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    {course.subject} | {course.teacher}
                  </p>

                  <div className="flex items-center mt-2 text-sm text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                    <span className="ml-1 text-gray-600">
                      ({course.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
