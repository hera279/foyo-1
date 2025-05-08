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

    if (thumbnails.length > 0) {
        // Set the first thumbnail as active by default
        const firstThumbnail = thumbnails[0];
        firstThumbnail.classList.add("active");
        titleElement.textContent = firstThumbnail.dataset.title;
        descriptionElement.textContent = firstThumbnail.dataset.description;

        // Add click event to update product info
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener("click", () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove("active"));
                // Add active class to the clicked thumbnail
                thumbnail.classList.add("active");
                // Update product info
                titleElement.textContent = thumbnail.dataset.title;
                descriptionElement.textContent = thumbnail.dataset.description;
            });
        });
    }

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

    const topicButtons = document.querySelectorAll(".topics button");

    topicButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove the active class from all buttons
            topicButtons.forEach(btn => btn.classList.remove("active"));

            // Add the active class to the clicked button
            button.classList.add("active");
        });
    });
});
