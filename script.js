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

// Services
// select all button
const buttons = document.querySelectorAll(".centered-btn");

// attach click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // get parent container
    let parentContainer = event.target.parentElement;

    // check if container is 'left' or 'right' then change color
    if (parentContainer.classList.contains('left')) {
      parentContainer.style.background = 'black';
    }

    if (parentContainer.classList.contains('right')) {
      parentContainer.style.background = 'black';
    }
  });
});
//