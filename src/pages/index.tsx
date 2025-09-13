import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [page, setPage] = useState<"home" | "lista" | "ofertas">("home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {page === "home" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8 w-full max-w-sm"
        >
          <div className="text-3xl font-bold text-green-700 text-center">
            Irani Supermercado
          </div>

          <button
            onClick={() => setPage("lista")}
            className="w-full py-6 rounded-2xl bg-green-600 text-white text-xl font-semibold shadow-md hover:bg-green-700 transition"
          >
            🛒 Lista de Compras
          </button>

          <button
            onClick={() => setPage("ofertas")}
            className="w-full py-6 rounded-2xl bg-red-600 text-white text-xl font-semibold shadow-md hover:bg-red-700 transition"
          >
            💸 Ofertas
          </button>
        </motion.div>
      )}

      {page === "lista" && <Lista setPage={setPage} />}
      {page === "ofertas" && <Ofertas setPage={setPage} />}
    </div>
  );
}

// Importar componentes abaixo
import Lista from "./lista";
import Ofertas from "./ofertas";
