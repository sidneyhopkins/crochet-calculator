// 1. Add event listener on the submit button
// 2. Add an event handler that saves a value, finds the div we want, and inserts a result
// 3. Create a func that calculates the total chains needed

// Objects that store info from the input fields we want
const chains = document.getElementById('chains');
const width = document.getElementById('width');
const chainMult = document.getElementById('chainMult');

// this is how we figure out how many chains we need
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

