$(document).ready(()=>{
    $.getJSON("ind.json",(res)=>{
      for(var i=0;i<res.length;i++){
        let img = res[i].image;
        let tit = res[i].title;
        let des = res[i].desc;
        $("#indcard").append('<div class="col-md-3 mobile_card">' + 
          '<div class="card mx-md-2 mobile_card" style="width: 18rem;">' +
            '<img class="card-img-top card_image" src="'+ img +'" alt="Card image cap">' +
            '<div class="card-body">' +
              '<h5 class="card-title text-center">"'+ tit +'"</h5>' +
              '<p class="card-text text-center">"'+ des +'"</p>' +
            '</div>' +
          '</div>' +
        '</div>')
      }
    })
  })