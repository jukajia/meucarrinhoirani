import ProductItem from "./ProductItem";

export default function CategoryList({
  categories,
  onChange
}: {
  categories: { name: string; items: string[] }[];
  onChange: (item: string, value: number) => void;
}) {
  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.name} className="mb-4 border rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-2">🛒 {cat.name}</h2>
          {cat.items.map((item) => (
            <ProductItem key={item} name={item} onChange={(value) => onChange(item, value)} />
          ))}
        </div>
      ))}
    </div>
  );
}
