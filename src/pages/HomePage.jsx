import { BoardHeader } from "../components/BoardHeader";
import List from "../components/List";

export const HomePage = ({ cardData, setCardData }) => {
  return (
    <>
      <BoardHeader boardTitle={"Your Kanban Board"} />
      <div className="content-box">
        <section id="list-section">
          <List cardData={cardData} setCardData={setCardData} status="To Do" />
          <List
            cardData={cardData}
            setCardData={setCardData}
            status="In Progress"
          />
          <List cardData={cardData} setCardData={setCardData} status="Done" />
        </section>
      </div>
    </>
  );
};
