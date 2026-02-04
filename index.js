
let peonyCount = 0;
let anemoneCount = 0;
let daffodilCount = 0;

const peonyPrice = 2;
const anemonePrice = 4;
const daffodilPrice = 3;
let totalPrice = 0;

function updateDisplay() {
    document.getElementById("result").textContent = totalPrice;
    document.getElementById("totalPeonys").textContent = peonyCount;
    document.getElementById("totalAnemones").textContent = anemoneCount;
    document.getElementById("totalDaffodils").textContent = daffodilCount;
}

const addPeonyBtn = document.getElementById("addPeony");
if (addPeonyBtn) {
    addPeonyBtn.addEventListener("click", () => {
        peonyCount += 1;
        totalPrice += peonyPrice;
        updateDisplay();
    });
}

const addAnemoneBtn = document.getElementById("addAnemone");
if (addAnemoneBtn) {
    addAnemoneBtn.addEventListener("click", () => {
        anemoneCount += 1;
        totalPrice += anemonePrice;
        updateDisplay();
    });
}

const addDaffodilBtn = document.getElementById("addDaffodil");
if (addDaffodilBtn) {
    addDaffodilBtn.addEventListener("click", () => {
        daffodilCount += 1;
        totalPrice += daffodilPrice;
        updateDisplay();
    });
}



// initialize displayed values
updateDisplay();

