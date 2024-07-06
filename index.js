const heading = React.createElement("h1",{id:"heading"},"hello from react");
// console.log(heading);
const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},"child div"),React.createElement("h2",{id:"h2"},"h2 siblings"),heading]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);