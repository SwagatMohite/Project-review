// Local reviews data:
const reviews = [
  {
      id: 1,
      name: "susan smith",
      job: "Web developer",
      img: "https://media.istockphoto.com/photos/head-shot-portrait-attractive-young-indian-woman-looking-at-camera-picture-id1311858467?b=1&k=20&m=1311858467&s=170667a&w=0&h=qzuio68-bYoQifAS6-tXQVfHJn1eP8qSVgJ2uZIKL7A=",
      text: "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry", 
  },
  {
      id: 2,
      name: "anna johnson",
      job: "Web developer",
      img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.", 
  },
  {
      id: 3,
      name: "Lora smith",
      job: "Intern",
      img: "https://media.istockphoto.com/photos/happy-young-african-american-woman-looking-at-camera-picture-id1351285381?b=1&k=20&m=1351285381&s=170667a&w=0&h=HZ5G7svWFop1lwLQsI1HuJ3xvlPkf4J4Y8DYyjVrAlE=",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.", 
  },
  {
      id: 4,
      name: "Bill anderson",
      job: "The Boss",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.", 
  }
];

// select items:

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");



// function of review data arrays[0,1,2,3]

let currentItem = 0; // 0-3 check line 50 for manipulation change default setting.

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  const item =  reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item

function showPerson(person) {
  const item =  reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {   //does not end it will follow loop again from 0-3 index
      currentItem = 0;
}
  showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0) {   //does not end it will follow loop again from 0-3 index in reverse order
      currentItem = reviews.length - 1;
}
  showPerson(currentItem);
});

//show random person

randomBtn.addEventListener('click', function() {
  console.log("Hello");    
  
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});