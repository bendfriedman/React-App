import React from "react";
import { Card } from "./Card";
import { useEffect, useState } from "react";



export default function SortedList({cardData, setCardData}) {
const [priorityFilter, setPriorityFilter] = useState ("");
const [dueDateFilter, setDueDateFilter] = useState ("");
const [titleFilter, setTitleFilter] = useState ("")
const [statusFilter, setStatusilter] = useState ("")

  return ( <div>SortedList</div> 
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
  )
}
