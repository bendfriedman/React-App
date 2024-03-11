import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { BoardHeader } from "../components/BoardHeader";

export const ItemDetails = ({ cardData }) => {
  const { cardId } = useParams();
  const shownCard = cardData.find((card) => card.id == cardId);
  const nav = useNavigate();

  return (
    <>
      <BoardHeader boardTitle={`Card Details - "${shownCard.title}"`} />
      <div className="content-box card-details">
        <table>
          {/* <tr>
            <td>Card-ID:</td>
            <td>{shownCard.id}</td>
          </tr> */}
          <tr>
            <td className="b">Title:</td>
            <td>{shownCard.title}</td>
          </tr>
          <tr>
            <td className="b">Description:</td>
            <td>{shownCard.description}</td>
          </tr>
          <tr>
            <td className="b">Assignee:</td>
            <td>{shownCard.assignee}</td>
          </tr>
          <tr>
            <td className="b">Status:</td>
            <td>{shownCard.status}</td>
          </tr>
          <tr>
            <td className="b">Priority:</td>
            <td className="details-priority">
              <div>{shownCard.priority}</div>
              <div
                className={`priority-label ${shownCard.priority.toLowerCase()}`}
              ></div>
            </td>
          </tr>
          <tr>
            <td className="b">CreatedDate:</td>
            <td>{shownCard.createdDate}</td>
          </tr>
          <tr>
            <td className="b">DueDate:</td>
            <td>{shownCard.dueDate}</td>
          </tr>
        </table>

        <div>
          <Link to={`/card-edit/${shownCard.id}`}>
            <button id="edit-card-btn">Edit the Card Info</button>
          </Link>
        </div>
      </div>
    </>
  );
};
