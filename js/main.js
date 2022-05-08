$(function () {
    // js start here........
});
$('.bxslider').bxSlider();
// clock start
var clock;
		
$(document).ready(function() {
    
    clock = $('.clock').FlipClock({
        clockFace: 'HourlyCounter'
    });
});