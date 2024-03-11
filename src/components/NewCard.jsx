import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const NewCard = ({ cardData, setCardData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");
  const [createdDate] = useState(new Date().toLocaleDateString());
  const [dueDate, setDueDate] = useState("");
  const nav = useNavigate();

  const handleCreateCard = (event) => {
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
      status,
      priority,
      createdDate: currentDate,
      dueDate,
      id: cardData.length + 1,
    };

    setCardData([...cardData, newCard]);

    nav("/");
  };

  const handleClickOutside = (e) => {
    if (e.currentTarget != e.target) return;

    nav("/");
  };

  return (
    <>
      <div className="popup" onClick={handleClickOutside}>
        <div className="inside-popup">
          <form onSubmit={handleCreateCard}>
            <h1>CREATE NEW CARD</h1>
            <br />
            <div className="inline-container1">
              <label>
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
                Description
                <br />
                <textarea
                  id="description-textarea"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows="4"
                  cols="30"
                ></textarea>
              </label>
            </div>
            <div className="inline-container2">
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
            <button id="popup-submit-btn" type="submit">
              Create
            </button>
            <button id="popup-close-btn" onClick={() => nav("/")}>
              X
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
