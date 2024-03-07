import { useParams } from "react-router-dom";

export const ItemDetails = ({ cardData }) => {
  const { cardId } = useParams();
  const shownCard = cardData.find((card) => card.id == cardId);

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
    </div>
  );
};
