document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.slider.thumbnails .thumbnail');
    const titleElement = document.getElementById('thumbnail-title');
    const descriptionElement = document.getElementById('thumbnail-description');

    if (thumbnails.length > 0) {
        // Set the first thumbnail as active by default
        const firstThumbnail = thumbnails[0];
        firstThumbnail.classList.add('active');
        titleElement.textContent = firstThumbnail.dataset.title;
        descriptionElement.textContent = firstThumbnail.dataset.description;

        // Add click event to update product info
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to the clicked thumbnail
                thumbnail.classList.add('active');
                // Update product info
                titleElement.textContent = thumbnail.dataset.title;
                descriptionElement.textContent = thumbnail.dataset.description;
            });
        });
    }
});
