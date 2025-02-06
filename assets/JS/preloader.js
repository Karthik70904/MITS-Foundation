fetch('assets/Components/pre_loader.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML = data + document.body.innerHTML;
            const preloader = document.querySelector('.load-row');
            if (preloader) {
                preloader.style.display = 'none';
            }
    })
    .catch(error => console.error('Error fetching preloader:', error));





