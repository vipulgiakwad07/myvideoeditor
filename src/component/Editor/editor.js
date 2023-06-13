import React from "react";
import { VideoEditor } from "./VideoEditor";
import { Sidebar } from "./sidebar";

export class Editor extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <VideoEditor />
      </div>
    );
  }
}
