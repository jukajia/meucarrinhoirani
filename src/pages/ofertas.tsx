export default function Ofertas({ setPage }: { setPage: Function }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Ofertas</h1>
        <button onClick={() => setPage("home")} className="text-sm text-blue-500">
          ← Voltar
        </button>
      </div>
      <iframe
        src="https://superirani.com.br/ofertas"
        className="flex-1 w-full border-none"
        title="Ofertas Irani"
      />
    </div>
  );
}
