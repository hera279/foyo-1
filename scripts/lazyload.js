document.addEventListener("DOMContentLoaded", () => {
    const lazyElements = document.querySelectorAll("img[loading='lazy'], video[loading='lazy']");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.tagName === "VIDEO") {
                    element.load();
                }
                observer.unobserve(element);
            }
        });
    });

    lazyElements.forEach(element => observer.observe(element));
});
