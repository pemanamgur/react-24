let container = document.querySelector("#root");

let obj = {
  type: "img",
  property: {
    src: "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    alt: "mountain nature",
  },
  texts: "This is a image",
};

function createElements(element) {
  let elem = document.createElement(element.type);
  elem.innerHTML = element.texts;
  //   elem.setAttribute(
  //     element.property[0],
  //     "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
  //   );
  //   elem.setAttribute(element.property[1], "this is a nature ");
  for (let item in element.property) {
    // console.log(item);
    // if (item == "type" || item == "texts") continue;
    // console.log(item);
    // console.log(element.property[item]);

    elem.setAttribute(item, element.property[item]);
  }

  container.appendChild(elem);
}
createElements(obj);
