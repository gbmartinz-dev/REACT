import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";

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
      <Person  
        name="Elon Musk"
        avatar="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg"
        descricaoFoto="Foto de Elon Musk"
        roles={['CEO da Tesla', 'CEO da SpaceX']}
      />
      <Person  
        name="Jeff Bezos"
        avatar="https://cdn.prod.website-files.com/62e89931273b5c21be76c486/645aabd8f6bb3d0f962d0cce_jeff-bezos-fundador-amazon-foto-divulgacao.jpg"
        descricaoFoto="Foto de Jeff Bezos"
        roles={['CEO da Amazon', 'CEO da Blue Origin']}
      />
    </div>
  );
}

// Exportamos o Componente
export default Page;