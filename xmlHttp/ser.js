if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
  }else{
    xmlhttp=new ActiveXObject();
  }
  xmlhttp.open("GET","./ser.xml",false)
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  serviceCards = document.getElementById("cards");

  for(i=0;i<xmlDoc.getElementsByTagName("ser").length;i++){
    serviceCards.innerHTML+= cardsValue(i);
  }
  function cardsValue(i){
    return `
      <div class="col-md-4 mobile_card mt-3">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" style="height:200px"  src="${xmlDoc.getElementsByTagName('image')[i].childNodes[0].nodeValue}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${xmlDoc.getElementsByTagName('title')[i].childNodes[0].nodeValue}</h5>
            <p class="card-text">${xmlDoc.getElementsByTagName('desc')[i].childNodes[0].nodeValue}</p>
            <a href="./pages/services.html"><button class="btn start">Read More</button></a>
          </div>
        </div>
      </div>`
  }