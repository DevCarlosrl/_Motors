document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    
    // Abre a barra de pesquisa
    searchIcon.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impede scroll da página
    });
    
    // Fecha a barra de pesquisa
    closeSearch.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll
    });
    
    // Fecha ao clicar fora
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

