$(function() {

    // The elements that change when scrolling:
  $(window).scroll(function() {

    // Variabel for the change in thickness of the  top logo
    var mass = Math.max(55, 100-0.25*$(this).scrollTop()) + 'px';
    console.log(mass);

    // variabel for the change in height of the top logo
    var heightOfLogo = Math.max(4, 40-0.2*$(this).scrollTop()) + 'vh';
    console.log(heightOfLogo);

    // variabel for the change in opacity of the background-color of the topRow 
    var opacityTopRow = Math.max(0, 0+0.005*$(this).scrollTop());
    var backgroundColor = ('hsla(0, 0%, 0%, ' + opacityTopRow + ')');
    console.log(opacityTopRow + ' background-opacity');

    $('#logga').css({'font-size': mass, 'line-height': mass, 'top': heightOfLogo});

    $('#topRow').css({'background-color': backgroundColor});
  });
});





// Change the hamburger to an X and reverse.
function myFunction(x) {
    $( "#hamburgerNav" ).slideToggle( "fast" );
    x.classList.toggle("change");
}

