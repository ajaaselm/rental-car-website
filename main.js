// Initialize slide index and show the first slide
let slideIndex = 1;
showSlides(slideIndex);

// Function to display next/previous slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show slides based on slide index
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  // Reset slide index if out of range
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and set active class to corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Form validation
function validateForm() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const subject = document.getElementById("subject").value;

  // Check if required fields are filled
  if (fname === "" || lname === "" || subject === "") {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }
  return true; // Allow form submission if all fields are filled
}

// Carousel functionality with swipe gesture support
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Function to display a specific slide
function showSlide(n) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';
}

// Function to move to the next slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Initialize carousel
showSlide(slideIndex);

// Event listeners for carousel navigation
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Event listeners for swipe gestures on touch devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (event) {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function (event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipeGesture();
});

// Function to handle swipe gesture
function handleSwipeGesture() {
  if (touchEndX < touchStartX) {
    nextSlide();
  } else if (touchEndX > touchStartX) {
    prevSlide();
  }
}