function startTimer(duration) {
    let timer = duration;
    const display = document.getElementById('cronometro');
    
    const countdown = setInterval(function () {
        const minutes = parseInt(timer / 60, 10);
        const seconds = parseInt(timer % 60, 10);

        const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = displayMinutes + ":" + displaySeconds;

        if (--timer < 0) {
            clearInterval(countdown);
            display.textContent = "OFERTA ENCERRADA";
            display.style.color = "#FF0000";
        }
    }, 1000);
}

window.onload = function () {
    const fifteenMinutes = 60 * 15;
    startTimer(fifteenMinutes);
};