import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash"> # </span> {title}{" "}
        </h3>
      )}
    </div>
  );
}
export default SidebarOption;
