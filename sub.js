document.addEventListener("DOMContentLoaded", function () {
    openPopup();
});

function openPopup() {
    document.getElementById('pop-up-wrapper').style.display = 'flex';
}

function closePopup() {
    document.getElementById('pop-up-wrapper').style.display = 'none';
}
