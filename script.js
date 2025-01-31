document.addEventListener("DOMContentLoaded", function () {
    // so, we'll show the home section lang pag-load ng page
    document.querySelector("#home").classList.add("active");

    // handle na navigation clicks
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetSection = this.getAttribute("data-target");

            // hide all sections muna smoothly
            document.querySelectorAll("section").forEach(sec => {
                sec.classList.remove("active");
            });

            // then, show the selected section with delay for that smooth effect
            setTimeout(() => {
                document.getElementById(targetSection).classList.add("active");
            }, 150);

            // tapos, smooth scroll na papunta sa section
            document.getElementById(targetSection).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    document.querySelectorAll('.project-preview').forEach((preview, i) => {
        preview.addEventListener('mouseover', function() {
            const details = preview.querySelector('.project-details');
            if (details) {
                details.classList.add('show');
            }
        });

        preview.addEventListener('mouseout', function() {
            const details = preview.querySelector('.project-details');
            if (details) {
                details.classList.remove('show');
            }
        });
    });

});
