let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let menu = document.getElementById("menu-bar");

menuBtn.addEventListener("click", function () {
  menu.classList.add("show");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});

function checkWidth() {
    if (window.innerWidth <= 768) { 
      menuBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    } else {
      menuBtn.style.display = 'none';
      closeBtn.style.display = 'none';
    }
  }
  

  checkWidth();
  

  window.addEventListener('resize', checkWidth);