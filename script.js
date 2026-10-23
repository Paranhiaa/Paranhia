function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    const size = Math.random() * 5 + 2 + 'px';
    const left = Math.random() * 100 + '%';
    const duration = Math.random() * 3 + 2 + 's';

    snowflake.classList.add('snowflake');
    snowflake.style.left = left;
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.background = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.opacity = Math.random();
    snowflake.style.filter = 'blur(1px)';
    snowflake.style.animation = `fall ${duration} linear forwards`;

    snowContainer.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), parseFloat(duration) * 1000);
}

setInterval(createSnowflake, 30);
