window.
    onload
    = function() {
    Particles.
    init
    ({
        selector: '.background',
        color: ['#d4e6ff', '#00bbff'],
        connectParticles: true,
        responsive: [{
            breakpoint: 800,
            options: {
                color: '#00C9B1',
                maxParticles: 80,
                connectParticles: false
            }
        }]
    });
};