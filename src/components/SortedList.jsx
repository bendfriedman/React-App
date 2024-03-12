import React from "react";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function SortedList({ cardData, setCardData }) {
  const options = [
    { value: "priority", label: "Priority" },
    { value: "title", label: "Title" },
    { value: "status", label: "Status" },
    { value: "dueDate", label: "Due Date" },
  ];

  const sortBy = (value) => {
    console.log(value);
    if (value === "priority") {
      const priorityObj = {
        Low: 2,
        Medium: 1,
        High: 0,
      };
      const orderedCardData = [...cardData].sort((card1, card2) => {
        return priorityObj[card1.priority] - priorityObj[card2.priority];
      });
      setCardData(orderedCardData);
    } else if (value === "title") {
      const orderedCardData = [...cardData].sort((card1, card2) => {
        if (card1.title < card2.title) {
          return -1;
        }
        if (card1.title > card2.title) {
          return 1;
        }
        return 0;
      });
      setCardData(orderedCardData);
    } else if (value === "status") {
      const statusObj = {
        "To Do": 0,
        "In Progress": 1,
        Done: 2,
      };
      const orderedCardData = [...cardData].sort((card1, card2) => {
        return statusObj[card1.status] - statusObj[card2.status];
      });
      setCardData(orderedCardData);
    } else if (value === "dueDate") {
      const orderedCardData = [...cardData].sort((card1, card2) => {
        if (card1.dueDate < card2.dueDate) {
          return -1;
        }
        if (card1.dueDate > card2.dueDate) {
          return 1;
        }
        return 0;
      });
      setCardData(orderedCardData);
    }
  };
  return (
    <div id="list">
      <div id="list-title" className="select-dropdown-container">
        <h5>Sort by</h5>
        <Select
          options={options}
          onChange={(event) => sortBy(event.value)}
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: "#22272b",
              borderColor: "#9e9e9e",
              height: "10px",
              width: "150px",
              boxShadow: "none",
              fontSize: "10px",
              size: "10px",
              "&:hover": {
                borderColor: "#00d8ff",
              },
            }),
            valueContainer: (base) => ({
              ...base,
              height: "20px",
              padding: "0 6px",
              background: "#22272b",
            }),
            input: (base) => ({
              ...base,
              height: "10px",
              margin: "0px",
              padding: "0px",
            }),
            indicatorsContainer: (base) => ({
              ...base,
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "#grey",
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected ? "white" : "black",
              backgroundColor: state.isSelected ? "#22272b" : "	#22272b",
              "&:hover": {
                backgroundColor: "#22272b",
                color: "#b2b2b2",
              },
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color: "#00d8ff",
            }),
          }}
        ></Select>
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
