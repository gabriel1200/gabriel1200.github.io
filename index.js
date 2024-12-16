document.addEventListener('DOMContentLoaded', () => {
    // Projects Slider (if needed in future)
    
    // Visualization Slider
    const showcaseContainer = document.querySelector('.showcase-container');
    const prevBtn = document.getElementById('prevVisualization');
    const nextBtn = document.getElementById('nextVisualization');
    const showcaseItems = document.querySelectorAll('.showcase-item');
    
    let currentIndex = 0;
    const totalItems = showcaseItems.length;

    function updateVisualizationView() {
        gsap.to(showcaseContainer, {
            x: `-${currentIndex * 100}%`,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateVisualizationView();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateVisualizationView();
    });

    // Optional: Auto-transition visualizations every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateVisualizationView();
    }, 5000);
});