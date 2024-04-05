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
    const scrollButtonNav = document.getElementById('scrollButtonNav');
    const scrollTarget = document.getElementById('scrollTarget');

    const scrollButtonStars = document.getElementById('scrollButtonStars');
    const scrollTargetStars = document.getElementById('scrollTargetStars');

    const scrollButtonForm = document.getElementById('scrollButtonForm');
    const scrollTargetForm = document.getElementById('scrollTargetForm');


    function scrollToTarget(target, offset) {
        const scrollTop = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: scrollTop - offset, 
            behavior: 'smooth'
        });
    }
    
    scrollButton.addEventListener('click', function() {
        scrollToTarget(scrollTarget, 100);
    });

    scrollButtonNav.addEventListener('click', function() {
        scrollToTarget(scrollTarget, 100);
    });

    scrollButtonStars.addEventListener('click', function() {
        scrollToTarget(scrollTargetStars, 150);
    });

    scrollButtonForm.addEventListener('click', function() {
        scrollToTarget(scrollTargetForm, 110);
    });


    
});

function changeData(index) {
    const starImage = document.querySelector('#scrollTargetStars .image');
    const starsContent = document.querySelector('#scrollTargetStars .content');
    const buttons = document.querySelectorAll('#scrollTargetStars .buttons button');

    switch (index) {
        case 1:
            starImage.innerHTML = `
            <img src="images/probierz.png" alt="Zdjęcie Michała Probierza">
            `;
            starsContent.innerHTML = `
                <p>"Każde uderzenie na polu golfowym to nie tylko ruch kija, ale też oddech dla umysłu i regeneracja dla ciała." - Michał Probierz</p>
                <ul>
                    <li>Wiek: 51 lat</li>
                    <li>Klub golfowy: Business Golf Club</li>
                    <li>Kluby piłkarskie:
                        <ul>
                            <li>Widzew Łódź</li>
                            <li>Pogoń Szczeciń</li>
                            <li>Górnik Zabrze</li>
                        </ul>
                    </li>
                </ul>
            `;
            break;
        case 2:
            starImage.innerHTML = `
            <img src="images/dudek.png" alt="Zdjęcie Jerzego Dudka" style="height: 300px;">
            `;
            starsContent.innerHTML = `
                <p>"W golfa rywalizujesz nie tylko z innymi graczami, ale także z samym sobą, ze swoimi ograniczeniami i słabościami." - Jerzy Dudek</p>
                <ul>
                    <li>Wiek: 51 lat</li>
                    <li>Klub golfowy: Business Golf Club</li>
                    <li>Kluby piłkarskie:
                        <ul>
                            <li>Real Madryt</li>
                            <li>Liverpool F.C.</li>
                            <li>Feyenoord Rotterdam</li>
                        </ul>
                    </li>
                </ul>
            `;
            break;
        case 3:
            starImage.innerHTML = `
            <img src="images/bednarek.png" alt="Zdjęcie Filipa Bednarka" style="height: 400px;">
            `;
            starsContent.innerHTML = `
                <p>"Każde uderzenie na polu golfowym to nie tylko ruch kija, ale też oddech dla umysłu i regeneracja dla ciała." - Filip Bednarek</p>
                <ul>
                    <li>Wiek: 31 lat</li>
                    <li>Klub golfowy: Business Golf Club</li>
                    <li>Kluby piłkarskie:
                        <ul>
                            <li>Lech Poznań</li>
                            <li>sc Heerenveen</li>
                            <li>De Graafschap</li>
                        </ul>
                    </li>
                </ul>
            `;
            break;
        default:
            break;
    }
    buttons.forEach(button => button.classList.remove('active'));
    buttons[index - 1].classList.add('active');
}

