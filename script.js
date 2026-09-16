// Ensure script runs after HTML loads completely
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script.js successfully connected!");

    // ==========================================
    // 1. Smooth Scroll & Mobile Menu Close
    // ==========================================
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Check if it's an internal link (e.g. #about, #services)
            if (targetId && targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

            // Mobile view mein link click hote hi menu band ho jaye
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // ==========================================
    // 2. Contact Form Submission Alert
    // ==========================================
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Page reload hone se rokta hai

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");

            if (nameInput && nameInput.value.trim() === "") {
                alert("Kripya apna naam bharein!");
                return;
            }

            alert("Dhanyawad! Aapka message successfully submit ho gaya hai.");
            contactForm.reset(); // Form clear kar dega
        });
    }

    // ==========================================
    // 3. Service Cards Button Click
    // ==========================================
    const cardButtons = document.querySelectorAll(".card .btn");

    cardButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            const cardTitle = this.closest(".card").querySelector(".card-title")?.innerText || "Service";
            alert("Aapne " + cardTitle + " ke baare mein enquiry ki hai!");
        });
    });
});