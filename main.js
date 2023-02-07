// Get elements from the DOM
const testimonial = document.querySelector(".testimonial");
const clientImg = document.querySelector(".profile-img");
const clientName = document.querySelector(".name");
const clientTitle = document.querySelector(".title");
const clientQuote = document.querySelector(".quote span");

// Testimonial slide ID
let id = 0; 

// Testimonial slides data
const testimonials=[
    [
        "img/img1.jpg",
        "img/img2.jpg",
        "img/img3.jpg",
    ],
    [
        "Tanya Singh",
        "John Doe",
        "Mike Smith",
    ],
    [
        "Director of Digital Marketing",
        "Lead Front End Developer",
        "Author, Online Influencer",
    ],
    [
        "Your product has extremely helped us to learn more about our customers.",
        "Truly a unique and effective way of solving my problems. Wonderfull!",
        "Been using it for the past month, a gamechanger for sure."
    ],
];

// Set interval (Loop)
setInterval(()=>{
    setTimeout(()=>{
        // Move testimonial out of sight
        testimonial.style.transform = "translateX(-100%)";
    },2000);
    setTimeout(()=>{
        // Disable transition
        testimonial.style.transition = "none";
        // Move testimonial to opposite side
        testimonial.style.transform = "translateX(100%)";
        // increment testimonial ID
        id++;
        // Check if id is greater than the amount of testimonials
        if(id > testimonials[0].length-1){
            //If yes, then reset the id to zero (the first testimonial)
            id=0;
        }
        // Change profile image
        clientImg.style.backgroundImage="url("+testimonials[0][id]+")";
        // Change client name
        clientName.innerHTML=testimonials[1][id];
        // Change client job title
        clientTitle.innerHTML=testimonials[2][id];
        // Change client quote
        clientQuote.innerHTML=testimonials[3][id];
    }, 2400);
    setTimeout(()=>{
        // Reset transition
        testimonial.style.transition="0.3s";
        // Move testimonial back into sight
        testimonial.style.transform="translateX(0)";
    },3000);
},6000);


// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};