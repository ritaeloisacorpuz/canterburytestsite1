document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("header.html")
      .then((response) => {
        if (!response.ok) throw new Error("Header file not found.");
        return response.text();
      })
      .then((data) => {
        headerPlaceholder.innerHTML = data;
      })
      .catch((err) => console.error("Error loading header:", err));
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then((response) => {
        if (!response.ok) throw new Error("Footer file not found.");
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((err) => console.error("Error loading footer:", err));
  }
});