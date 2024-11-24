document.getElementById("revealButton").addEventListener("click", function () {
    const message = document.getElementById("message");
    message.classList.remove("hidden");
    this.classList.add("hidden");
});

document.getElementById("yesButton").addEventListener("click", function () {
    const response = document.getElementById("response");
    response.innerHTML = "<h2>🎉 Yay! Now,can i call u  mine? ❤️</h2>";
    response.classList.remove("hidden");
    document.getElementById("message").classList.add("hidden");
});

document.getElementById("noButton").addEventListener("click", function () {
    const response = document.getElementById("response");
    response.innerHTML = "<h2>💔 Oh no... I'll always cherish you, though. 🌹</h2>";
    response.classList.remove("hidden");
    document.getElementById("message").classList.add("hidden");
});
