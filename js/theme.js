
let themeCollor = localStorage.getItem('collor');
if (themeCollor === null) {
   localStorage.setItem('collor', 'blue');
   themeCollor = 'blue';
}
document.documentElement.className = themeCollor;
const btnBlue = document.getElementById('blue');
const btnGreen = document.getElementById('green');
const btnFlowers = document.getElementById('flowers');
const btnSachara = document.getElementById('sachara');

btnBlue.addEventListener('click', () => {
    document.documentElement.className = 'blue';
    localStorage.setItem('collor', 'blue')
});
btnGreen.addEventListener('click', () => {
    document.documentElement.className = 'green';
    localStorage.setItem('collor', 'green')
    });

btnFlowers.addEventListener('click', () => {
     document.documentElement.className = 'flowers';
    localStorage.setItem('collor', 'flowers')
    });
btnSachara.addEventListener('click', () => {
     document.documentElement.className = 'sachara';
    localStorage.setItem('collor', 'sachara')
    });