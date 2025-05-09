document.addEventListener("DOMContentLoaded", () => {
    const topicSections = document.querySelectorAll(".topic-section");
    const buttons = {
        topic1: document.getElementById("topic1-btn"),
        topic2: document.getElementById("topic2-btn"),
        topic3: document.getElementById("topic3-btn")
    };

    // Debounce function to limit event execution frequency
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    // Show the selected section
    const showSection = (id) => {
        topicSections.forEach(section => section.classList.remove("active"));
        document.getElementById(id).classList.add("active");
    };

    // Attach click event listeners to buttons
    buttons.topic1.addEventListener("click", () => showSection("topic1"));
    buttons.topic2.addEventListener("click", () => showSection("topic2"));
    buttons.topic3.addEventListener("click", () => showSection("topic3"));

    // Thumbnail click functionality for topic1
    const thumbnails = document.querySelectorAll("#topic1 .thumbnail");
    const thumbnailTitle = document.getElementById("thumbnail-title");
    const thumbnailDescription = document.getElementById("thumbnail-description");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", debounce(() => {
            thumbnailTitle.textContent = thumbnail.dataset.title;
            thumbnailDescription.textContent = thumbnail.dataset.description;
        }, 100));
    });

    // Slider functionality for topic2
    const sliderImages = document.querySelector("#topic2 .slider-images");
    const leftBtn = document.querySelector("#topic2 .slider-btn.left");
    const rightBtn = document.querySelector("#topic2 .slider-btn.right");
    let currentIndex = 0;

    const slide = (direction) => {
        const images = sliderImages.children;
        const totalImages = images.length;
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        sliderImages.style.transform = `translateX(-${currentIndex * 310}px)`;
    };

    // Attach debounced click event listeners to slider buttons
    leftBtn.addEventListener("click", debounce(() => slide(-1), 100));
    rightBtn.addEventListener("click", debounce(() => slide(1), 100));
});
