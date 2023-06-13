import "./sidebar.css";
import { FcSettings } from "react-icons/fc";
import { TiMediaFastForward } from "react-icons/ti";
import { MdAudiotrack } from "react-icons/md";
import { MdSubtitles } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { SiElement } from "react-icons/si";
import { GrTemplate } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <button>
          {" "}
          <CgMenu />{" "}
        </button>
      </div>
      <button>
        <FcSettings />
        Setting
      </button>
      <button>
        <TiMediaFastForward />
        Media
      </button>
      <button>
        <MdAudiotrack />
        Audio
      </button>
      <button>
        <MdSubtitles />
        Subtitles
      </button>
      <button>
        <CiText /> Text
      </button>
      <button>
        <SiElement />
        Elaments
      </button>
      <button>
        <GrTemplate /> Templates{" "}
      </button>
    </div>
  );
}
