const root = document.getElementById("root");

let el = (type, attrs = {}, children) => {
  if (!type) throw new Error("unexpected type");

  switch (type) {
    case "div":
      return new DivElement(type, attrs, children);
    case "span":
      return new SpanElement(type, attrs, children);
    case "form":
      return new FormElement(type, attrs, children);
    case "br":
      return new BrElement(type, attrs, children);
    case "label":
      return new LabelElement(type, attrs, children);
    case "input":
      return new InputElement(type, attrs, children);
    case "li":
      return new LiElement(type, attrs, children);
    case "ul":
      return new UlElement(type, attrs, children);
    default:
      throw new Error("unexpected type");
  }
};

const tree = el("form", { action: "/some_action" }, [
  el("label", { for: "name" }, "First name:"),
  el("br", {}, null),
  el(
    "input",
    { type: "text", id: "name", name: "name", value: "My name" },
    null
  ),
  el("br", {}, null),
  el("label", { for: "last_name" }, "Last name:"),
  el("br", {}, null),
  el(
    "input",
    {
      type: "text",
      id: "last_name",
      name: "last_name",
      value: "My second name",
    },
    null
  ),
  el("br", {}, null),
  el("input", { type: "submit", value: "Submit" }, null),
]);

root.appendChild(tree.draw());
