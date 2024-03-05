import { useState } from "react";

export const Card = ({ dataElement }) => {
  const priorityColors = {
    lowColor: "green",
    mediumColor: "yellow",
    highColor: "red",
  };

  const [labelColor, setLabelColor] = useState("");

  // if (dataElement.priority === "Low") {
  //   setLabelColor(priorityColors.lowColor);
  // } else if (dataElement.priority === "Medium") {
  //   setLabelColor(priorityColors.mediumColor);
  // } else {
  //   setLabelColor(priorityColors.highColor);
  // }

  return (
    <div id="card">
      <div id="priority-label" style={{ backgroundColor: { labelColor } }}>
        {dataElement.priority}
      </div>
      <div id="name">Name: {dataElement.title}</div>
    </div>
  );
};
