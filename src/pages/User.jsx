import { BoardHeader } from "../components/BoardHeader";

export const User = () => {
  return (
    <div>
      <BoardHeader boardTitle={`User - "user not found"`} />
      <div className="content-box">
        <div>user not found</div>
      </div>
    </div>
  );
};
