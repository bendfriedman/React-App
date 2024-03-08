import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export const ItemDetails = ({ cardData }) => {
  const { cardId } = useParams();
  const shownCard = cardData.find((card) => card.id == cardId);
  const nav = useNavigate();

  return (
    <div>
      <div>Card Details</div>
      <br />
      {/* <div>id: {shownCard.id} </div> */}
      <div>title: {shownCard.title} </div>
      <div>description: {shownCard.description} </div>
      <div>assignee: {shownCard.assignee} </div>
      <div>status: {shownCard.status} </div>
      <div>priority: {shownCard.priority} </div>
      <div>createdDate: {shownCard.createdDate} </div>
      <div>dueDate: {shownCard.dueDate} </div>
      <div>
        {/* <Link to="/card/2"> */}
        <button onClick={() => nav("/card/edit")}>Edit the Card Info</button>
        {/* </Link> */}
      </div>
    </div>
  );
};
