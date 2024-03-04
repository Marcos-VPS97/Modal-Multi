document.addEventListener('DOMContentLoaded', function () {
  var openModalBtns = document.querySelectorAll('.openModalBtn');
  var closeBtns = document.querySelectorAll('.close');
  var modals = document.querySelectorAll('.modal');

  //funcoo universal que abre os modal
  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modalId = btn.getAttribute('data-modal-id');
      var modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });

  closeBtns.forEach(function (closeBtn) {

    closeBtn.addEventListener('click', function () {
      var modalId = closeBtn.getAttribute('data-modal-id');
      var modal = document.getElementById(modalId);
      modal.style.display = 'none';

    });
  });


  window.addEventListener('click', function (event) {
    modals.forEach(function (modal) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
