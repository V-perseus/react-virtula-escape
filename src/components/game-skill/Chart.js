import React from "react";
import Chart from "react-google-charts";

const data = [
  ["skill", "Visitations", { role: "style" }],
  ["Negotiation", 37, "color: #76A7FA"],
  ["Problem Solving", 88, "color: #76A7FA"],
  ["Team Work", 22, "color: #76A7FA"],
  ["Communication", 31, "color: #76A7FA"],
  [
    "Collaboration",
    68,
    "color: #76A7FA"
  ]
];
export default class App extends Chart {
  render() {
    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={data} />
      </div>
    );
  }
}
