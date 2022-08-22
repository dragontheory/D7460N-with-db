// document.querySelector("app-panel:nth-of-type(3)").resizable({handles: "e, w"});

// --------------------------------------------------------------------------------- //

// https://medium.com/@fbnlsr/how-to-get-rid-of-the-flash-of-unstyled-content-d6b79bf5d75f

// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.opacity = '1.0';

  ActiveCSS.init({
    configLocation: '/assets/js/config.acss'
  });
});

// --------------------------------------------------------------------------------- //
// https://dev.to/jonosellier/easy-overlay-scrollbars-variable-width-1mbh

// Scrollbars
var barTimeout;

document.body.onscroll = () => {
	if(barTimeout){
  	clearTimeout(barTimeout);
  }
  barTimeout = setTimeout(() => {
  	document.body.classList.remove('scrolling');
  }, 500);
  document.body.classList.add('scrolling');
}

// --------------------------------------------------------------------------------- //

//For testing
window.addEventListener("rowClicked", function(e) {
  console.log(e.target.getAttribute("data-liCo"))
});
