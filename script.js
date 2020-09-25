/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

class navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="topnav" id="myTopnav">
    <a href="/">Wesley de Nooijer</a>
    <a href="essays-index.html">Essays</a>
    <a href="projects-index.html">Projects</a>
    <a href="innovation-index.html">Roam</a>
    <a class="social" aria-hidden="true" href="https://www.linkedin.com/in/wesleydenooijer/">
      <i class="fa fa-linkedin" style="color:#0077B5"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://medium.com/@wesleydenooijer">
      <i class="fa fa-medium" style="color:white"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://github.com/WesleyNooijer">
      <i class="fa fa-github" style="color:white"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://twitter.com/WesleyNooijer">
      <i class="fa fa-twitter" style="color:#1DA1F2"></i> 
    </a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars" style="color:white"></i>
    </a>
  </div>
    `
  }
}
customElements.define('navbar-template', navbar);
