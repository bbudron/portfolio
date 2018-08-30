window.onload = function() {
    try {
    TagCanvas.Start('skills','tags',{
        activeCursor: "default",
        textColour: null,
        outlineColour: 'none',
        reverse: false,
        depth: .5,
        maxSpeed: 0.11,
        wheelZoom: false,
        shuffleTags: false,
        shadow: "transparent",
        scrollPause: 10,
        outlineThickness: 0,
        outlineMethod: "none",
        dragThreshold: 1,
        fadeIn: 3000,
        centreImage: './assets/img/skills.png',
        textFont: "Catamaran",
        weight: true
        });
    } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('skills-container').style.display = 'none';
    }
};


document.getElementById("pdf").addEventListener("click", function(){
    window.open('assets/img/resume.pdf', '_blank');
});