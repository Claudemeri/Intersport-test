
// Set the date we're counting down to
var countDownDate = new Date("Mar 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var weeks = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24 * 7))).slice(-2);
  var days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
  var minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

  var lineshdw = '<span class="line-shadow"></span>';

  // Display the result in the element with id="demo"
  document.getElementById("count-weeks").innerHTML = weeks + lineshdw;
  document.getElementById("count-days").innerHTML = days + lineshdw;
  document.getElementById("count-minutes").innerHTML = minutes + lineshdw;
  document.getElementById("count-seconds").innerHTML = seconds + lineshdw;

}, 1000);


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Slick
$('.products-grid-container').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
    