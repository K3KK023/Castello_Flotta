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



// script.js
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.media img');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const fullscreenImg = document.getElementById('fullscreen-img');
  const closeBtn = document.getElementById('close-btn');

  images.forEach((img, index) => {
      img.addEventListener('click', () => {
          fullscreenImg.src = img.src;
          fullscreenImage.style.display = 'block';
      });
  });

  closeBtn.addEventListener('click', () => {
      fullscreenImage.style.display = 'none';
  });
});