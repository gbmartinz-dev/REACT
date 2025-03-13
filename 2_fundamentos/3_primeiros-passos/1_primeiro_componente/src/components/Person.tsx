const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date(today));
}

type Props = {
  name: string;
  avatar: string;
  descricaoFoto: string;
  roles: string[];
}

export const Person = (props: Props) => {
  return (
    // Tag Fragment serve como um elemento root para englobar outros elementos
    <div className="p-3">
      <h1 >Nome: {props.name}</h1>
      <img 
      src={props.avatar} 
      alt={props.descricaoFoto}
      className="w-40 rounded-full" />
      <ul>
        <li>{props.roles[0]}</li>
        <li>{props.roles[1]}</li>
      </ul>
    </div>
  );
}