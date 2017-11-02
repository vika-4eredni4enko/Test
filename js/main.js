$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
 	smartSpeed: 1000,
 	margin: 50,
 	responsive:{ 
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
 });
});