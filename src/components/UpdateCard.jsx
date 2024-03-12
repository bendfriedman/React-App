import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const UpdateCard = ({ cardData, setCardData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
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
    setStatus(shownCard.status);
    setPriority(shownCard.priority);
    setCreatedDate(shownCard.createdDate);
    setDueDate(shownCard.dueDate);
  }, []);

  const handleUpdateCard = (event) => {
    // const today = new Date();
    // const month = today.getMonth() + 1;
    // const year = today.getFullYear();
    // const date = today.getDate();
    // const currentDate = year + "/" + month + "/" + date;
    event.preventDefault();

    const duplicateCardData = cardData.map((card) => {
      if (card.id === cardId) {
        const updatedCard = {
          id: card.id,
          title: title,
          description: description,
          assignee: assignee,
          status: status,
          priority: priority,
          createdDate: card.createdDate,
          dueDate: dueDate,
        };
        return updatedCard;
      }
      return card;
    });

    setCardData(duplicateCardData);

    nav(`/card/${cardId}`);
  };

  const handleClickOutside = (e) => {
    if (e.currentTarget != e.target) return;
    nav(`/card/${cardId}`);
  };

  return (
    <>
      <div className="popup" onClick={handleClickOutside}>
        <div className="inside-popup">
          <div className="popup-header">
            <h2>CREATE NEW CARD</h2>
            <button className="delete-btn b" onClick={() => nav("/")}>
              X
            </button>
          </div>
          <form onSubmit={handleUpdateCard}>
            <div className="popup-form-container">
              <div className="inline-container"></div>
              <div className="inline-container">
                <label className="popup-title-input">
                  Title
                  <br />
                  <input
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Description (max. 100 characters)
                  <br />
                  <textarea
                    id="description-textarea"
                    placeholder="Description ..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows="4"
                    cols="40"
                    maxlength="100"
                  ></textarea>
                </label>
              </div>
              <div className="inline-container">
                <label>
                  <br />
                  Assignee
                  <br />
                  <input
                    placeholder="assignee"
                    type="text"
                    value={assignee}
                    onChange={(event) => setAssignee(event.target.value)}
                  />
                </label>

                <label>
                  <br />
                  Status
                  <br />
                  <select
                    name="status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </label>
                <label>
                  <br />
                  Priority
                  <br />
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
                  <br />
                  Due Date
                  <br />
                  <input
                    name="CreatedDate"
                    type="date"
                    placeholder="Created Date"
                  />
                </label>
              </div>
              <div className="popup-submit-btn-container">
                <button id="popup-submit-btn" type="submit">
                  Finish Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
