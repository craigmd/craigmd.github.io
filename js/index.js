
const sections = ['intro', 'tease', 'cabin', 'sleigh', 'reveal'];
const nextButton = document.getElementById('next-section-button');

let currentSectionIndex = 0;

nextButton.addEventListener('click', () => {
  const nextIndex = (currentSectionIndex + 1) % sections.length;
  const nextSection = document.getElementById(sections[nextIndex]);
  const text = document.getElementById('next-section-text');
  const chevron = document.getElementById('next-section-img');

  if (nextIndex === sections.length - 1) {
    chevron.src = './images/chevron-up.svg';
    text.innerText = 'Back to top';
  } else {
    chevron.src = './images/chevron-down.svg';
    text.innerText = 'Let\'s go';
  }
  
  if (nextSection) {
    currentSectionIndex = nextIndex;
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});
