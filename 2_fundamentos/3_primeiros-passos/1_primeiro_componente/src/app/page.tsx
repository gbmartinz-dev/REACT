import { GeoForm } from "@/components/GeoForm";

// Criamos a nossa primeira função de componente que retorna um JSX
/* function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>
      <p>Meu primeiro componente</p>
    </div>
  );
}*/

// Temos duas maneiras de criar uma função
const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>
      <p>Meu primeiro componente</p>

      <GeoForm />
    </div>
  );
}

// Exportamos o Componente
export default Page;