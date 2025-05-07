document.addEventListener("DOMContentLoaded", () => {
    const galleryTitle = document.getElementById("gallery-title");
    const galleryDescription = document.getElementById("gallery-description");
    const gallerySlider = document.getElementById("gallery-slider");

    const galleries = {
        button1: {
            title: "Gallery 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"]
        },
        button2: {
            title: "Gallery 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            images: ["img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg"]
        },
        button3: {
            title: "Gallery 3",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            images: ["img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg", "img21.jpg", "img22.jpg", "img23.jpg", "img24.jpg"]
        }
    };

    document.getElementById("button1").addEventListener("click", () => updateGallery("button1"));
    document.getElementById("button2").addEventListener("click", () => updateGallery("button2"));
    document.getElementById("button3").addEventListener("click", () => updateGallery("button3"));

    function updateGallery(buttonId) {
        const gallery = galleries[buttonId];
        galleryTitle.textContent = gallery.title;
        galleryDescription.textContent = gallery.description;
        gallerySlider.innerHTML = gallery.images
            .map(image => `<img src="media/${image}" alt="${gallery.title} Image">`)
            .join("");
    }
});
