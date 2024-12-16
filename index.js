document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    const projects = document.querySelectorAll('.project');
    
    let currentIndex = 0;
    const totalProjects = projects.length;

    function updateProjectView() {
        gsap.to(projectsContainer, {
            x: `-${currentIndex * 100}%`,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalProjects;
        updateProjectView();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
        updateProjectView();
    });

    // Optional: Auto-transition projects every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalProjects;
        updateProjectView();
    }, 5000);
});