import { useState } from "react";

export default function AddManual({ onAdd }: { onAdd: (name: string, value: number) => void }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState<number | "">("");

  const handleAdd = () => {
    if (name && value !== "") {
      onAdd(name, Number(value));
      setName("");
      setValue("");
    }
  };

  return (
    <div className="mb-4 border rounded-xl p-4 flex flex-col gap-2">
      <h3 className="font-semibold text-md">Adicionar Produto Manual</h3>
      <input
        type="text"
        placeholder="Nome do produto"
        className="border rounded p-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="R$"
        className="border rounded p-1"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value) || "")}
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white rounded-xl py-2 font-semibold hover:bg-green-700 transition"
      >
        Adicionar
      </button>
    </div>
  );
}
