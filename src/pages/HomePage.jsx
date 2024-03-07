import List from "../components/List";
import { NewCard } from "../components/NewCard";

export const HomePage = ({ cardData, setCardData }) => {
  return (
    <>
      <section id="board-header">
        <h3>Your Kanban Board</h3>
      </section>
      <section id="list-section">
        <List cardData={cardData} setCardData={setCardData} />

        <NewCard cardData={cardData} setCardData={setCardData} />
      </section>
    </>
  );
};
