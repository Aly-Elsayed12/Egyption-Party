$("nav").css("left", `-${$("nav").innerWidth()}px`)

$("#close").on('click', () =>{
  $("nav").animate({"left":`-${$("nav").innerWidth()}px`}, 500)
})
$("#open-icon").on('click', () =>{
  $("nav").animate({"left":'0px'}, 500)
})


$("h2").on('click' , function(){
  $(this).next().slideToggle(500);
  $(".box p").not($(this).next()).slideUp();
})

var countDownDate = new Date("Oct 5, 2025 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $(".days").text(`-${days}D`)
  $(".hours").text(`${hours}H`)
  $(".minutes").text(`${minutes}M`)
  $(".seconds").text(`${seconds}S`)
  if (distance < 0) {
    clearInterval(x);
    ;
  }
}, 1000);

$("textarea").on('input' , function(){
  var x = $(this).val().length
  $('#charact').text(100 - x)
})