import { Leftpane } from "./leftpane";
import "./dashboard.css";
import { Toppane } from "./toppane";
import { MiddlePane } from "./middlepane";
import { PlayerComponent } from "./PlayerComponent";
import React from "react";

// export class Dashboard extends React.Component {
//   return(){
export function Dashboard() {
  return (
    <div className="body">
      <Toppane />
      <Leftpane />
      <MiddlePane />
      <PlayerComponent />
    </div>
  );
}
