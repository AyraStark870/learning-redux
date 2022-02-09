import React from "react";

export const JournalEntry = ({ x }) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://th.bing.com/th/id/OIP.ID2JBMGooIBUHo9hwT19dQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem i ab eveniet numquam doloremque veniam sequi tempore, ipsam
          reprehenderit earum id d
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
