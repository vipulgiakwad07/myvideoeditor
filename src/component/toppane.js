// import { AiFillFund } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./toppane.css";
// import { GoSearch } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import ReactSearchBox from "react-search-box";

export function Toppane() {
  return (
    <div className="top-pane">
      {/* left pane */}

      <div className="top-left-pane">
        {/* <input type="text" valu="search"></input> */}
        <ReactSearchBox placeholder="Search" value="Doe" />
      </div>

      {/* right pane */}

      <div className="top-right-pane">
        <button className="btn-up ">Upgrade</button>
        <button className="btn-inv ">invite</button>
        <button className="qu-logo">
          <AiOutlineQuestionCircle />
        </button>
        <button className="bell-logo">
          {" "}
          <AiOutlineBell />{" "}
        </button>
        <button className="dp-img">DP</button>
      </div>
    </div>
  );
}
