var goruntu = document.getElementById("siparis_tamamla");
goruntu.innerHTML = localStorage.length

var today = new Date();

var time =  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("tarih").innerHTML = time
var son_odeme = document.getElementById("son_odeme");
var test = ""
keys = Object.keys(localStorage);
var toplam = 0;
for(var k = 0; k < keys.length; k++){
  var bilgiler = JSON.parse(`${localStorage.getItem(keys[k])}`);
  son_odeme.innerHTML += '<tr><td class="col-md-9"><em>'+keys[k]+'</em> </td><td class="col-md-1" style="text-align: center">'+(bilgiler.urun_adedi)+'</td>  <td class="col-md-1 text-center">&#8378;\
  '+(bilgiler.urun_fiyati)+'</td><td class="col-md-1 text-center">&#8378;'+(bilgiler.urun_toplami)+'</td></td><td class="col-md-1 text-center"><button class="btn btn-outline-danger" id="'+keys[k]+'"onclick="sil(this)"><i class="fa fa-trash"></i></button></td></tr>'
  toplam += bilgiler.urun_toplami;
}
son_odeme.innerHTML += '<tr><td>   </td><td>   </td><td class="text-right"><h4><strong>Toplam: </strong></h4></td><td class="text-center text-danger"><h4><strong>&#8378;'+toplam+'</strong></h4></td>  </tr>'
test = son_odeme
function siparis_ekle(bilgiler){
  //bilgiler urun_adı, acıklaması ve fiyatı yer almaktadır.
  var adet = document.getElementById("miktar").value
  var urun_adi = ((bilgiler.id).split("+"))[0]
  var urun_aciklamasi = ((bilgiler.id).split("+"))[1]
  var urun_fiyati = ((bilgiler.id).split("+"))[2]
  var urun_toplami = ((bilgiler.id).split("+"))[2] * adet
  const storage = {
      urun_adi: urun_adi,
      urun_aciklamasi: urun_aciklamasi,
      urun_adedi: adet,
      urun_fiyati: urun_fiyati,
      urun_toplami: urun_toplami,
  }
  window.localStorage.setItem(urun_adi, JSON.stringify(storage));
      jSuites.notification({
        name: 'Siparişiniz Eklenmiştir.',
        message: urun_adi,
    })
    var sepet = document.getElementById("sepet");
    sepet.style.visibility='visible';
  var goruntu = document.getElementById("siparis_tamamla");
  goruntu.innerHTML = localStorage.length
}
function tamamla(){

  location.href = "./Siparis_Tamamla.html";

}
function siparis_son(){
 // html2canvas(document.getElementById('to_wp'), {
  //  onrendered: function(canvas) {
      // document.body.appendChild(canvas);
    //  return Canvas2Image.saveAsPNG(canvas);
      //var dataURL = canvas.toDataURL("image/jpg")
      //dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
 //   }
 // });
  adres = document.getElementById("adres").value
  ad_soyad = document.getElementById("ad_soyad").value

  var mesaj = " https://wa.me/905465402741?text=";
  keys = Object.keys(localStorage);
  for(var k = 0; k < keys.length; k++){
    var bilgiler = JSON.parse(`${localStorage.getItem(keys[k])}`);
    mesaj += " *Urun Adi:* "+ keys[k] + " *Urun Miktarı:* "+(bilgiler.urun_adedi)+"%0a"
  }
  mesaj += " *Alici Adi Soyadi:* "+ad_soyad+"%0a"
  mesaj += " *Alici Adres:* "+adres+"%0a"
  mesaj +=" *Toplam Fiyat:* " + toplam

  location.href = mesaj;
}

function sil(test){

 window.localStorage.removeItem(test.id);
 location.reload();
}
