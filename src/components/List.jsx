import { useState } from "react";
import { Card } from "./Card";

export default function List({ data }) {
  const [cardData, setCardData] = useState(data);

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
            <Card
              dataElement={dataElement}
              allData={cardData}
              setCardData={setCardData}
              key={dataElement.id}
            />
          );
        })}
      </div>
    </div>
  );
}
