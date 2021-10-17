keys = Object.keys(localStorage);
if(keys.length == 0){
  var sepet = document.getElementById("sepet");
  sepet.style.visibility='hidden';
}else{
  var sepet = document.getElementById("sepet");
  sepet.style.visibility='visible';
}
