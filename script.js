

document.addEventListener("DOMContentLoaded", function () {

    // 1. Dark and light mode
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (localStorage.getItem("portfolio-theme") === "light") {
        document.body.classList.add("light-theme");
    }

    updateThemeIcon();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const currentTheme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";

        localStorage.setItem("portfolio-theme", currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (document.body.classList.contains("light-theme")) {
            themeIcon.className = "bi bi-sun-fill";
        } else {
            themeIcon.className = "bi bi-moon-stars";
        }
    }


    // 2. Project filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-filter");

            projectItems.forEach(function (project) {
                const projectCategory = project.getAttribute("data-category");

                if (selectedCategory === "all" || selectedCategory === projectCategory) {
                    project.classList.remove("hide");
                } else {
                    project.classList.add("hide");
                }
            });
        });
    });


    // 3. Current year
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();


    // 4. Contact form
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:ajitha.carmel@gmail.com?subject=" +
            mailSubject + "&body=" + mailBody;
    });


    // 5. Back to top button
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // 6. Close mobile navbar after clicking a link
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarMenu = document.getElementById("navbarMenu");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarMenu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
            }
        });
    });

});
