function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

function toggleMobileSearch() {
  const mobileSearch = document.getElementById('mobileSearch');
  mobileSearch.style.display =
    mobileSearch.style.display === 'block' ? 'none' : 'block';
}

function toggleFilters() {
  document.getElementById('filtersModal').classList.add('active');
}

function closeFiltersModal() {
  document.getElementById('filtersModal').classList.remove('active');
}

function applyFilters() {
  closeFiltersModal();
}

document.addEventListener('DOMContentLoaded', function () {
  const allSelects = [
    ...document.querySelectorAll('.custom-select'),
    ...document.querySelectorAll('.modal-select'),
  ];

  allSelects.forEach((select, index) => {
    const isModal = select.classList.contains('modal-select');
    const button = select.querySelector(
      isModal ? '.modal-select-button' : '.select-button'
    );
    const dropdown = select.querySelector(
      isModal ? '.modal-select-dropdown' : '.select-dropdown'
    );
    const options = dropdown.querySelectorAll(
      isModal ? '.modal-select-option' : '.select-option'
    );

    button.addEventListener('click', function (e) {
      e.stopPropagation();

      allSelects.forEach((otherSelect, otherIndex) => {
        if (otherIndex !== index) {
          const otherIsModal = otherSelect.classList.contains('modal-select');
          const otherDropdown = otherSelect.querySelector(
            otherIsModal ? '.modal-select-dropdown' : '.select-dropdown'
          );
          const otherButton = otherSelect.querySelector(
            otherIsModal ? '.modal-select-button' : '.select-button'
          );
          otherDropdown.classList.remove('active');
          otherButton.classList.remove('active');
        }
      });

      dropdown.classList.toggle('active');
      button.classList.toggle('active');
    });

    options.forEach((option) => {
      option.addEventListener('click', function () {
        button.querySelector('span').textContent = this.textContent;
        options.forEach((opt) => opt.classList.remove('selected'));
        this.classList.add('selected');
        dropdown.classList.remove('active');
        button.classList.remove('active');
      });
    });
  });

  document.addEventListener('click', function (event) {
    if (
      !event.target.closest('.custom-select') &&
      !event.target.closest('.modal-select')
    ) {
      allSelects.forEach((select) => {
        const isModal = select.classList.contains('modal-select');
        const dropdown = select.querySelector(
          isModal ? '.modal-select-dropdown' : '.select-dropdown'
        );
        const button = select.querySelector(
          isModal ? '.modal-select-button' : '.select-button'
        );
        dropdown.classList.remove('active');
        button.classList.remove('active');
      });
    }
  });
});
