export default function Footer({ total, itens }: { total: number; itens: number }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between font-bold text-lg shadow-inner">
      <span>Total: R$ {total.toFixed(2)}</span>
      <span>Itens: {itens}</span>
    </div>
  );
}
