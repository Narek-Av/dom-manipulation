class DOMElement {
  constructor(type, attrs, ...children) {
    this.type = type;
    this.attrs = attrs;
    this.children = Array.isArray(...children)
      ? Array.from(...children)
      : children;
  }

  setAttributes(el) {
    for (let [key, val] of Object.entries(this.attrs)) {
      el.setAttribute(key, val);
    }
  }

  draw() {
    const element = document.createElement(this.type);

    this.setAttributes(element);

    if (!this.children[0]) return element;

    this.children.forEach(child => {
      let childrenElement =
        child instanceof DOMElement
          ? child.draw()
          : document.createTextNode(child);
      element.appendChild(childrenElement);
    });

    return element;
  }
}

class DivElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class SpanElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class FormElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class InputElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class LabelElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class PElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class BrElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class LiElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

class UlElement extends DOMElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}
