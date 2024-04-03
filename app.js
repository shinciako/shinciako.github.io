document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamicText");
    const words = ["terapia", "emocje", "szczęście", "frustracja", "medytacja", "ucieczka", "natura"];
    const colors = ["#FF5733", "#FFBD33", "#FFFF00", "#CD2AD9", "#0000FF", " #FFA500" , "#8DD92A"];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        dynamicText.style.color = colors[currentIndex];
        dynamicText.textContent = words[currentIndex];
    }, 2000);

    const scrollButton = document.getElementById('scrollButton');
    const scrollTarget = document.getElementById('scrollTarget');

    scrollButton.addEventListener('click', () => {
        const scrollTop = scrollTarget.getBoundingClientRect().top + window.scrollY;
        const offset = 100; 
        window.scrollTo({
          top: scrollTop - offset, 
          behavior: 'smooth'
        });
    })
});

