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
    <a href="/essays-index.html">Essays</a>
    <a href="/tweetstorms-index.html">Tweetstorms</a>
    <a href="/projects-index.html">Projects</a>
    <a href="/links.html">Links</a>
    <a class="social" aria-hidden="true" href="https://www.linkedin.com/in/wesleydenooijer/" target="_blank">
      <i class="fa fa-linkedin" style="color:#0077B5"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://medium.com/@wesleydenooijer" target="_blank">
      <i class="fa fa-medium" style="color:white"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://github.com/WesleyNooijer" target="_blank">
      <i class="fa fa-github" style="color:white"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://twitter.com/WesleyNooijer" target="_blank">
      <i class="fa fa-twitter" style="color:#1DA1F2"></i> 
    </a>
    <a class="social" aria-hidden="true" href="https://techfrontiers.substack.com" target="_blank">
      <i class="fa fa-bookmark" style="color:#FFA500"></i> 
    </a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars" style="color:white"></i>
    </a>
  </div>
    `
  }
}
customElements.define('navbar-template', navbar);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}