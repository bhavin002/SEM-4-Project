if (window.XMLHttpRequest) {
  xmlhttp = new XMLHttpRequest();
} else {
  xmlhttp = new ActiveXObject();
}
xmlDoc = xmlhttp.responseXML;
NavBar = document.getElementById("navBars");
NavBar.innerHTML = NavVaules();
function NavVaules() {
  return `
    <div class="col-md-12">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="../index.html"><img src="../images/logo.png" alt="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src="../images/menu.png" alt="menu" class="text-light">
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link text-light ancor  mx-md-4" href="../index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light ancor mx-md-4" href="../pages/services.html">Service</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-light ancor mx-md-4" href="../pages/industries.html">Industries</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-light ancor mx-md-4" href="../pages/about.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light ancor mx-md-4" href="../pages/contact.html">Contact</a>
          </li>
        </ul>
        <a href="./contact.html" class="mobile_none  ml-md-5"><button class="btn start">Talk With Our CyberSecurity Experts</button></a>
      </div>
    </nav>
  </div>`
}