function openTab(tabName) {
    // Először elrejtjük az összes tab-t
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Majd megjelenítjük azt a tab-ot, amelyet a felhasználó választott
    var activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}
