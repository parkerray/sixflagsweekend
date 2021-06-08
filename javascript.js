const countDownDate = new Date("Sep 10, 2021 22:00:00 UTC").getTime(); //Add 5 hours for CST > UTC timezone
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#countdown").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}, 1000);

const countDownElement = document.querySelector("#countdown");
countDownElement.classList.remove("hide");