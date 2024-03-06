import { Card } from "./Card";

export default function List({ data, deleteAction }) {
  return (
    <div id="list">
      <div id="list-title">
        <input
          id="title-input"
          maxlength="30"
          placeholder="Your title here ..."
          data-form-type="other"
        />
      </div>
      <div id="list-items">
        {data.map((dataElement) => {
          return <Card dataElement={dataElement} deleteAction={deleteAction} key={dataElement.id} />;
        })}
      </div>
    </div>
  );
}
