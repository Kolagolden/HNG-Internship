document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        currentTimeUTC.textContent = `Current Time in UTC: ${now.toUTCString().split(' ')[4]}`;
        currentDay.textContent = `Current Day: ${dayNames[now.getUTCDay()]}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
