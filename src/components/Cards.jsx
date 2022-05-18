import { useContext } from "react";
import { CardsContext } from "../contexts/CardsContext";

export default function Cards() {
  const { cards, setCards } = useContext(CardsContext);
  const handleDelete = (e) => {
    setCards(cards.filter((card) => card.id !== e.target.id));
    
  };

  return (
    <>
      {cards.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card.id}>
                <td>{card.frontCard}</td>
                <td>{card.backCard}</td>
                <td>
                  <button id={card.id} onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
