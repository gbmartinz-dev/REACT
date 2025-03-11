const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date(today));
}

export const Person = () => {
  const data = {
    name: "Elon Musk",
    avatar: "https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg",
    descricaoFoto: "Foto de Elon Musk",
    roles: ['CEO da Tesla', 'CEO da SpaceX']
  }

  const today: Date = new Date();

  return (
    // Tag Fragment serve como um elemento root para englobar outros elementos
    <>
      <h1 >Nome: {data.name} - {getWeekday(today)}</h1>
      <img 
      src={data.avatar} 
      alt={data.descricaoFoto}
      className="w-40 rounded-full" />
      <ul>
        <li>{data.roles[0]}</li>
        <li>{data.roles[1]}</li>
      </ul>
    </>
  );
}