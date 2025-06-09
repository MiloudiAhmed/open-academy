import { motion } from "framer-motion";
import Container from "./Container";
import { Link } from "react-router-dom"; // ✅ à ajouter en haut
const quizzes = [
  {
    title: "1 ère Bac_Français",
    teacher: "Toutes les filières | Antigone",
    image: "/quiz-francais.avif",
  },
  {
    title: "Tronc Commun_Mathématiques",
    teacher: "Sciences Technologiques | 1 ordre dans IR",
    image: "/quiz-math.avif",
  },
  {
    title: "2 ème Bac_SVA",
    teacher: "Sciences Agronomiques | Sciences Végétales et Animales",
    image: "/quiz-sva.avif",
  },
  {
    title: "1 ère Bac_Physique et Chimie",
    teacher: "Sciences Physiques | Décloisonnée radioactive",
    image: "/quiz-radio.avif",
  },
];

export const QuizPromo = () => {
  return (
    <section className="px-6 lg:px-16 py-16">
      <Container>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Testez vos connaissances en 5 minutes chrono !
            </h2>
            <Link
              to="/quizzes"
              className="text-base text-blue-700 font-medium hover:underline hover:text-blue-800 transition"
            >
              Tout afficher
            </Link>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-md transition bg-white"
              >
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {quiz.title}
                  </h3>
                  <p className="text-sm text-gray-600">{quiz.teacher}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
