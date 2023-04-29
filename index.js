let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Following the events of Avengers: Endgame, Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities — and their patience — in Marvel Studios The Falcon and The Winter Soldier.",
      image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Loki was born a Frost Giant and abandoned as an infant by his father Laufey, only to be found by Odin during an invasion of the realm of the Frost Giants in Jotunheim. Odin used magic to make Loki appear Asgardian and raised him as a son alongside Odin's biological son, Thor.",
      image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human. ",
      image: "images/slider 5.PNG"
    }
  ];

const carousel = document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;//track the current slide 

const createSlide = () =>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    //create DOM element
    //***** missing semicolon in evry lin 
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);// error in the first one 
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    //setting up image
    imgElement.src=movies[slideIndex].image;
    slideIndex++;//semicolon missing 

    //setting element classname 
    slide.className="slider" ;
    content.className= "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if(sliders.length)//sliders insted of slide 
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};//semicolon misssing 

for (let i=0; i<3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

//card sliders

let cardcontainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardcontainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
