// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animated Skill Cards on Hover
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.backgroundColor = '#38bdf8';
        card.style.color = 'black';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.backgroundColor = '#1e293b';
        card.style.color = 'white';
    });
});

// Clickable Project Cards
const projects = document.querySelectorAll('.project-list li');
projects.forEach(project => {
    project.addEventListener('click', () => {
        alert(`You clicked on: ${project.innerText.split(':')[0]}\n\nYou can replace this alert with a modal or project preview.`);
    });
});

function openProject(url) {
    window.open(url, '_blank');
}

// Dynamic Footer Year
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();
