  var dat = data
  var hst = document.getElementById("highscore");
  for(var k = 0; k < dat.prodcuts.length; k++){
    hst.innerHTML += '<div class="col mb-4"> <div class="card h-50"><img class="card-img-top" src="'+(dat.prodcuts[k].photo_name)+'" /><div class="card-body p-4"><div class="text-center"><h6 class="fw-bolder">'
    +(dat.prodcuts[k].manu_name)+'</h6>'+(dat.prodcuts[k].details)+'<p>'+(dat.prodcuts[k].price)+' TL</p></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center"><button type="button" class="btn btn-primary" onclick="siparis_ekle(this)" id="'+(dat.prodcuts[k].manu_name)+"+"+(dat.prodcuts[k].details)+"+"+(dat.prodcuts[k].price)+'">Ekle</button>&nbsp;&nbsp;<input type="number" value="1" min="0" max="100" id="miktar" class="btn btn-outline-danger"/></div>'+
    '</div></div></div>'
  }
