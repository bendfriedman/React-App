import { useState } from "react";

export const Card = ({ dataElement, deleteAction }) => {
  const priorityColors = {
    lowColor: "green",
    mediumColor: "yellow",
    highColor: "red",
  };

  return (
    <div id="card">
      <div
        id="priority-label"
        style={{
          backgroundColor:
            dataElement.priority === "Low"
              ? priorityColors.lowColor
              : dataElement.priority === "Medium"
              ? priorityColors.mediumColor
              : priorityColors.highColor,
        }}
      >
        {dataElement.priority}
      </div>
      <div id="name">Title: {dataElement.title}</div>
      <button onClick={() => deleteAction(dataElement.id)}>Delete</button>
    </div>
  );
};
