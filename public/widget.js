window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".booksync-button");

  buttons.forEach((btn) => {
    const business = btn.getAttribute("data-business");
    const apiKey = btn.getAttribute("data-apikey");

    if (!business) {
      console.error("Missing data-business attribute on booksync-button.");
      btn.innerText = "Invalid Button";
      return;
    }

    const bookingUrl = `https://bookme4now.com/${business}/booking${apiKey ? `?apiKey=${apiKey}` : ""}`;

    const link = document.createElement("a");
    link.href = bookingUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "bookme4now-button";
    link.innerText = btn.innerText || "Book Now";

    // Optional: Basic styles
    link.style.display = "inline-block";
    link.style.padding = "12px 24px";
    link.style.backgroundColor = "#6366F1";
    link.style.color = "#ffffff";
    link.style.borderRadius = "8px";
    link.style.textDecoration = "none";
    link.style.fontWeight = "500";
    link.style.transition = "background-color 0.3s ease";

    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "#4F46E5";
    });

    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "#6366F1";
    });

    btn.replaceWith(link);
  });
});
