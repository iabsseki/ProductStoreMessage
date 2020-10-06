var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

let body = null;
let popup = document.createElement('div');
let productsDiv = document.createElement('div');
// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT
document.addEventListener("DOMContentLoaded", function() {
  body = document.getElementsByTagName('body')[0];
  body.appendChild(productsDiv);
  popup = createPopUp();
  products.forEach(createProduct);
});

// Create a div and give it a class of "popUp". Append that div to the body 
function createPopUp() {
  popup.classList.add('popUp');
  body.appendChild(popup);
  popup.style.display = "none";
  popup.addEventListener("click", function() {
    this.style.display = "none";
    productsDiv.style.display = "block";
    this.innerHTML = "";
  });
  return popup;
}
// If I click on the popUp div, it should hide it

// Create a div for each item in the array above
function createProduct(product) {
  let pDiv = document.createElement('div');
  pDiv.classList.add('product');
  let pImg = document.createElement('img');
  pImg.src = product.image;
  pDiv.appendChild(pImg);
  let pText = document.createElement('p');
  pText.innerHTML = "Name: "+product.name+" and Price: $"+product.price;
  pDiv.appendChild(pText);
  productsDiv.appendChild(pDiv);
  pDiv.addEventListener("mouseover", function() {
    this.style.borderColor = product.color;
  });
  pDiv.addEventListener("mouseleave", function() {
    this.style.borderColor = "black";
  });
  pDiv.addEventListener("click", function() {
    let newDiv = this.cloneNode(true);
    popup.appendChild(newDiv);
    productsDiv.style.display = "none";
    popup.style.display = "block";
  })
}
// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.