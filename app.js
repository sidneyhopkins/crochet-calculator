// Variables that point to the input fields we want

const chains = document.getElementById('chains');
const width = document.getElementById('width');
const chainMult = document.getElementById('chainMult');


// How many chains do we need?

const totalChains = () => {
    const total = chains.value * width.value / 5; // crude num of chains needed
    const mult = chainMult.value;
    const newTotal = Math.ceil(total/mult) * mult; // exact chains needed
    return newTotal;
}

// event handler
function handleClick() {
    const x = totalChains();
    document.getElementById('result').innerHTML = `You need ${x} chains.`;
}

// event listener
document.getElementById('submit').addEventListener('click', handleClick);



// -- click-to-copy email feature --

const email = 'sidhopkins14@gmail.com';
const popUp = document.getElementById('pop-div');

// event handler
const handleCopy = () => {
    navigator.clipboard.writeText(email);
    popUp.style.display = 'inline';
    const countDown = () => {
        setInterval(() => { popUp.style.display = 'none'; }, 5000);
    }
    countDown();
}

// event listener
document.getElementById('copy-email').addEventListener('click', handleCopy);