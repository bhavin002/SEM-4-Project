$(document).ready(function () {

    NavBar = document.getElementById("navBars");
    NavBar.innerHTML = NavVaules();

    Footer = document.getElementById("footers");
    Footer.innerHTML = fooValues();
})

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject();
}
xmlhttp.open("GET", "ser.xml", false)
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

serviceCards = document.getElementById("cards");

for (i = 0; i < xmlDoc.getElementsByTagName("ser").length; i++) {
    serviceCards.innerHTML += cardsValue(i);
}
function cardsValue(i) {
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

function NavVaules() { // aa call kya thay che?
    return `
      <div class="col-md-12">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src="/images/menu.png" alt="menu" class="text-light">
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link text-light ancor  mx-md-4" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light ancor mx-md-4" href="services.html">Service</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link text-light ancor mx-md-4" href="industries.html">Industries</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link text-light ancor mx-md-4" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light ancor mx-md-4" href="contact.html">Contact</a>
            </li>
          </ul>
          <a href="contact.html" class="mobile_none  ml-md-5"><button class="btn start">Talk With Our CyberSecurity Experts</button></a>
        </div>
      </nav>
    </div>`

    // kai khabar nathi padati ka ela su che 😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆
    //shanti rakh
}

function fooValues() {
    return `
    <div class="col-md-4 py-md-5" style="line-height: 2.5rem;">
    <h2 class="text-dark pt-5 pt-md-0" style="font-weight:bolder">Cyber Security Services</h2>
    <p class="lead">A leading provider of cybersecurity services and solutions for distribution and technology
      partners around the United States.</p>
  </div>
  <div class="col-md-3 py-md-5">
    <h2 class="text-dark" style="font-weight:bolder">Useful Links</h2>
    <li class="footer-li">
      <a href="about.html" class="footer-a">↗️ About Us</a>
    </li>
    <li class="footer-li">
      <a href="services.html" class="footer-a">↗️ Services</a>
    </li>
    <li class="footer-li">
      <a href="industries.html" class="footer-a">↗️ Industries</a>
    </li>
    <li class="footer-li">
      <a href="contact.html" class="footer-a">↗️ Contact Us</a>
    </li>
  </div>
  <div class="col-md-5 py-md-5">
    <h2 style="font-weight:bolder" class="py-md-0 py-3">Contact Us</h2>
    <p class="lead">Address : <span style="color: rgb(81, 79, 79);">752 N. State Street #172, Westerville, Ohio,
        43082, US</span></p>
    <p class="lead">Email : <span style="color: rgb(81, 79, 79);">sales@cybersecurity.com</span></p>
    <p class="lead">Phone : <span style="color: rgb(81, 79, 79);">+1-800-390-1053</span></p>
    <p class="lead">Business hours : <span style="color: rgb(81, 79, 79);">24 Hours / 7 Days</span></p>
  </div>`
}

$(document).ready(() => {
    $.getJSON("ind.json", (res) => {
        for (var i = 0; i < res.length; i++) {
            let img = res[i].image;
            let tit = res[i].title;
            let des = res[i].desc;
            $("#indcard").append('<div class="col-md-3 mobile_card">' +
                '<div class="card mx-md-2 mobile_card" style="width: 18rem;">' +
                '<img class="card-img-top card_image" src="' + img + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title text-center">"' + tit + '"</h5>' +
                '<p class="card-text text-center">"' + des + '"</p>' +
                '</div>' +
                '</div>' +
                '</div>')
        }
    })
})