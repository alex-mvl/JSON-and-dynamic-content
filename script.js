let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// Parallax library
var rellax;



let jsonDatabase = [
  {
    "title" : "Print and Screen Menu",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
    "favorite_color" : "#FFBABA",
    "pets" : ["cat", "bees", "robot vacuum"]
  },
  {
    "title" : "Pet Adoption App",
    "picture_url" : "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Screen_Shot_2016-04-29_at_11.46.25_AM_jkfdax/drake-dog-diamond-pet-views.jpg",
    "favorite_color" : "#FFDFBA",
    "pets" : ["husky", "hotline bling", "Degrassi"]
  },
  {
    "title" : "Interactive Storybook",
    "picture_url" : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/10/13/asset/buzzfeed-prod-web-06/anigif_sub-buzz-15799-1554917302-1.gif?downsize=700:*&output-format=auto&output-quality=auto",
    "favorite_color" : "#FFBABA",
    "pets" : ["puppy", "instagram", "hairdye"]
  },
  {
    "title" : "Logo Design",
    "picture_url" : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/10/13/asset/buzzfeed-prod-web-06/anigif_sub-buzz-15799-1554917302-1.gif?downsize=700:*&output-format=auto&output-quality=auto",
    "favorite_color" : "#FFDFBA",
    "pets" : ["bells", "rent", "bugs"]
  }
];



for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');


function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.style.fontFamily = incomingJSON['favorite_font'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "My Pets:";
  newContentElement.appendChild(newContentSubhead);



  /// Create & add PET LIST to the item
  let newContentPetList = document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var currentPetString = incomingJSON['pets'][i];
    var newPetItem = document.createElement("LI");
    newPetItem.innerText = currentPetString;
    newContentPetList.appendChild(newPetItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}