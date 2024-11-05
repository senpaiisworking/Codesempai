// redirect.js
// Load the local HTML file
window.location.href = 'file:///C:/Codes_Files/Website/Codesempai/sempai_dashbord/home_sempai.html';

// Remove the URL after loading
setTimeout(() => {
    window.history.replaceState(null, '', 'about:blank');
}, 1000); // Adjust the timeout as needed
