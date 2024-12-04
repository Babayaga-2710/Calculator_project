// Set dark mode as default on page load
window.onload = function() {
    document.body.classList.add('dark');
};

// Rest of the functions remain the same

function inputValue(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    const historyList = document.getElementById('history-list');
    try {
        const result = eval(display.innerText);
        historyList.innerHTML += `<li>${display.innerText} = ${result}</li>`;
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function changeTheme(theme) {
    document.body.className = theme;
}

function generateSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.querySelector('.snowflakes').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

setInterval(generateSnowflake, Math.random() * 500 + 500);

document.addEventListener('keydown', (e) => {
    const display = document.getElementById('display');
    const validKeys = '0123456789/*-+.'.split('');
    if (validKeys.includes(e.key)) {
        inputValue(e.key);
    } else if (e.key === 'Enter') {
        calculateResult();
    } else if (e.key === 'Backspace') {
        deleteLast();
    }
});
