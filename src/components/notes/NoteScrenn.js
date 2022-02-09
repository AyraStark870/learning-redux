import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScrenn = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://th.bing.com/th/id/OIP.xYfATGNVVV6XLuKNubNCxgHaE8?w=273&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
