document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-button').addEventListener('click', () => {
        document.getElementById('signup-dialog').classList.remove('hidden');
    });

    document.getElementById('close-form').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior
        document.getElementById('signup-dialog').classList.add('hidden');
    });

    document.getElementById('close-dialog').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior
        document.getElementById('signup-dialog').classList.add('hidden');
        document.getElementById('signup-form').reset();
    });
});
