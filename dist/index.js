"use strict";
let chart = document.getElementById("chart");
const data = [
    {
        day: "mon",
        ta: "m",
        amount: 17.45,
    },
    {
        day: "tue",
        ta: "t",
        amount: 34.91,
    },
    {
        day: "wed",
        ta: "w",
        amount: 52.36,
    },
    {
        day: "thu",
        ta: "th",
        amount: 31.07,
    },
    {
        day: "fri",
        ta: "f",
        amount: 23.39,
    },
    {
        day: "sat",
        ta: "s",
        amount: 43.28,
    },
    {
        day: "sun",
        ta: "su",
        amount: 25.48,
    },
];
const getMax = (arr, value) => {
    let max = 0;
    let map = arr.map((d) => d[value]);
    max = Math.max(...map);
    return max;
};
const renderBars = ({ data, value, label }) => {
    let mx = getMax(data, value);
    let renderTemplate = data.map((d) => {
        return `
      <div class="set">
      <div class="tooltip">
      <span class="tooltiptext">${d[value]}</span>
      </div>
      <div 
      class=${d[value] == mx ? "max-bar" : "bar"}
      style="height: ${d[value] * 2}px;"></div>
      <p class="labels">${d[label]}</p>
      </div>
      `;
    });
    chart.innerHTML = renderTemplate.join("");
};
renderBars({
    data: data,
    value: "amount",
    label: "day",
});
