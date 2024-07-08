function toggleItems(category) {
    var items = document.getElementById(category + "Items");
    if (items.style.display === "none") {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  }
  