var val = document.querySelector('.counter_value');

// increase operation
const increase = () => { val.textContent = parseInt(val.textContent) + 1; }
document.querySelector('.counter_increase').addEventListener('click', increase);
document.querySelector('.counter_increase').addEventListener('keyup', function (event) {
    if (event.key === "ArrowUp") { increase(); }
});

// decrease operation
const decrease = () => { parseInt(val.textContent) > 0 ? val.textContent = parseInt(val.textContent) - 1 : val.textContent = '0'; }
document.querySelector('.counter_decrease').addEventListener('click', decrease);
document.querySelector('.counter_decrease').addEventListener('keydown', function (event) {
    if (event.key === "ArrowDown") { decrease(); }
});

// reset operation
const reset = () => { val.textContent = '0'; }
document.querySelector('.counter_reset').addEventListener('click', reset);