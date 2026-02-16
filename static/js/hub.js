const portfolioBtn = document.getElementById('app-tile-1');

portfolioBtn.addEventListener('click', () => {
    window.location.href = "app/portfolio/index.html";
})
const repoBtn = document.getElementById('app-tile-2');

repoBtn.addEventListener('click', () => {
    window.open("https://github.com/TC-Brown");
});
