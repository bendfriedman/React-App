export const Card = ({ dataElement, allData, setCardData }) => {
  const deleteAction = (elementId) => {
    console.log(elementId, allData);
    const filteredData = allData.filter((card) => {
      if (card.id !== elementId) {
        return true;
      }
    });
    setCardData(filteredData);
  };

  const priorityColors = {
    lowColor: "#206e4e",
    mediumColor: "#805f02",
    highColor: "#ae2e23",
  };

  return (
    <div id="card">
      <div id="card-row-one">
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
        ></div>
        <button
          className="delete-btn"
          onClick={() => deleteAction(dataElement.id)}
        >
          X
        </button>
      </div>
      <div id="name">{dataElement.title}</div>
    </div>
  );
};
