function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.classList.toggle("hidden");
    button.textContent = details.classList.contains("hidden") ? "Check Details" : "Hide Details";
}