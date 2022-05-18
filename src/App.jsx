import { useState } from "react";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";
import CardViewer from "./components/CardViewer";
import { CardsProvider } from "./contexts/CardsContext";
import "./App.css";

export default function App() {
  const [isViewerMode, setIsViewerMode] = useState(false);
  return (
    <CardsProvider>
      <div className="App">
        {!isViewerMode ? (
          <>
            <h1>Card Editor</h1>
            <Cards />
            <AddCard />
          </>
        ) : (
          <CardViewer />
        )}
        <hr />
        <button onClick={() => setIsViewerMode(!isViewerMode ? true : false)}>
          Go to {isViewerMode ? "Editor" : "Viewer"}
        </button>
      </div>
    </CardsProvider>
  );
}
