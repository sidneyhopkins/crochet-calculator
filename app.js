//onSubmit => 
// numChains*projectWidth/5" = totalChains
//if multiple =>
// Math.ceil(totalChains/multiple) = ( Math.ceil(19.2) => "20" ) 

const chains = document.getElementById('chains');
const blanket = document.getElementById('blanket');
const chainMultNum = document.getElementById('chainMultNum');
const multYes = document.getElementById('mult-yes'); // always true

// this is how we figure out how many chains we need
const totalChains = () => {
    const total = chains.value * blanket.value / 5;
    console.log(total);
    if (multYes.value === true) {
        const newTotal = Math.ceil(total/chainMultNum.value);
        console.log(newTotal);
        return newTotal;
    } else {
        return total;
    }
}

// event handler
function handleClick() {
    totalChains();
    return document.getElementById('result').innerHTML = (`You need ${blanket.value} chains.`);
}

document.getElementById('submit').addEventListener('click', handleClick);





