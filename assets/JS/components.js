document.addEventListener("DOMContentLoaded", function() {
    // Load navigation
    fetch("assets/Components/nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            // Add event listener for the hamburger button after the nav is loaded
            // document.querySelector('.hamburger').addEventListener('click', toggleMenu);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation for nav:', error);
        });

    // Load footer
    fetch("assets/Components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation for footer:', error);
        });
});

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    console.log('Menu toggled');
    document.querySelector('.hamburger i').classList.toggle('bi-x');
    console.log(navLinks.classList);
}