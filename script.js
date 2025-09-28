document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const typingTextElement = document.getElementById('typing-text');
    const textArray = ['Free Palestine', 'Solidarity', 'Justice', 'Equality'];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typingTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, 500);
        }
    }

    setTimeout(type, 1000);

    // Animated Links
    const animatedLinks = document.querySelectorAll('.animated-link');

    animatedLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('animate__animated', 'animate__' + link.dataset.animation);
            link.style.setProperty('--animate-delay', link.dataset.delay + 's');
        });

        link.addEventListener('animationend', () => {
        link.classList.remove('animate__animated', 'animate__' + link.dataset.animation);
        });
    });
});

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.pageYOffset;

    heroSection.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
});

// Fungsi untuk menampilkan kisah selengkapnya
function tampilkanSelengkapnya(id) {
    document.getElementById(id + '-ringkasan').style.display = 'none';
    document.getElementById(id + '-selengkapnya').style.display = 'block';
}

// Fungsi untuk menyembunyikan kisah selengkapnya
function sembunyikanSelengkapnya(id) {
     document.getElementById(id + '-ringkasan').style.display = 'block';
    document.getElementById(id + '-selengkapnya').style.display = 'none';
}
