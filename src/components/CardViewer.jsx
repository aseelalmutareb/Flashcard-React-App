import React, { useContext, useState } from "react";
import { CardsContext } from "../contexts/CardsContext";

export default function CardViewer() {
  const { cards } = useContext(CardsContext);
  const [index, setIndex] = useState(0);

  return (
    <>
      <h1>Card Viewer</h1>
      <div className="card">
        {cards[index].frontCard}
      </div>
      <button
          onClick={() =>
            setIndex((prev) => {
              if (prev === cards.length - 1) return 0;
              return ++prev;
            })
          }
        >
          Next Card
        </button>
    </>
  );
}
