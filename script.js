document.addEventListener("DOMContentLoaded", function () {
    // Show home section lang pag-load ng page
    document.querySelector("#home").classList.add("active");

    // Handle navigation clicks
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetSection = this.getAttribute("data-target");

            // Hide all sections muna smoothly
            document.querySelectorAll("section").forEach(sec => {
                sec.classList.remove("active");
            });

            // Then, show the selected section with delay for that smooth effect
            setTimeout(() => {
                document.getElementById(targetSection).classList.add("active");
            }, 150);

            // Smooth scroll papunta sa section
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

    // Dynamically add credentials with images
    const credentials = [
        {
            name: "Microsoft Excel Office Specialist",
            img: "image.png"
        },
        {
            name: "Completed Data science workshop",
            img: "image (2).png"
        },
        {
            name: "Foundations of User Experience (UX) Design",
            img: "Coursera (HCI) 1.jpg"
        },
        {
            name: "Start the UX Design Process: Empathize, Define, and Ideate",
            img: "Coursera (HCI) 2.jpg"
        },
        {
            name: "Build Wireframes and Low-Fidelity Prototypes",
            img: "Coursera (HCI) 3_page-0001.jpg"
        },
        {
            name: "Conduct UX Research and Test Early Concepts",
            img: "Coursera (HCI) 4_page-0001.jpg"
        },
        {
            name: "Create High-Fidelity Designs and Prototypes in Figma",
            img: "Coursera (HCI) 5_page-0001.jpg"
        }
    ];

    const credentialsList = document.getElementById("credentials-list");
    if (credentialsList) {
        credentialsList.innerHTML = "";
        credentials.forEach(cert => {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${cert.img}" alt="${cert.name}"><span>${cert.name}</span>`;
            credentialsList.appendChild(li);
        });
    }
});