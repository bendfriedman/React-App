export const Card = ({ dataElement, cardData, setCardData }) => {
  const deleteAction = (elementId) => {
    const filteredData = cardData.filter((card) => {
      if (card.id !== elementId) {
        return true;
      }
    });
    setCardData(filteredData);
  };

  return (
    <div id="card">
      <div id="card-row-one">
        <div
          className={`priority-label ${dataElement.priority.toLowerCase()}`}
        ></div>
        <button
          className="delete-btn b"
          onClick={(event) => {
            event.preventDefault();
            deleteAction(dataElement.id);
          }}
        >
          X
        </button>
      </div>
      <div id="name">{dataElement.title}</div>
    </div>
  );
};
