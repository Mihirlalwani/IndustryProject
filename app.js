$(document).ready(function(){
  $('select').formSelect();
});
var A;
var B;
var C;
var D;
const solventA=document.getElementById('outletA');
const solventB=document.getElementById('outletB');
const solventC=document.getElementById('outletC');
const solventD=document.getElementById('outletD');
const btnA=document.getElementById('btnA');
const btnB=document.getElementById('btnB');
const btnC=document.getElementById('btnC');
const btnD=document.getElementById('btnD');
const reset=document.querySelector("#reset");
const run=document.querySelector(".run");
const pipe=document.querySelectorAll(".opipe");
const timerA=document.getElementById('secondsA');
const timerB=document.getElementById('secondsB');
const timerC=document.getElementById('secondsC');
const timerD=document.getElementById('secondsD');
const counterA=document.querySelector(".counterA");
const counterB=document.querySelector(".counterB");
const counterC=document.querySelector(".counterC");
const counterD=document.querySelector(".counterD");
const stopA=document.getElementById('stopA');
const stopB=document.getElementById('stopB');
const stopC=document.getElementById('stopC');
const stopD=document.getElementById('stopD');
const pumpTopA=document.getElementById('yellow');
const pumpTopB=document.getElementById('red');
const pumpTopC=document.getElementById('green');
const pumpTopD=document.getElementById('blue');

loadEventListners();

function loadEventListners(){

  btnA.addEventListener('click',runA);
  btnB.addEventListener('click',runB);
  btnC.addEventListener('click',runC);
  btnD.addEventListener('click',runD);
  stopA.addEventListener('click',stopAflow);
  stopB.addEventListener('click',stopBflow);
  stopC.addEventListener('click',stopCflow);
  stopD.addEventListener('click',stopDflow);
  reset.addEventListener('click',resetPage);
}
function changeA(){
  var x=solventA.value
  if(x==="-1"){
    alert("Outlet already in Use");
  } 
  else{
  // solventB.removeChild(solventB.children[x]);
  // solventC.removeChild(solventC.children[x]);
  // solventD.removeChild(solventD.children[x]);

  solventB.children[x].value="-1";
  solventC.children[x].value="-1";
  solventD.children[x].value="-1";
  }
}

function changeB(){
  
  var x=solventB.value
  if(x==="-1"){
    alert("Outlet already in Use");
  } 
  else{
  // solventA.removeChild(solventA.children[x]);
  // solventC.removeChild(solventC.children[x]);
  // solventD.removeChild(solventD.children[x]);

  solventA.children[x].value="-1";
  solventD.children[x].value="-1";
  solventC.children[x].value="-1";}

}

function changeC(){
 
  var x=solventC.value
  if(x==="-1"){
    alert("Outlet already in Use");
  } 
  else{
  // solventB.removeChild(solventB.children[x]);
  // solventA.removeChild(solventA.children[x]);
  // solventD.removeChild(solventD.children[x]);

  solventA.children[x].value="-1";
  solventB.children[x].value="-1";
  solventD.children[x].value="-1";}

}

function changeD(){
  
  var x=solventD.value
  if(x==="-1"){
    alert("Outlet already in Use");
  } 
  else{
  // solventB.removeChild(solventB.children[x]);
  // solventC.removeChild(solventC.children[x]);
  // solventA.removeChild(solventA.children[x]);

  solventA.children[x].value="-1";
  solventB.children[x].value="-1";
  solventC.children[x].value="-1";}

}
function runA(){
  
  if(solventA.value==="" || timerA.value===""){
    alert("Please Input Values");
  }
  else{
    display(btnA,stopA);
    // display(timerA,counterA);
    pumpTopA.setAttribute('src',"images/topyellow.png")
  var outletA=document.querySelector(".outlet"+solventA.value);
  outletA.setAttribute('src',"images/yellowPipe.png");
  runCounterA(Number(timerA.value));}
}
function runB(){
 
  if(solventB.value==="" ||timerB.value===""){
    alert("Please Input Values");
  }
  else{
    display(btnB,stopB);
    // display(timerB,counterB);
    pumpTopB.setAttribute('src',"images/topred.png")
  var outletB=document.querySelector(".outlet"+solventB.value);
  outletB.setAttribute('src',"images/redPipe.png");
  runCounterB(Number(timerB.value));}
}
function runC(){
  if(solventC.value==="" || timerC.value===""){
    alert("Please Input Values");
  }
  else{
  display(btnC,stopC);
  // display(timerC,counterC);
  pumpTopC.setAttribute('src',"images/topgreen.png")
  var outletC=document.querySelector(".outlet"+solventC.value);
  outletC.setAttribute('src',"images/greenPipe.png");
  runCounterC(Number(timerC.value));
}
}
function runD(){
  if(solventD.value==="" || timerD.value===""){
    alert("Please Input Values");}
  else{
  display(btnD,stopD);
  // display(timerD,counterD);
  pumpTopD.setAttribute('src',"images/topblue.png")

  var outletD=document.querySelector(".outlet"+solventD.value);
    outletD.setAttribute('src',"images/bluePipe.png");
    runCounterD(Number(timerD.value));
}}

function stopAflow(){
  display(stopA,btnA);
  // display(counterA,timerA);
  pumpTopA.setAttribute('src',"images/pumpTopYellow.png")
  var outletA=document.querySelector(".outlet"+solventA.value);
  outletA.setAttribute('src',"images/pipe.png");
  //remSecondsA=Number(timerA.value)+2;
  clearInterval(A);
  counterA.innerHTML=0;
  remSecondsA=1;
  timerA.value="";
  
}
function stopBflow(){
  display(stopB,btnB);
    //display(counterB,timerB);
    pumpTopB.setAttribute('src',"images/pumpTopRed.png")
  var outletB=document.querySelector(".outlet"+solventB.value);
  outletB.setAttribute('src',"images/pipe.png");
  clearInterval(B);
  counterB.innerHTML=0;
  remSecondsB=1;
  timerB.value="";
}
function stopCflow(){
  display(stopC,btnC);
  //display(counterC,timerC);
  pumpTopC.setAttribute('src',"images/pumpTopGreen.png")
  var outletC=document.querySelector(".outlet"+solventC.value);
  outletC.setAttribute('src',"images/pipe.png");
  clearInterval(C);
     counterC.innerHTML=0;
     remSecondsC=1;
  timerC.value="";
}
function stopDflow(){
  display(stopD,btnD);
 // display(counterD,timerD);
  pumpTopD.setAttribute('src',"images/pumpTopBlue.png")
  var outletD=document.querySelector(".outlet"+solventD.value);
  outletD.setAttribute('src',"images/pipe.png");
  clearInterval(D);
  counterD.innerHTML=0;
  remSecondsD=1;
  timerD.value="";
}

let remSecondsA=1;
let remSecondsB=1;
let remSecondsC=1;
let remSecondsD=1;
function runCounterA(time){
   A = setInterval(function() {
  counterA.innerHTML = remSecondsA ;
  remSecondsA++;
    
   if(remSecondsA===time+2){
      stopAflow();
      remSecondsA=1;
      clearInterval(A);
      counterA.innerHTML=0;
    }
    //stopA.addEventListener('click',clearInterval(A));  
}, 1000);
}





function runCounterB(time){
   B = setInterval(function() {
  counterB.innerHTML = remSecondsB ;
  remSecondsB++;
  if(remSecondsB===time+2){
     stopBflow();
     remSecondsB=1;
     clearInterval(B);
     counterB.innerHTML=0;
  }  
}, 1000);
}
function runCounterC(time){
   C = setInterval(function() {
  counterC.innerHTML = remSecondsC ;
  remSecondsC++;
  if(remSecondsC===time+2){
     stopCflow();
     remSecondsC=1;
     clearInterval(C);
     counterC.innerHTML=0;
  }  
}, 1000);
}
function runCounterD(time){
   D = setInterval(function() {
  counterD.innerHTML = remSecondsD ;
  remSecondsD++;
  if(remSecondsD===time+2){
     stopDflow();
     remSecondsD=1;
     clearInterval(D);
     counterD.innerHTML=0;
  }  
}, 1000);
}

// function runTask(e){

//     e.preventDefault();
//     console.log(e.target);
//     if(solventA.value==="" && solventB.value==="" && solventC.value==="" && solventD.value==="" )
//        alert("Enter Outlets");
//     else
//     {
//       if(e.target.classList.contains('btnA')){
//     var outletA=document.querySelector(".outlet"+solventA.value);
//     outletA.setAttribute('src',"images/yellowPipe.png");}
//       if(e.target.classList.contains('btnB')){  
//     var outletB=document.querySelector(".outlet"+solventB.value);
//     outletB.setAttribute('src',"images/redPipe.png");
       
//   }
//       if(e.target.classList.contains('btnC')){
//     var outletC=document.querySelector(".outlet"+solventC.value);
//     outletC.setAttribute('src',"images/greenPipe.png");}
//       if(e.target.classList.contains('btnD')){
//     var outletD=document.querySelector(".outlet"+solventD.value);
//     outletD.setAttribute('src',"images/bluePipe.png");}
//     }
//   }

  function display(item1,item2){
    item1.style.display='none';
    item2.style.display='block';
  }
  


function resetPage(){
     location.reload();  
}
loadEventListners();