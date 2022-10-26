import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  // 데이터포인트의 밸류값만 가져와서 어레이를 만든 것
  const totalMax = Math.max(...dataPointValues);
  // 스프레드 연산자로 배열을 펼쳐서 max 값을 찾는 것
  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.id}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
}
