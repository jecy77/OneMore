import Board from "./Board";

export default function BoardList({ sortedData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortedData.map((item) => (
        <Board
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          date={item.date}
        />
      ))}
    </div>
  );
}
