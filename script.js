function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Elrejti az összes tab tartalmat
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Eltávolítja az összes "active" osztályt
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Megjeleníti a kiválasztott tab tartalmát
  document.getElementById(tabName).style.display = "block";
  
  // Hozzáadja az "active" osztályt a kiválasztott gombhoz
  evt.currentTarget.className += " active";
}

// Alapértelmezett tab aktiválása
document.getElementsByClassName("tablinks")[0].click();
