if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject();
}
xmlDoc = xmlhttp.responseXML;
NavBar = document.getElementById("footers");
NavBar.innerHTML = fooValues();
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
      <a href="../pages/about.html" class="footer-a">↗️ About Us</a>
    </li>
    <li class="footer-li">
      <a href="../pages/services.html" class="footer-a">↗️ Services</a>
    </li>
    <li class="footer-li">
      <a href="../pages/industries.html" class="footer-a">↗️ Industries</a>
    </li>
    <li class="footer-li">
      <a href="../pages/contact.html" class="footer-a">↗️ Contact Us</a>
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