import { Card } from "./Card";
import { Link } from "react-router-dom";

export default function List({ cardData, setCardData, status }) {
  return (
    <div id="list">
      <div id="list-title">
        <h5>{status}</h5>
      </div>
      <div id="list-items">
        {cardData.map((dataElement) => {
          if (dataElement.status === status) {
            return (
              <Link to={`/card/${dataElement.id}`} key={dataElement.id}>
                <Card
                  dataElement={dataElement}
                  cardData={cardData}
                  setCardData={setCardData}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
