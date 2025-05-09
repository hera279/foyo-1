document.addEventListener('DOMContentLoaded', () => {
    const defaultSlide = document.querySelector('.video-item[data-title="FOYOPETS"]');
    const videoItems = document.querySelectorAll('.video-item');
    const sliderTitle = document.getElementById('slider-title');
    const sliderDescription = document.getElementById('slider-description');
    const sliderLink = document.getElementById('slider-link');

    // Debounce function to limit event execution frequency
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    const setDefaultSlide = () => {
        if (defaultSlide) {
            // Reset all videos to their default state
            videoItems.forEach((el) => {
                el.style.transform = 'scale(1)';
                el.style.zIndex = '1';
            });

            // Set the default slide
            defaultSlide.style.transform = 'scale(1.2)';
            defaultSlide.style.zIndex = '10';

            sliderTitle.textContent = defaultSlide.getAttribute('data-title');
            sliderDescription.textContent = defaultSlide.getAttribute('data-description');
            sliderLink.href = defaultSlide.getAttribute('data-link');

            const video = defaultSlide.querySelector('video');
            video.play();
        }
    };

    // Set the default slide on page load
    setDefaultSlide();

    const activateSlide = (item) => {
        // Reset all videos to their default state
        videoItems.forEach((el) => {
            el.style.transform = 'scale(1)';
            el.style.zIndex = '1';
        });

        // Bring the selected video to the front
        item.style.transform = 'scale(1.2)';
        item.style.zIndex = '10';

        // Update the text content and link in the slider-text division
        sliderTitle.textContent = item.getAttribute('data-title');
        sliderDescription.textContent = item.getAttribute('data-description');
        sliderLink.href = item.getAttribute('data-link');

        // Play the video
        const video = item.querySelector('video');
        video.play();
    };

    const deactivateSlide = (item) => {
        // Pause the video when the interaction ends
        const video = item.querySelector('video');
        video.pause();
    };

    // Add hover and touch functionality for all slides
    videoItems.forEach((item) => {
        item.addEventListener('mouseover', debounce(() => activateSlide(item), 100));
        item.addEventListener('mouseout', debounce(() => deactivateSlide(item), 100));

        item.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            activateSlide(item);
        });
        item.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            deactivateSlide(item);
        });

        const video = item.querySelector('video');

        // Play the video when the item is clicked
        item.addEventListener('click', debounce(() => {
            // Pause all other videos
            videoItems.forEach((el) => {
                const otherVideo = el.querySelector('video');
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });

            // Play the clicked video
            video.play();
        }, 100));
    });

    // Reset to default slide when the user clicks or touches outside the slider
    document.addEventListener('click', debounce((e) => {
        if (!e.target.closest('.video-item')) {
            setDefaultSlide();
        }
    }, 100));
    document.addEventListener('touchstart', debounce((e) => {
        if (!e.target.closest('.video-item')) {
            setDefaultSlide();
        }
    }, 100));
});

document.addEventListener("DOMContentLoaded", () => {
    const activeVideo = document.querySelector(".video-item.active");
    if (activeVideo) {
        const title = activeVideo.getAttribute("data-title");
        const description = activeVideo.getAttribute("data-description");
        const link = activeVideo.getAttribute("data-link");

        document.getElementById("slider-title").textContent = title;
        document.getElementById("slider-description").textContent = description;
        document.getElementById("slider-link").setAttribute("href", link);
    }
});