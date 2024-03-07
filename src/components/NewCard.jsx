import { Link } from "react-router-dom";

export const NewCard = ({ cardData, setCardData }) => {
  return (
    <>
      <div id="popup">
        <div id="inside-popup">
          <Link to="/">X</Link>
          <form>
            <label>
              Title
              <input placeholder="Title" type="text" />
            </label>
            <label>
              description
              <input placeholder="Description" type="text" />
            </label>
            <label>
              Assignee
              <input placeholder="Assignee" type="text" />
            </label>
            <label>
              Status
              <select name="Status">
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <label>
              Priority
              <select name="Priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            {/* <label>
                Created Date
                <input name="CreatedDate"
                type="number"
                placeholder="Created Date"
            </label> */}
          </form>
        </div>
      </div>
    </>
  );
};

//   <div>title:  </div>
//   <div>description:  </div>
//   <div>assignee:  </div>
//   <div>status:  </div>
//   <div>priority: </div>
//   <div>createdDate:  </div>
//   <div>dueDate: </div>
// </div>;
