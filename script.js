const button = document.querySelector('.content .button');
const hex = document.querySelector('.content .hex');

function genColor() {
    let hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    console.log();
    let addSymbol = '';
    for (let i = 0; i < 6; i++) addSymbol += hexSymbols[Math.floor(Math.random() * hexSymbols.length)];
    document.body.style.background = `#${addSymbol}`;
    hex.textContent = '#' + addSymbol;
}
button.addEventListener('click', () => genColor());
hex.addEventListener('click', () => {
    let hexCopy = hex.innerText;
    navigator.clipboard.writeText(hexCopy);
})

