$(document).ready(function(){
    $('select').formSelect();
  });

const solventA=document.getElementById('outletA');
const solventB=document.getElementById('outletB');
const solventC=document.getElementById('outletC');
const solventD=document.getElementById('outletD');
const reset=document.querySelector("#reset");
const run=document.querySelector(".run");
const pipe=document.querySelectorAll(".opipe")

loadEventListners();

function loadEventListners(){
  run.addEventListener('click',runTask);
  reset.addEventListener('click',resetPage);
}

function runTask(e){
    e.preventDefault();
    
    if(solventA.value==="" && solventB.value==="" && solventC.value==="" && solventD.value==="" )
       alert("Enter Outlets");
    else
    {
      if(solventA.value !==""){
    var outletA=document.querySelector(".outlet"+solventA.value);
    outletA.setAttribute('src',"images/yellowPipe.png");}
      if(solventB.value !==""){  
    var outletB=document.querySelector(".outlet"+solventB.value);
    outletB.setAttribute('src',"images/redPipe.png");
       
  }
      if(solventC.value !==""){
    var outletC=document.querySelector(".outlet"+solventC.value);
    outletC.setAttribute('src',"images/greenPipe.png");}
      if(solventD.value !==""){
    var outletD=document.querySelector(".outlet"+solventD.value);
    outletD.setAttribute('src',"images/bluePipe.png");}
    }
     }
  


function resetPage(){
       console.log(pipe);
}
loadEventListners();