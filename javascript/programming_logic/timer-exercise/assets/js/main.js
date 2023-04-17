function clock() {
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('en-GB', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'GMT'
        });
    }
    
    const timer = document.querySelector('.timer');
    let seconds = 0;
    let interval;
    
    document.addEventListener('click', event => {
        const element = event.target;
    
        if (element.classList.contains('start-button')) {
            clearInterval(interval);
            interval = setInterval(() => timer.innerHTML = getTimeFromSeconds(++seconds), 1000);
            timer.classList.remove('paused');
        }
        if (element.classList.contains('pause-button')) {
            clearInterval(interval);
            timer.classList.add('paused');
        }
        if (element.classList.contains('reset-button')) {
            clearInterval(interval);
            timer.classList.remove('paused');
            seconds = 0;
            timer.innerHTML = '00:00:00';
        }
    });
}

clock();
