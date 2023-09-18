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
// First we get the button and div elements
var btnProjectManagement = document.getElementById('btnProjectManagement');
var btnGeneralContractor = document.getElementById('btnGeneralContractor');
var divAmparito = document.getElementById('amparito');
var divItolito = document.getElementById('itolito');

// When the page initially loads, the divs will be hidden
divAmparito.style.display = 'none';
divItolito.style.display = 'none';

// When the Project Management button is clicked, show AMPARITO and hide Itolito
btnProjectManagement.addEventListener('click', function(e){
    divAmparito.style.display = 'block';
    divItolito.style.display = 'none';
});

// When the General Contractor button is clicked, show Itolito and hide AMPARITO
btnGeneralContractor.addEventListener('click', function(e){
    divAmparito.style.display = 'none';
    divItolito.style.display = 'block';
});
//