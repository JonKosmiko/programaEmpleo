document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home-page');
    const detailPage = document.getElementById('detail-page');
    const searchButton = document.getElementById('search-button');
    const backButton = document.getElementById('back-button');
    const searchInput = document.getElementById('search-input');

    function showDetailPage() {
        homePage.classList.add('hidden');
        detailPage.classList.remove('hidden');
    }

    function showHomePage() {
        detailPage.classList.add('hidden');
        homePage.classList.remove('hidden');
        searchInput.value = '';
    }

    searchButton.addEventListener('click', () => {
        showDetailPage();
    });

    backButton.addEventListener('click', () => {
        showHomePage();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click(); 
        }
    });
});