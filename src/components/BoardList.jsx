import Board from "./Board";
import { Link } from "react-router-dom";

export default function BoardList({ tagFilteredData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      {tagFilteredData.map((item) => (
        <Link to={`/board/${item.id}`}>
          <Board
            key={item.id}
            title={item.title}
            price={item.price}
            // image={item.image}
            image={item.image_path}
            date={item.date}
          />
        </Link>
      ))}
    </div>
  );
}
