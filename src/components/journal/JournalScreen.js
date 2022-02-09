import React from "react";
import { NoteScrenn } from "../notes/NoteScrenn";
//import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <NoteScrenn />
      </main>
    </div>
  );
};
