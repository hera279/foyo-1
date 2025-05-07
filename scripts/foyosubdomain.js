document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".topic");
    const sections = document.querySelectorAll(".topic-section");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            sections.forEach(section => section.classList.remove("active"));
            document.getElementById(`section-topic${index + 1}`).classList.add("active");
        });
    });

    // Set topic1 as active by default
    document.getElementById("section-topic1").classList.add("active");

    // Topic 1: Thumbnail interaction
    const thumbnails = document.querySelectorAll(".slider.thumbnails .thumbnail");
    const titleElement = document.getElementById("thumbnail-title");
    const descriptionElement = document.getElementById("thumbnail-description");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            titleElement.textContent = thumbnail.dataset.title;
            descriptionElement.textContent = thumbnail.dataset.description;
        });
    });

    // Topic 2: Hover slider
    const sliderImages = document.querySelector(".slider-images");
    const leftButton = document.querySelector(".slider-btn.left");
    const rightButton = document.querySelector(".slider-btn.right");
    const totalImages = sliderImages.children.length;
    let currentIndex = 0;

    function updateSliderPosition() {
        sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    leftButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    rightButton.addEventListener("click", () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });
});
