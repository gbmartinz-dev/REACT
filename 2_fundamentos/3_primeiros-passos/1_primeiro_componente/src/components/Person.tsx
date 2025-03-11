export const Person = () => {
  return (
    // Tag Fragment serve como um elemento root para englobar outros elementos
    <>
      <h1>Elon Musk</h1>
      <img src="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg" alt="Elon Musk" className="w-40 rounded-full" />
      <ul>
        <li>CEO da Tesla</li>
        <li>CEO da SpaceX</li>
        <li>CEO da ...</li>
      </ul>
      <p>Elon Reeve Musk é um empreendedor e filantropo sul-africano, canadense e americano. Ele é o fundador, CEO e CTO da SpaceX; CEO da Tesla Motors; vice-presidente da OpenAI; fundador e CEO da Neuralink; e co-fundador e presidente da SolarCity.</p>
    </>
  );
}