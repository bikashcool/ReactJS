const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From Bikash To React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello This is from h1 tag"),
    React.createElement("h3", {}, "Hello This is from h3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello This is from h1 tag"),
    React.createElement("h3", {}, "Hello This is from h3 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
