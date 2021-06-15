class DOMElement {
  constructor(element) {
    this.element = element;
  }

  draw(innerHTML) {
    if (!innerHTML) return this.element;

    if (typeof innerHTML === "string") {
      this.element.innerText = innerHTML;
    } else {
      if (Array.isArray(innerHTML)) {
        for (const doc of innerHTML) {
          this.element.appendChild(doc);
        }
      } else {
        this.element.appendChild(innerHTML);
      }
    }

    return this.element;
  }
}

class DivElement extends DOMElement {
  constructor() {
    super(document.createElement("DIV"));
  }
}

class SpanElement extends DOMElement {
  constructor() {
    super(document.createElement("SPAN"));
  }
}

class InputElement extends DOMElement {
  constructor() {
    super(document.createElement("INPUT"));
  }
}

class LabelElement extends DOMElement {
  constructor() {
    super(document.createElement("LABEL"));
  }
}

class PElement extends DOMElement {
  constructor() {
    super(document.createElement("DIV"));
  }
}

class ULElement extends DOMElement {
  constructor() {
    super(document.createElement("UL"));
  }
}

class LIElement extends DOMElement {
  constructor() {
    super(document.createElement("LI"));
  }
}

class FormElement extends DOMElement {
  constructor() {
    super(document.createElement("FORM"));
  }
}

class BrElement extends DOMElement {
  constructor() {
    super(document.createElement("BR"));
  }
}
