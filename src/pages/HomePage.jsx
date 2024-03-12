import { BoardHeader } from "../components/BoardHeader";
import List from "../components/List";
import SortedList from "../components/SortedList";

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
          <SortedList
            className="sorted-list"
            cardData={cardData}
            setCardData={setCardData}
          />
        </section>
      </div>
    </>
  );
};
