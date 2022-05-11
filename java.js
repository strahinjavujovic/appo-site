var a=document.getElementById('submeni');
var f=document.getElementById('phnMenu');
if(a){
a.addEventListener('onclick',myFunction);
}
if(f){
  a.addEventListener('onclick',phoneMenu);
}
function myFunction() {
    document.getElementById('podmeni').classList.toggle("showon");
}
function phoneMenu(){
  document.querySelector('.phoneRes').classList.toggle("show");
}
  
  