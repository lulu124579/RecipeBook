function performSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector(".input");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".links");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

