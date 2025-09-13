import { useState } from "react";

export default function ProductItem({ name, onChange }: { name: string; onChange: (value: number) => void }) {
  const [value, setValue] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value) || 0;
    setValue(val);
    onChange(val);
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <span>{name}</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="R$"
          className="w-20 border rounded p-1 text-right"
          value={value === 0 ? "" : value}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}
