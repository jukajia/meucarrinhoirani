import { useState } from "react";

const categories = [
  {
    name: "Mercearia",
    items: ["Arroz", "Macarrão", "Café"]
  },
  {
    name: "Padaria",
    items: ["Pão francês", "Cuca", "Bolacha"]
  },
  {
    name: "Confeitaria",
    items: ["Bolo", "Torta", "Cupcake"]
  },
  {
    name: "Açougue",
    items: ["Carne bovina", "Frango", "Frios"]
  }
];

export default function Lista({ setPage }: { setPage: Function }) {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const handleChange = (item: string, value: number) => {
    setCart((prev) => ({ ...prev, [item]: value }));
  };

  const total = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full max-w-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Minha Lista</h1>
        <button onClick={() => setPage("home")} className="text-sm text-blue-500">
          ← Voltar
        </button>
      </div>

      {categories.map((cat) => (
        <div key={cat.name} className="mb-4 border rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-2">🛒 {cat.name}</h2>
          {cat.items.map((item) => (
            <div key={item} className="flex justify-between items-center mb-2">
              <span>{item}</span>
              <input
                type="number"
                placeholder="R$"
                className="w-20 border rounded p-1 text-right"
                onChange={(e) => handleChange(item, parseFloat(e.target.value) || 0)}
              />
            </div>
          ))}
        </div>
      ))}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between font-bold text-lg">
        <span>Total: R$ {total.toFixed(2)}</span>
        <span>Itens: {Object.keys(cart).length}</span>
      </div>
    </div>
  );
}
