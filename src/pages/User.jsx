import { BoardHeader } from "../components/BoardHeader";
import coolGif from "../assets/images/webdev.gif"

export const User = () => {
  return (
    <div>
      <BoardHeader boardTitle={`Ben Fried`} />
      <div className="content-box">
        <div>
          <img src={coolGif} alt="web developer" />
          <br />
          Senior Web Developer</div>
      </div>
    </div>
  );
};
