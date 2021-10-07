var dat = data
var hst = document.getElementById("highscore");
for(var k = 0; k < dat.prodcuts.length; k++){
  hst.innerHTML += '<div class="col mb-5"> <div class="card h-100"><img class="card-img-top" src="'+(dat.prodcuts[k].photo_name)+'" alt="..." /><div class="card-body p-4"><div class="text-center"><h6 class="fw-bolder">'
  +(dat.prodcuts[k].manu_name)+'</h6>'+(dat.prodcuts[k].details)+'<p>'+(dat.prodcuts[k].price)+' TL</p></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center"><button type="button" class="btn btn-primary" onclick="test()">Ekle</button>&nbsp;&nbsp;<input type="number" value="1" min="0" max="100" id="sayi" class="btn btn-outline-danger"/></div>'+
  '</div></div></div>'
}
function test(){
alert("test	")
}
