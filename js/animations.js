anime({
    targets: "#upper-header, #lower-header",
    translateX: {
        value: [-2000, 0], // Moves the element from 100px to 200px along the X axis
        duration: 2500,
        easing: 'easeOutElastic'
      },
      delay: anime.stagger(100)
});

anime ({
    targets: "p",
    translateX: {
        value: [2000, 0], // Moves the element from 100px to 200px along the X axis
        duration: 2500,
        easing: 'easeOutElastic'
      },    
})

anime ({
    targets: "#button-row",
    translateY: {
        value: [300, 0], // Moves the element from 100px to 200px along the X axis
        duration: 2200,
        easing: 'easeOutQuad'
      },    
})