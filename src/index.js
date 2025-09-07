const toggleBtns = document.querySelectorAll('.toggle-btns');
// const links = document.querySelector('a[href="/"]');

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});
