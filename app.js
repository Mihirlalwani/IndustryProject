$(document).ready(function(){
    $('select').formSelect();
  });

const solvent=document.querySelector(".solvent");
const reset=document.querySelector("#reset");
const form=document.querySelector("#form");

loadEventListners();

function loadEventListners(){
form.addEventListener('submit',runTask);
reset.addEventListener('click',resetPage);}

function runTask(e){
    e.preventDefault();
    var outlet= $('#outlet-option').val();
     if(solvent.value==="" || outlet===[]){
         alert("Please input Values");
     }
     for(let i=0;i<outlet.length;i++){
    var outletPipe=document.querySelector(".outlet"+outlet[i]);
    outletPipe.setAttribute('src',"images/"+solvent.value+"Pipe.png");
     }
  
}

function resetPage(){
       location.reload();
}
