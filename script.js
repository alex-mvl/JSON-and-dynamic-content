
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "title" : "Print and Screen Menu",
    "picture_url" : "menu.jpg",
    "color" : "#FFE6A4",
    "description" : "Print Design, UX/UI"
  },
  {
    "title" : "Pet Adoption App",
    "picture_url" : "pet-adoption.png",
    "color" : "#FFE6A4",
    "description" : "UX/UI, Research"
  },
  {
    "title" : "Interactive Storybook",
    "picture_url" : "children-book.png",
    "color" : "#FFD19B",
    "description" : "Graphic Design, Animation, JavaScript"
  },
  {
    "title" : "Logo Design",
    "picture_url" : "logo.png",
    "color" : "#FFD19B",
    "description" : "Graphic Design, Brand Identity"
  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}



function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.background = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);
  contentGridElement.appendChild(newContentElement);

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);


  let newContentDescription = document.createElement("H4");
  newContentDescription.classList.add("description");
  newContentDescription.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDescription);
  }



