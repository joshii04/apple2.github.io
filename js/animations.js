var controller = new ScrollMagic.Controller();

// Get all sections
var sections = document.querySelectorAll('.scroll-section');

// For each section
for (var i = 0; i < sections.length; i++) {
    // Create scene
    new ScrollMagic.Scene({
        triggerElement: sections[i], // trigger CSS animation when this is in view
        triggerHook: 0.5 // middle of the viewport
    })
    .setClassToggle(sections[i], 'active') // add class to project
    .addTo(controller); // add Scene to ScrollMagic Controller
}