import { useState, useContext, useRef } from "react";
import { CardsContext } from "../contexts/CardsContext";

let counter = 0;
export default function AddCard() {
  const { cards, setCards } = useContext(CardsContext);
  const [inputFields, setInputFields] = useState([]);
  const focusInputField = useRef();

  const handleChange = (e) =>
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
      id: `${counter++}${Math.random()}`,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    inputFields.frontCard ? setCards([...cards, inputFields]) : focusInputField.current.focus();
    setInputFields({frontCard: '', backCard: ''});
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <input type="text" placeholder="Front of Card" name="frontCard" value={inputFields.frontCard} ref={focusInputField}/>
      <input type="text" placeholder="Back of Card" name="backCard" />
      <input type="submit" value="Add Card" /><br />
    </form>
  );
}
