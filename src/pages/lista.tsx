import { useState } from "react";
import CategoryList from "../components/CategoryList";
import AddManual from "../components/AddManual";
import Footer from "../components/Footer";

const categories = [
  { name: "Mercearia", items: ["Arroz", "Macarrão", "Café"] },
  { name: "Padaria", items: ["Pão francês", "Cuca", "Bolacha"] },
  { name: "Confeitaria", items: ["Bolo", "Torta", "Cupcake"] },
  { name: "Açougue", items: ["Carne bovina", "Frango", "Frios"] },
];

export default function Lista({ setPage }: { setPage: Function }) {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const handleChange = (item: string, value: number) => {
    setCart((prev) => ({ ...prev, [item]: value }));
  };

  const handleAddManual = (name: string, value: number) => {
    setCart((prev) => ({ ...prev, [name]: value }));
  };

  const total = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full max-w-md p-4 pb-24">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Minha Lista</h1>
        <button onClick={() => setPage("home")} className="text-sm text-blue-500">
          ← Voltar
        </button>
      </div>

      <CategoryList categories={categories} onChange={handleChange} />
      <AddManual onAdd={handleAddManual} />
      <Footer total={total} itens={Object.keys(cart).length} />
    </div>
  );
}
