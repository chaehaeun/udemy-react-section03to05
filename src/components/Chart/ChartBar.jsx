import React from "react";
import "./ChartBar.css";

export default function ChartBar(chartObj) {
  let barFillHeight = "0%";

  if (chartObj.maxValue > 0) {
    barFillHeight =
      Math.round((chartObj.value / chartObj.maxValue) * 100) + `%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{chartObj.label}</div>
    </div>
  );
}
