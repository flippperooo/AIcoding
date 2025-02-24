// Add click event to project links
document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll(".project a");
    projectLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Optional: Uncomment to add a confirmation alert
            // event.preventDefault();
            // alert("Heading to " + this.getAttribute("href") + "!");
        });
    });
});