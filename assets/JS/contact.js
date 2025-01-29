function handleSubmit(event) {
	event.preventDefault();

	const formData = {
		fullName: document.getElementById("fullName").value,
		mobile: document.getElementById("mobile").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

	// Here you would typically send the form data to a server
	console.log("Form submitted:", formData);

	// Clear the form
	event.target.reset();

	// Show success message
	alert("Thank you for your message. We will get back to you soon!");

	return false;
}

// Add active class to current nav item
document.addEventListener("DOMContentLoaded", () => {
	const currentPath = window.location.pathname;
	const navLinks = document.querySelectorAll(".nav-item");

	navLinks.forEach((link) => {
		if (link.getAttribute("href") === currentPath) {
			link.classList.add("active");
		}
	});
});

document.querySelectorAll(".faq").forEach((faq) => {
	faq.addEventListener("click", (e) => {
		var faq = e.target;
		while (faq.tagName !== "DIV") {
			faq = faq.parentElement;
		}
		faq.classList.toggle("active");
	});
});
