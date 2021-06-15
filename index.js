const root = document.getElementById("root");

function el(type, attrs, children) {
  let element;

  switch (type) {
    case "div":
      element = new DivElement();
      break;
    case "span":
      element = new SpanElement();
      break;
    case "input":
      element = new InputElement();
      break;
    case "label":
      element = new LabelElement();
      break;
    case "p":
      element = new PElement();
      break;
    case "ul":
      element = new ULElement();
      break;
    case "li":
      element = new LIElement();
      break;
    case "form":
      element = new FormElement();
      break;
    case "br":
      element = new BrElement();
      break;
    default:
      throw new Error("Unexpexted type");
  }

  for (let attr in attrs) {
    element.element.setAttribute(attr, attrs[attr]);
  }

  return element.draw(children);
}

const tree = el("form", { action: "/some_action" }, [
  el("label", { for: "name" }, "First name:"),
  el("br", {}, null),
  el(
    "input",
    { type: "text", id: "name", name: "name", value: "My name" },
    null
  ),
  el("br", {}, null),
  el("label", { fors: "last_name" }, "Last name:"),
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

root.appendChild(tree);
