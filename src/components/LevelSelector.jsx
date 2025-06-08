import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const levels = [
  { label: "Tronc Commun", path: "/niveau/tronc-commun" },
  { label: "1 ère Bac", path: "/niveau/1ere-bac" },
  { label: "2 ème Bac", path: "/niveau/2eme-bac" },
];

export const LevelSelector = () => {
  return (
    <section className="w-full py-12">
      <div className="w-full px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Titre + sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Commencez en choisissant votre niveau
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Tous les cours sont conformes au programme marocain
          </p>
        </motion.div>

        {/* Boutons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {levels.map((level) => (
            <motion.div
              key={level.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={level.path}
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg shadow-md text-center text-sm transition"
              >
                {level.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
