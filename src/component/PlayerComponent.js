import ReactPlayer from "react-player";
import "./PlayerComponent.css";
import React, { useRef } from "react";
const VIDEO_PATH = " ";
export function PlayerComponent() {
  const playerRef = useRef(null);

  return (
    <div className="vid-pl">
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        width="200px"
        height="150px"
        border-radius="5px"
      />
      <div>
        <h6>Porject name</h6>
      </div>
    </div>
  );
}

// import ReactPlayer from "react-player";

//  class PlayerComponent extends Component {
//   render () {
//     return (
//       <div className='player-wrapper'>
//         <ReactPlayer
//           className='react-player'
//           url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
//           width='100%'
//           height='100%'
//         />
//       </div>
//     )
//   }
// }

// export PlayerComponent;
