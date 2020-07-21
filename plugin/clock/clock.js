/**
 * Adds a clock to the slides.
 *
 * @author Fin LeSueur (https://finn.lesueur.nz)
 **/
var AddClock = window.AddClock || (function(){
    function updateClock () {
        var date = new Date();
        document.getElementById('clock').innerHTML = date.toLocaleTimeString();
        setTimeout(updateClock, 100);
    }

    return {
        init: function() {
            var clock = "<span id='clock'></span>";
            var reveal = document.querySelector(".reveal");
            reveal.innerHTML = clock + reveal.innerHTML;
            updateClock();
        }
    }
})();

Reveal.registerPlugin( 'clock', AddClock );
