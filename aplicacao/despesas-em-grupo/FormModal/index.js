// Get the modal
var modal = document.getElementById('form-modal');

// Get the button that opens the modal
var btn = document.getElementById('open-modal-button');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
}
