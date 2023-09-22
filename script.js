
// Header
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const logo = document.querySelector(".logo img");
  const navLinks = document.querySelectorAll("nav ul li a");

  if (window.scrollY > 0) {
      header.style.backgroundColor = "rgba(16, 0, 33, 0.5)"; // Agrega opacidad al fondo
      logo.src = "src/logo.png"; 
      logo.style.maxWidth = "50px"; 
      navLinks.forEach(function(link) {
          link.style.fontSize = "14px"; // Cambia el tamaño de fuente de los enlaces
      });
      header.style.padding = "10px 20px"; // Ajusta el espaciado interno del header
  } else {
      header.style.backgroundColor = "transparent"; 
      logo.src = "src/LOGOWhiteLetters.png"; 
      logo.style.maxWidth = "100px"; 
      navLinks.forEach(function(link) {
          link.style.fontSize = "16px"; // Restaura el tamaño de fuente original de los enlaces
      });
      header.style.padding = "20px"; // Restaura el espaciado interno original del header
  }
});
// 

// Función para volver al inicio al hacer clic en el logo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// 



//ABOUT Funcion para animacion
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container-about");
  const windowHeight = window.innerHeight;

  function checkVisibility() {
      const containerTop = container.getBoundingClientRect().top;

      if (containerTop < windowHeight) {
          container.style.animation = "AnimRight 2s ease 0s 1 normal forwards";
      } else {
          container.style.animation = "none";
      }
  }

  // Llama a la función inicialmente para verificar si la sección es visible al cargar la página
  checkVisibility();

  // Llama a la función cuando el usuario hace scroll
  window.addEventListener("scroll", checkVisibility);
});



// Contact Us Pop Up animation
var modal = document.getElementById('myModal');
var btn = document.getElementById('btnShowPopup');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
// 



//SERVICES Funcion para animacion
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container-pm");
  const windowHeight = window.innerHeight;

  function checkVisibility() {
      const containerTop = container.getBoundingClientRect().top;

      if (containerTop < windowHeight) {
          container.style.animation = "AnimRight 2s ease 0s 1 normal forwards";
      } else {
          container.style.animation = "none";
      }
  }

  // Llama a la función inicialmente para verificar si la sección es visible al cargar la página
  checkVisibility();

  // Llama a la función cuando el usuario hace scroll
  window.addEventListener("scroll", checkVisibility);
});



// Contact Us Pop Up animation
var modal = document.getElementById('myModal');
var btn = document.getElementById('btnShowPopup');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
// 


//CONTACT Funcion para animacion
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container-contact");
  const windowHeight = window.innerHeight;

  function checkVisibility() {
      const containerTop = container.getBoundingClientRect().top;

      if (containerTop < windowHeight) {
          container.style.animation = "AnimRight 2s ease 0s 1 normal forwards";
      } else {
          container.style.animation = "none";
      }
  }

  // Llama a la función inicialmente para verificar si la sección es visible al cargar la página
  checkVisibility();

  // Llama a la función cuando el usuario hace scroll
  window.addEventListener("scroll", checkVisibility);
});



// Contact Us Pop Up animation
var modal = document.getElementById('myModal');
var btn = document.getElementById('btnShowPopup');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
// 



// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
//

