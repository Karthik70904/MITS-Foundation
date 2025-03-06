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
            // Event listener for the hamburger button after the nav is loaded
            document.querySelector('.hamburger').addEventListener('click', toggleMenu);
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
            // Event listener for the reach-us div after the footer is loaded
            document.querySelector('.reach-us').addEventListener('click', () => {
                // console.log('Reach us clicked!');
                window.open("https://www.google.com/maps/search/?api=1&query=Madanapalle+Institute+of+Technology+and+Science", "_blank");
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation for footer:', error);
        });
});

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
        // console.log('Menu toggled');
        var hamburgerIcon = document.querySelector('.hamburger i');
        if (hamburgerIcon) {
            hamburgerIcon.classList.toggle('bi-x');
        }
        // console.log(navLinks.classList);
    }
}

// for logo click
function handleLogoClick(url) {
    if (url === 'index.html')
        window.location.href = url;
    else
        window.open(url, '_blank');
}

// Transparent nav while scrolling
document.addEventListener('scroll', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        if (window.scrollY > 50) { // Adjust the scroll value as needed
            hamburger.classList.add('transparent');
            navLinks.classList.add('transparent');
        } else {
            hamburger.classList.remove('transparent');
            navLinks.classList.remove('transparent');
        }
    }
});