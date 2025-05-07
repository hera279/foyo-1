document.addEventListener("DOMContentLoaded", () => {
    const topicSections = document.querySelectorAll(".topic-section");
    const buttons = {
        topic1: document.getElementById("topic1-btn"),
        topic2: document.getElementById("topic2-btn"),
        topic3: document.getElementById("topic3-btn")
    };

    buttons.topic1.addEventListener("click", () => showSection("topic1"));
    buttons.topic2.addEventListener("click", () => showSection("topic2"));
    buttons.topic3.addEventListener("click", () => showSection("topic3"));

    function showSection(id) {
        topicSections.forEach(section => section.classList.remove("active"));
        document.getElementById(id).classList.add("active");
    }

    // Thumbnail click functionality for topic1
    const thumbnails = document.querySelectorAll("#topic1 .thumbnail");
    const thumbnailTitle = document.getElementById("thumbnail-title");
    const thumbnailDescription = document.getElementById("thumbnail-description");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            thumbnailTitle.textContent = thumbnail.dataset.title;
            thumbnailDescription.textContent = thumbnail.dataset.description;
        });
    });

    // Slider functionality for topic2
    const sliderImages = document.querySelector("#topic2 .slider-images");
    const leftBtn = document.querySelector("#topic2 .slider-btn.left");
    const rightBtn = document.querySelector("#topic2 .slider-btn.right");
    let currentIndex = 0;

    leftBtn.addEventListener("click", () => slide(-1));
    rightBtn.addEventListener("click", () => slide(1));

    function slide(direction) {
        const images = sliderImages.children;
        const totalImages = images.length;
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        sliderImages.style.transform = `translateX(-${currentIndex * 310}px)`;
    }
});
