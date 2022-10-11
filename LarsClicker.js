var mælk = 0 //Cookies
var mælkC = 0 //Cookies to be displayed after converting to tons etc
var MPS = 1.1 //Cookies per second
var MPC = 1 //Cookies per click

var slaverM = 0
var børnearbejdeM = 0
var nseelevM = 0
var landmandM = 0
var nselærerM = 0
var arlamalkeriM = 0
var click = new Audio("audio/buy1.mp3")
var a1 = new Audio ("audio/Blather.mp3")
var a2 = new Audio ("audio/JobJob.mp3")
var a3 = new Audio ("audio/Nons1.mp3")
var a4 = new Audio ("audio/Nons2.mp3")
var a5 = new Audio ("audio/Talk.mp3")


var save = window.setInterval(function(){
    document.cookie = "mælk=1; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    console.log(save)
     }, 1000);

function music() {
var rng = (Math.floor(Math.random() * 100))
console.log("sex " + rng)
}

function showbuildings() {
    document.getElementById("buildhud").style.zIndex = 1;
    document.getElementById("BB").style.backgroundColor = "#bfbfbf"
    document.getElementById("upgradehud").style.zIndex = 0;
    document.getElementById("BU").style.backgroundColor = "white";
}
function showupgrades() {
    document.getElementById("buildhud").style.zIndex = 0;
    document.getElementById("UB").style.backgroundColor = "white"
    document.getElementById("upgradehud").style.zIndex = 1;
    document.getElementById("UU").style.backgroundColor = "#bfbfbf";
}



function update() {
    mælkC = Math.floor(mælk)
    document.getElementById("amount").innerHTML = "Du har " + mælkC + " " + " mælk."
    document.getElementById("MPS").innerHTML = "Du laver " + MPS + "  mælk hvert sekund."
    console.log(mælk)
    document.title = "Mælk = " + mælkC
}

//On click of "lars"
function LarsClick() {
    music()
    mælk += MPC
    MPS++
    click.play();
    click.currentTime=0;
    update()
}

//Makes MPS into actual milk
var Mps = window.setInterval(function(){
 mælk += MPS
 update()
  }, 1000);


// Upgrades //

var slaveamount = 0;
var slavepercent = 0.1;
var slavestartprice = 10;
var slavecurrentprice = slavestartprice += slavestartprice * slavepercent;
var slaveshownprice = Math.floor(slavecurrentprice)



function slaver() {
if(mælk >= slavecurrentprice) {
slaveamount++
mælk - slavecurrentprice
console.log(slavecurrentprice + "spaghewt")
document.getElementById("slaveP").innerHTML = "Koster " + slaveshownprice + " mælk"
document.getElementById("slaveA").innerHTML = "Du har " + slaveamount + " slaver"
update()
    }
}

function børnearbejde() {
    if(mælk == 1) {
        console.log("ok")
    }
}

function nseelev() {
    if(mælk == 1) {
        console.log("ok")
    }
}

function landmand() {
    if(mælk == 1) {
        console.log("ok")
    }
}

function nselærer() {
    if(mælk == 1) {
        console.log("ok")
    }
}

function arlamalkeri() {
    if(mælk == 1) {
        console.log("ok")
    }
}

function nse() {
    if(mælk == 1) {
        console.log("ok")
    }
}
