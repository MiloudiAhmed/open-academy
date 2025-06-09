import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "./Container";
import { UserPlus } from "lucide-react"; // 🔔 à placer en haut du fichier

export const CallToAction = () => {
  return (
    <section className="px-6 lg:px-16 py-12">
      <Container>
        <div className="max-w-[1440px] mx-auto bg-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-200 px-6 py-10 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Texte */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Pas encore inscrit ?
            </h2>

            <p className="text-base md:text-lg text-gray-800 mb-4">
              Rejoignez{" "}
              <span className="text-blue-700 font-semibold">OpenAcademy</span>{" "}
              gratuitement et débloquez toutes les fonctionnalités :
            </p>

            <ul className="text-sm md:text-base text-blue-700 font-medium list-disc list-inside space-y-1 mb-6">
              <li>🔖 Enregistrez vos cours préférés</li>
              <li>📈 Suivez vos progrès au fil du temps</li>
              <li>💬 Échangez directement avec les professeurs</li>
            </ul>

            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl shadow-md hover:bg-blue-800 transition duration-300 w-full sm:w-auto"
            >
              <UserPlus className="w-4 h-4 md:w-5 md:h-5" />
              <span>Créer mon compte gratuitement</span>
            </Link>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/cta-illustration.avif" // ✅ mets ici ton vrai nom d’image
              alt="Illustration inscription"
              className="max-w-[320px] w-full object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
