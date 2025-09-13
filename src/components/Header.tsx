import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="w-full p-4 bg-green-700 text-white flex justify-center font-bold text-xl rounded-b-2xl shadow-md"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
    >
      Meu Carrinho Irani
    </motion.div>
  );
}
