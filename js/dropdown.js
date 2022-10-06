   function Drop1() {
    document.getElementById("Drop1").classList.toggle("show");
  }

  function Drop2() {
    document.getElementById("Drop2").classList.toggle("show");
  }

  function Drop3() {
    document.getElementById("Drop3").classList.toggle("show");
  }

  function Drop4() {
    document.getElementById("Drop4").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }