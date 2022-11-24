var mælk = 0 //Cookies
var mælkC = 0 //Cookies to be displayed after converting to tons etc
var MPS = 1.1 //Cookies per second
var MPC = 1 //Cookies per click
//mængden af dine arbejder
var slaverM = 0
var børnearbejdeM = 0
var nseelevM = 0
var landmandM = 0
var nselærerM = 0
var arlamalkeriM = 0
//audio
var click = new Audio("audio/buy1.mp3")
var a1 = new Audio ("audio/Blather.mp3")
var a2 = new Audio ("audio/JobJob.mp3")
var a3 = new Audio ("audio/Nons1.mp3")
var a4 = new Audio ("audio/Nons2.mp3")
var a5 = new Audio ("audio/Talk.mp3")
//konvertere mængder
var ranges = [
    { divider: 1e21 , suffix: 'Sx'},
    { divider: 1e18 , suffix: 'Qi' },
    { divider: 1e15 , suffix: 'Qu' },
    { divider: 1e12 , suffix: 'T' },
    { divider: 1e9 , suffix: 'B' },
    { divider: 1e6 , suffix: 'M' },
    { divider: 1e3 , suffix: 'k' }
  ];
  
  function formatNumber(n) {    
    for (var i = 0; i < ranges.length; i++) {
      if (n >= ranges[i].divider) {
        return (n / ranges[i].divider).toFixed(2).toString() + ranges[i].suffix;
        
    }
    }
    return n.toString();
  }
  //knapper og hud
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
    document.getElementById("amount").innerHTML = "Du har " + formatNumber(mælkC) + " " + " mælk."
    document.getElementById("MPS").innerHTML = "Du laver " + formatNumber(MPS) + "  mælk hvert sekund."
    document.title = "Mælk = " + mælkC
}

//On click of "lars"
function LarsClick() {
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

//variabler for slaver 
var slave_amount = 0;
var slave_percent = 0.1;
var slave_startprice = 15;
var slave_currentprice = slave_startprice += slave_startprice * slave_percent;
var slave_shownprice = Math.floor(slave_currentprice)
//variabler for børnearbejde
var børnearbejde_amount = 0;
var børnearbejde_percent = 0.15;
var børnearbejde_startprice = 100;
var børnearbejde_currentprice = børnearbejde_startprice+= 
børnearbejde_startprice * børnearbejde_percent;
var børnearbejde_shownprice = math.floor(børnearbejde_currentprice);
//variabler for nseelev
var nseelev_amount = 0;
var nseelev_percent = 0.25
var nseelev_startprice = 500;
var nseelev_currentprice = nseelev_startprice+=
nseelev_startprice * nseelev_percent;
var nseelev_shownprice = math.floor(nseelev_currentprice);
//variabler for landmand
var landmand_amount = 0;
var landmand_percent = 0.30;
var landmand_startprice = 5000;
var landmand_currentprice = landmand_startprice+= 
landmand_startprice * landmand_percent;
var landmand_shownprice = math.floor(landmand_currentprice);
//variabler for nselærer
var nselærer_amount = 0;
var nselærer_percent = 0.45;
var nselærer_startprice = 50000;
var nselærer_currentprice = nselærer_startprice+=
nselærer_startprice * nselærer_percent;
var math.floor(nselærer_currentprice);
//variabler for arlamalkeri
var arlamalkeri_amount = 0;
var arlamalkeri_percent = 0.60;
var arlamalkeri_startprice = 100000;
var arlamalkeri_currentprice = arlamalkeri_startprice+= 
arlamalkeri_startprice * arlamalkeri_percent;
var math.floor(arlamalkeri_currentprice);
//variabler for nordborgslots_efterskole 2.0
var nordborgslots_efterskole_amount = 0;
var nordborgslots_efterskole_percent = 0.75;
var nordborgslots_efterskole_startprice = 100000000;
var nordborgslots_efterskole_currentprice = nordborgslots_efterskole_startprice+=
nordborgslots_efterskole_startprice * nordborgslots_efterskole_percent;
var math.floor(nordborgslots_efterskole_currentprice);
//funktioner
function slaver() {
if(mælk >= slave_currentprice) {
slave_amount++
mælk = mælk - slave_currentprice
MPS += 1
slave_currentprice = slave_startprice += slave_startprice * slave_percent;
console.log(slave_currentprice)
document.getElementById("slaveP").innerHTML = "Koster " + slave_shownprice + " mælk"
document.getElementById("slaveA").innerHTML = "Du har " + slave_amount + " slaver"
update()
    }
}
  
function børnearbejde(){
if(mælk>= børnearbejde_currentprice){
børnearbejde_amount++;
mælk = mælk - børnearbejde_currentprice;
MPS += 10;
børnearbejde_currentprice = børnearbejde_startprice += 
børnearbejde_startprice * børnearbejde_percent;
console.log(børnearbejde_currentprice)
document.getElementById("BørnearbejdereP").innerHTML = "Koster " + børnearbejde_shownprice + "mælk "
document.getElementById("BørnearbejdereA").innerHTML = " Du har" + børnearbejde_amount + "Børnearbejdere "
update()
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

