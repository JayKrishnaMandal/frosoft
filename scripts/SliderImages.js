const sliderImages = [
  "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1705067810~exp=1705068410~hmac=ce2ccc4a1418d13b6edc0bdd25baf6f7f74faf015439e57fbe0a0308968cf30d",

  "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?w=900&t=st=1705067860~exp=1705068460~hmac=55d092127ae3c61e2ca1fa74b2fd2ff93f117f4603bcaf2622c5a1d3f104fe05",

  "https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?w=900&t=st=1705067935~exp=1705068535~hmac=cafcd6b21d02aa888ca32dc354a8a9db36728befb2ccd5a22f5bb0ca9e265e3e",
  // Add more image URLs as needed
];

let currentImageIndex = 0;
const sliderImageElement = document.getElementById("sliderImage");

function changeSliderImage() {
  sliderImageElement.style.opacity = 0;
  setTimeout(() => {
    sliderImageElement.src = sliderImages[currentImageIndex];
    sliderImageElement.style.opacity = 1;
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  }, 1000); // Delay for 1 second to allow fading effect
}

setInterval(changeSliderImage, 3000);
