interface IDomElement {
  print();
}

 class TextNode implements IDomElement {

  constructor(private text:string) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

class DomElement implements IDomElement {
  private elementType: string;
  private elements: IDomElement[];

  constructor(elementType:string) {
    this.elementType = elementType;
    this.elements = [];
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.elementType}>`);
    this.elements.forEach(element => element.print());
    console.log(`</${this.elementType}>`)
  }
}

let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(p1);
div.add(p2);
html.add(div);

html.print();
