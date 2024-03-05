import { Card } from "./Card";

export default function List({ data }) {
  return (
    <div id="list">
      <div id="list-title">title of the list</div>
      <div>
        {data.map((dataElement) => {
          return <Card dataElement={dataElement} key={dataElement.id} />;
        })}
      </div>
    </div>
  );
}
