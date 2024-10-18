function playVideo(video) {
    // Pause all videos first
    var allVideos = document.querySelectorAll('video');
    allVideos.forEach(function(v) {
        if (v !== video) {
            v.pause();
        }
    });

    // Play the clicked video and go fullscreen
    if (video.paused) {
        video.play();
        if (video.requestFullscreen) {
            video.requestFullscreen(); // Standard
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Safari
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); // IE/Edge
        }
    } else {
        video.pause();
    }
}

// Pause videos that are out of view (e.g., when swiping or scrolling)
window.addEventListener('scroll', function() {
    var allVideos = document.querySelectorAll('video');
    allVideos.forEach(function(video) {
        if (!isElementInViewport(video)) {
            video.pause();
        }
    });
});

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function filterVideos() {
    const dropdown = document.querySelector('.filter-dropdown');
    const filterValue = dropdown.value;
    const sections = document.querySelectorAll('.video-section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (filterValue === 'all') {
        sections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        document.querySelector('.' + filterValue + '-section').style.display = 'block';
    }
}
