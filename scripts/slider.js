document.addEventListener('DOMContentLoaded', () => {
    const defaultSlide = document.querySelector('.video-item[data-title="FOYOPETS"]');
    const videoItems = document.querySelectorAll('.video-item');

    const setDefaultSlide = () => {
        if (defaultSlide) {
            // Reset all videos to their default state
            document.querySelectorAll('.video-item').forEach((el) => {
                el.style.transform = 'scale(1)';
                el.style.zIndex = '1';
            });

            // Set the default slide
            defaultSlide.style.transform = 'scale(1.2)';
            defaultSlide.style.zIndex = '10';

            const title = defaultSlide.getAttribute('data-title');
            const description = defaultSlide.getAttribute('data-description');
            const link = defaultSlide.getAttribute('data-link');
            document.getElementById('slider-title').textContent = title;
            document.getElementById('slider-description').textContent = description;
            document.getElementById('slider-link').href = link;

            const video = defaultSlide.querySelector('video');
            video.play();
        }
    };

    // Set the default slide on page load
    setDefaultSlide();

    // Add hover and touch functionality for all slides
    document.querySelectorAll('.video-item').forEach((item) => {
        const activateSlide = () => {
            // Reset all videos to their default state
            document.querySelectorAll('.video-item').forEach((el) => {
                el.style.transform = 'scale(1)';
                el.style.zIndex = '1';
            });

            // Bring the selected video to the front
            item.style.transform = 'scale(1.2)';
            item.style.zIndex = '10';

            // Update the text content and link in the slider-text division
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            const link = item.getAttribute('data-link');
            document.getElementById('slider-title').textContent = title;
            document.getElementById('slider-description').textContent = description;
            document.getElementById('slider-link').href = link;

            // Play the video
            const video = item.querySelector('video');
            video.play();
        };

        const deactivateSlide = () => {
            // Pause the video when the interaction ends
            const video = item.querySelector('video');
            video.pause();
        };

        // Add hover functionality for desktop
        item.addEventListener('mouseover', activateSlide);
        item.addEventListener('mouseout', deactivateSlide);

        // Add touch functionality for mobile
        item.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            activateSlide();
        });
        item.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            deactivateSlide();
        });
    });

    // Reset to default slide when the user clicks or touches outside the slider
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.video-item')) {
            setDefaultSlide();
        }
    });
    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.video-item')) {
            setDefaultSlide();
        }
    });

    videoItems.forEach((item) => {
        const video = item.querySelector('video');

        // Play the video when the item is clicked
        item.addEventListener('click', () => {
            // Pause all other videos
            videoItems.forEach((el) => {
                const otherVideo = el.querySelector('video');
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });

            // Play the clicked video
            video.play();
        });

        // Ensure the video continues playing after touch ends
        item.addEventListener('touchend', () => {
            video.play();
        });
    });
});