import React from "react";
import { JournalApp } from "../../JournalApp";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__side-bar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>Clau</span>
        </h3>
        <button className="btn">logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">new entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
