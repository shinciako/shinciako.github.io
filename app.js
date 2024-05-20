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
        scrollToTarget(scrollTarget, -90);
    });

    scrollButtonNav.addEventListener('click', function() {
        scrollToTarget(scrollTarget, -90);
    });

    scrollButtonStars.addEventListener('click', function() {
        scrollToTarget(scrollTargetStars, 50);
    });

    scrollButtonForm.addEventListener('click', function() {
        scrollToTarget(scrollTargetForm, 50);
    });


    
});

const reasonsData = [
    {
        subtitle: 'Relaksacja mentalna',
        text: 'Golf jest często grany w naturalnych, malowniczych otoczeniach, co zapewnia spokojną i uspokajającą atmosferę. To może pomóc piłkarzom w zarządzaniu stresem, lękiem i zmęczeniem psychicznym związanym z uprawianiem sportów w warunkach konkurencyjnych.'
    },
    {
        subtitle: 'Poprawa koncentracji',
        text: 'Gra w golfa wymaga skupienia i uwagi na każdym uderzeniu. Regularna praktyka może pomóc w poprawie koncentracji, co może mieć pozytywny wpływ na inne obszary życia.'
    },
    {
        subtitle: 'Rozwijanie umiejętności strategicznych',
        text: 'Golf to gra strategiczna, która wymaga analizy terenu, ustawień, siły i kierunku uderzenia. Poprawa umiejętności strategicznych w grze może pomóc w podejmowaniu lepszych decyzji również poza polem golfowym.'
    },
    {
        subtitle: 'Aktywność na świeżym powietrzu',
        text: 'Gra w golfa odbywa się na otwartej przestrzeni, co umożliwia kontakt z naturą i aktywność na świeżym powietrzu. To może być korzystne dla zdrowia fizycznego i psychicznego.'
    },
    {
        subtitle: 'Kontakt z naturą',
        text: 'Pola golfowe są często położone w malowniczych, naturalnych miejscach, co daje graczom możliwość cieszenia się pięknem przyrody i kontaktu z nią podczas gry.'
    },
    {
        subtitle: 'Zmniejszenie stresu',
        text: 'Gra w golfa może pomóc w zmniejszeniu poziomu stresu poprzez skupienie się na grze i otoczeniu. To może prowadzić do uczucia relaksu i spokoju.'
    },
    {
        subtitle: 'Kreowanie więzi społecznych',
        text: 'Gra w golfa może być doskonałą okazją do budowania więzi społecznych i nawiązywania nowych znajomości. Wspólne przeżycia na polu golfowym mogą zacieśniać relacje między graczami.'
    },
    {
        subtitle: 'Rozwój umiejętności interpersonalnych',
        text: 'Interakcja z innymi graczami na polu golfowym może pomóc w rozwoju umiejętności interpersonalnych, takich jak komunikacja, współpraca i negocjacje.'
    },
    {
        subtitle: 'Ruch na świeżym powietrzu',
        text: 'Gra w golfa angażuje różne partie ciała i wymaga poruszania się po otwartym terenie, co sprzyja aktywności fizycznej i zdrowemu stylowi życia.'
    },
    {
        subtitle: 'Rozwój samodyscypliny',
        text: 'Regularna praktyka golfa wymaga samodyscypliny i samokontroli. Utrzymywanie wysokiego poziomu koncentracji przez całą rundę może pomóc w rozwijaniu tych umiejętności, które mogą być przydatne również w innych obszarach życia.'
    },
    {
        subtitle: 'Możliwość poznania nowych miejsc',
        text: 'Gra w golfa to doskonała okazja do poznawania nowych miejsc i odkrywania różnorodnych pól golfowych na całym świecie. To może prowadzić do przygód, nowych doświadczeń i fascynujących podróży.'
    }
];


function changeReason(buttonText) {
    const reasonTitle = document.getElementById('reasonTitle');
    const reasonSubtitle = document.getElementById('reasonSubtitle');
    const reasonText = document.getElementById('reasonText');
    
    const buttons = document.querySelectorAll('#scrollTarget .button-container button');
    const sortedButtons = Array.from(buttons).sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));
    
    sortedButtons.forEach(button => button.classList.remove('active'));
    sortedButtons[buttonText].classList.add('active');

    reasonTitle.textContent = `Powód ${buttonText + 1}`;
    reasonSubtitle.textContent = reasonsData[buttonText].subtitle;
    reasonText.textContent = reasonsData[buttonText].text;
}

function changeData(index) {
    const starImage = document.querySelector('#scrollTargetStars .image');
    const starsContent = document.querySelector('#scrollTargetStars .content');
    const buttons = document.querySelectorAll('#scrollTargetStars .buttons button');

    switch (index) {
        case 1:
            starImage.innerHTML = `
            <img src="images/probierz.png" alt="Zdjęcie Michała Probierza" style="height: 300px;width: 300px">
            `;
            starsContent.innerHTML = `
                <p>"Każde uderzenie na polu golfowym to nie tylko ruch kija, ale też oddech dla umysłu i regeneracja dla ciała." - Michał Probierz</p>
                <ul>
                    <li>Wiek: 51 lat</li>
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
            <img src="images/dudek.png" alt="Zdjęcie Jerzego Dudka" style="height: 300px;width: 300px">
            `;
            starsContent.innerHTML = `
                <p>"W golfa rywalizujesz nie tylko z innymi graczami, ale także z samym sobą, ze swoimi ograniczeniami i słabościami." - Jerzy Dudek</p>
                <ul>
                    <li>Wiek: 51 lat</li>
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
            <img src="images/bednarek.png" alt="Zdjęcie Filipa Bednarka" style="height: 300px;width: 300px">
            `;
            starsContent.innerHTML = `
                <p>"Każde uderzenie na polu golfowym to nie tylko ruch kija, ale też oddech dla umysłu i regeneracja dla ciała." - Filip Bednarek</p>
                <ul>
                    <li>Wiek: 31 lat</li>
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

