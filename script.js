console.log("WELCOME TO KRATAVYA");

const helpCard =document.getElementById("help-connect");
console.log(helpCard);

if (helpCard) {
helpCard.addEventListener("click", function() {
    window.location.href = "/help_connect";
});
} else {
    console.log("Help Connect is not found!")
}

const reuseCard = document.getElementById("share-reuse");
console.log(reuseCard);

if (reuseCard) {
    reuseCard.addEventListener("click", function() {
        window.location.href = "/share_reuse";
    });
}

const civicCard = document.getElementById("civic-voice");
console.log(civicCard);

if (civicCard) {
    civicCard.addEventListener("click", function() {
        window.location.href = "/civic_voice";
    });
}
