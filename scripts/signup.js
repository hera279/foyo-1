document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const signupDialog = document.getElementById('signup-dialog');
    const signupButton = document.getElementById('signup-button');
    const closeDialogButton = document.getElementById('close-dialog');

    signupButton.addEventListener('click', () => {
        overlay.classList.add('active');
        signupDialog.classList.remove('hidden');
    });

    closeDialogButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior
        overlay.classList.remove('active');
        signupDialog.classList.add('hidden');
        document.getElementById('signup-form').reset();
    });
});
