import React from "react";
import GlobalStateProvider from "./store/GlobalStateProvider";

import { STUDENTS } from "./constants";
import GiveList from "./components/giveList";
import List from "./components/list";
import "./styles.css";

export default function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>682.19E</h1>
        <span className="desc">
          " The Best Group Ever " ( {STUDENTS.length} student )
        </span>
        <GiveList />
        <List />
      </div>
    </GlobalStateProvider>
  );
}
