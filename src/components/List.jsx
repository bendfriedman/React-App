import { Card } from "./Card";
import { Link } from "react-router-dom";

export default function List({ cardData, setCardData }) {
  return (
    <div id="list">
      <div id="list-title">
        <input
          className="title-input"
          maxLength="30"
          placeholder="Your title here ..."
          data-form-type="other"
        />
      </div>
      <div id="list-items">
        {cardData.map((dataElement) => {
          return (
            <Link to={`/card/${dataElement.id}`} key={dataElement.id}>
              <Card
                dataElement={dataElement}
                cardData={cardData}
                setCardData={setCardData}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
