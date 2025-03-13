const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date(today));
}

type Props = {
  name: string;
  avatar?: string;
  descricaoFoto: string;
  roles: string[];
}

export const Person = ({ name, avatar='https://img.freepik.com/vetores-premium/uma-pessoa-com-uma-camisa-azul-que-diz-o-nome-da-pessoa_1029948-7040.jpg?semt=ais_hybrid', descricaoFoto, roles }: Props) => {
  return (
    // Tag Fragment serve como um elemento root para englobar outros elementos
    <div className="p-3">
      <h1>{name}</h1>
      <img 
      src={avatar} 
      alt={descricaoFoto}
      className="w-40 rounded-full" />
      <ul>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
      </ul>
    </div>
  );
}