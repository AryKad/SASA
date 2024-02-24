// Teacher announcement functionality
document.getElementById('announcement-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const announcement = document.getElementById('announcement').value;
    saveAnnouncement(announcement);
});

// Function to save announcement to local storage
function saveAnnouncement(announcement) {
    let announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    announcements.push(announcement);
    localStorage.setItem('announcements', JSON.stringify(announcements));
    displayAnnouncements();
}

// Function to display announcements on the homepage
function displayAnnouncements() {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    const announcementList = document.getElementById('announcement-list');
    announcementList.innerHTML = '';
    announcements.forEach(announcement => {
        const li = document.createElement('li');
        li.textContent = announcement;
        announcementList.appendChild(li);
    });
}

// Initial display of announcements
displayAnnouncements();