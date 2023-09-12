function newFunction() {
    type = "text/javascript"; src = "https://cs.iubenda.com/autoblocking/3304961.js"
}

function positionFooter() {
  const footer = document.querySelector(".MAKERS-FOOTER");
  const body = document.querySelector("body");
  const windowHeight = window.innerHeight;
  const bodyHeight = body.clientHeight;
  if (windowHeight > bodyHeight) {
    footer.style.position = "fixed";
    footer.style.bottom = "0";
  } else {
    footer.style.position = "static";
  }
}

window.addEventListener("resize", positionFooter);
window.addEventListener("load", positionFooter);
