$(document).ready(function(){
  $('select').formSelect();
});

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
console.log(timerA);
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

function runA(){
  
  if(solventA.value===""){
    alert("Please select Outlet");
  }
  else{
    display(btnA,stopA);
    display(timerA,counterA);
  var outletA=document.querySelector(".outlet"+solventA.value);
  outletA.setAttribute('src',"images/yellowPipe.png");}
  runCounterA(Number(timerA.value));
}
function runB(){
  
  if(solventB.value===""){
    alert("Please select Outlet");
  }
  else{
    display(btnB,stopB);
    display(timerB,counterB);
  var outletB=document.querySelector(".outlet"+solventB.value);
  outletB.setAttribute('src',"images/redPipe.png");}
  runCounterB(Number(timerB.value));
}
function runC(){
  if(solventC.value===""){
    alert("Please select Outlet");
  }
  else{
  display(btnC,stopC);
  display(timerC,counterC);
  var outletC=document.querySelector(".outlet"+solventC.value);
  outletC.setAttribute('src',"images/greenPipe.png");
  runCounterC(Number(timerC.value));
}
}
function runD(){
  if(solventC.value===""){
    alert("Please select Outlet");}
  else{
  display(btnD,stopD);
  display(timerD,counterD);
  var outletD=document.querySelector(".outlet"+solventD.value);
    outletD.setAttribute('src',"images/bluePipe.png");
    runCounterD(Number(timerD.value));
}}

function stopAflow(){
  display(stopA,btnA);
  display(counterA,timerA);
  var outletA=document.querySelector(".outlet"+solventA.value);
  outletA.setAttribute('src',"images/pipe.png");
  timerA.value="";
}
function stopBflow(){
  display(stopB,btnB);
    display(counterB,timerB);
  var outletB=document.querySelector(".outlet"+solventB.value);
  outletB.setAttribute('src',"images/pipe.png");
  timerB.value="";
}
function stopCflow(){
  display(stopC,btnC);
  display(counterC,timerC);
  var outletC=document.querySelector(".outlet"+solventC.value);
  outletC.setAttribute('src',"images/pipe.png");
  timerC.value="";
}
function stopDflow(){
  display(stopD,btnD);
  display(counterD,timerD);
  var outletD=document.querySelector(".outlet"+solventD.value);
  outletD.setAttribute('src',"images/pipe.png");
  timerD.value="";
}
let remSecondsA=1;
let remSecondsB=1;
let remSecondsC=1;
let remSecondsD=1;
function runCounterA(time){
  var x = setInterval(function() {
  counterA.innerHTML = remSecondsA ;
  remSecondsA++;
  if(remSecondsA===time+2){
     stopAflow();
     remSecondsA=1;
     clearInterval(x);
     counterA.innerHTML=0;
  }  
}, 1000);
}
function runCounterB(time){
  var x = setInterval(function() {
  counterB.innerHTML = remSecondsB ;
  remSecondsB++;
  if(remSecondsB===time+2){
     stopBflow();
     remSecondsB=1;
     clearInterval(x);
     counterB.innerHTML=0;
  }  
}, 1000);
}
function runCounterC(time){
  var x = setInterval(function() {
  counterC.innerHTML = remSecondsC ;
  remSecondsC++;
  if(remSecondsC===time+2){
     stopCflow();
     remSecondsC=1;
     clearInterval(x);
     counterC.innerHTML=0;
  }  
}, 1000);
}
function runCounterD(time){
  var x = setInterval(function() {
  counterD.innerHTML = remSecondsD ;
  remSecondsD++;
  if(remSecondsD===time+2){
     stopDflow();
     remSecondsD=1;
     clearInterval(x);
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
       
}
loadEventListners();