export const Square = () => {
  return (
    <div className="w-52 h-52 bg-red-700 text-white">
      Texto qualquer inspirador
    </div>
  );
}

// Exportando através do export default Square.
/* const Square = () => {
  return (
    <div className="w-52 h-52 bg-red-700 text-white">
      Texto qualquer inspirador
    </div>
  );
} */

// Exportando sem o default.
export const Circle = () => {
  return (
    <div className="w-52 h-52 bg-blue-700 text-white rounded-full">
      Texto qualquer inspirador
    </div>
  );
}

export default Square;