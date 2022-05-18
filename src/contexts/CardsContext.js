import { createContext, useState, useEffect } from "react";

const CardsContext = createContext(null);

function CardsProvider({ children }) {
  
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);

  useEffect(() => { 
    localStorage.setItem('cards', JSON.stringify(cards)); 
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

export { CardsContext, CardsProvider };
