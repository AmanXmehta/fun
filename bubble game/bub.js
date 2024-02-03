var timer = 60;
var score = 0;
var hitn = 0;

function increasescore() {
    score += 10;
    document.querySelector("#score").textContent = score;
};

function newhit() {
    hitn = Math.floor(Math.random() * 10)
    document.querySelector("#hit").innerHTML = hitn;
};

function makebubble() {
    let con = "";

    for (let i = 1; i <= 119; i++) {
        let n = Math.floor(Math.random() * 10)
        con += `<div class="button">${n}</div>`
    }

    document.querySelector(".body").innerHTML = con;

};

function runtime() {
    let time = setInterval(() => {

        if (timer > 0) {
            timer--;
        }
        else {
            clearInterval(time);
            document.querySelector(".body").innerHTML = `<h1> Game Over </h1>`;
        }

        document.querySelector("#timer").innerHTML = timer;

    }, 1000);

};

document.querySelector(".body").addEventListener("click", function (dets) {
    var clickedinfo = Number(dets.target.textContent);
    if (hitn == clickedinfo) {
        increasescore();
        newhit();
        makebubble();
    }
    else {
        // makebubble();
        // newhit();
    }
});

runtime();
makebubble();
newhit();

