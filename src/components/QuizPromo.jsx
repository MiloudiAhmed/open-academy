import { Star } from "lucide-react";
import Container from "./Container"; // adapte le chemin selon ta structure

const quizzes = [
  {
    title: "1 ère Bac_Français",
    teacher: "Toutes les filières | Antigone",
    image: "/quiz-francais.jpg",
  },
  {
    title: "Tronc Commun_Mathématiques",
    teacher: "Sciences Technologiques | 1 ordre dans IR",
    image: "/quiz-math.jpg",
  },
  {
    title: "2 ème Bac_SVA",
    teacher: "Sciences Agronomiques | Sciences Végétales et Animales",
    image: "/quiz-sva.jpg",
  },
  {
    title: "1 ère Bac_Physique et Chimie",
    teacher: "Sciences Physiques | Décloisonnée radioactive",
    image: "/quiz-radio.jpg",
  },
];

export const QuizPromo = () => {
  return (
    <section className="px-6 lg:px-16 py-12">
      <Container>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              Testez vos connaissances en 5 minutes chrono !
            </h2>
            <button className="text-base text-blue-700 font-medium hover:underline">
              Tout afficher
            </button>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {quizzes.map((quiz, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
              >
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  loading="lazy"
                  className="w-full h-44 object-contain p-2 bg-white"
                />

                <div className="p-4">
                  <h3 className="text-sm font-semibold">{quiz.title}</h3>
                  <p className="text-xs text-gray-600">{quiz.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
