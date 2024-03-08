import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const UpdateCard = ({ cardData, setCardData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [cardStatus, setCardStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");
  const [createdDate, setCreatedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [dueDate, setDueDate] = useState("");
  const nav = useNavigate();
  const { cardId } = useParams();

  useEffect(() => {
    const shownCard = cardData.find((card) => {
      if (card.id == cardId) {
        return true;
      }
    });

    setTitle(shownCard.title);
    setDescription(shownCard.description);
    setAssignee(shownCard.assignee);
    setCardStatus(shownCard.cardStatus);
    setCreatedDate(shownCard.createdDate);
    setDueDate(shownCard.dueDate);
  }, []);

  const handleUpdateCard = (event) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = year + "/" + month + "/" + date;
    event.preventDefault();

    const newCard = {
      title,
      description,
      assignee,
      cardStatus,
      priority,
      createdDate,
      dueDate,
      id: cardId,
    };

    setCardData([...cardData, newCard]);

    nav("/");
  };

  const handleClickOutside = (e) => {
    if (e.currentTarget != e.target) return;
    nav(`/card/${cardId}`);
  };

  return (
    <>
      <div className="popup" onClick={handleClickOutside}>
        <div className="inside-popup">
          <form onSubmit={handleUpdateCard}>
            <h1>UPDATE CARD</h1>
            <label>
              Title
              <input
                placeholder="Title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label>
              description
              <input
                placeholder="Description"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <label>
              Assignee
              <input
                placeholder="Assignee"
                type="text"
                value={assignee}
                onChange={(event) => setAssignee(event.target.value)}
              />
            </label>
            <label>
              Status
              <select
                name="Status"
                value={cardStatus}
                onChange={(event) => setCardStatus(event.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <label>
              Priority
              <select
                name="Priority"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <label>
              Due Date
              <input
                name="CreatedDate"
                type="date"
                placeholder="Created Date"
              />
            </label>
            <button type="submit">Create</button>
            <button onClick={() => nav("/")}>X</button>
          </form>
        </div>
      </div>
    </>
  );
};
