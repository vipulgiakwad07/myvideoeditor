import { BsMic } from "react-icons/bs";

import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSignal } from "react-icons/hi2";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineScissor } from "react-icons/ai";
// import ReactPlayer from "react-player";
// import { PlayerComponent } from "./PlayerComponent";
import "./middlepane.css";

export function MiddlePane() {
  const fl = { float: "left" };
  const text = { float: "left" };

  const navigate = useNavigate();

  const editorPage = () => {
    navigate("/editor");
  };

  return (
    <div className="mid-pane">
      <h1 style={fl}>
        Let's Create some <span>videos!</span>
      </h1>
      <div className="btn-mid">
        <button onClick={editorPage}>
          <AiOutlineScissor />
          Create Project
        </button>
        <button>
          <AiOutlineVideoCamera />
          Record Videos
        </button>
        <button>
          <HiOutlineSignal />
          Go Live
        </button>
        <button>
          <BsMic />
          Record Podcast
        </button>
      </div>

      {/*lowwermiddle pane */}

      <div className="low-mid-pane">
        <h1 style={text}>My recent videos</h1>
        {/*{/* <div className="vid-pl"> */}
        {/* <ReactPlayer
          url={"path/to/video"}
          controls={true}
          onPlay={() => console.log("video is playing")}
          onPause={() => console.log("video is paused")}
        /> */}
        {/* <div>
          {" "}
          <PlayerComponent />
        </div> */}
      </div>
    </div>
  );
}
