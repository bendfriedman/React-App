export const Card = ({ dataElement, allData, setCardData }) => {
  // const [cardState, setCardState] = useState(cardData)

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
      <div id="name">{dataElement.title}</div>
      <button onClick={() => deleteAction(dataElement.id)}>Delete</button>
    </div>
  );
};
