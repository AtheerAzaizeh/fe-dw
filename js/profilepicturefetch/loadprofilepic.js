document.addEventListener('DOMContentLoaded', () => {
    const profilePictureUrl = sessionStorage.getItem('profilePicture');
    if (profilePictureUrl) {
        const profileImg = document.getElementById('profile-picture');
        if (profileImg) {
            profileImg.src = profilePictureUrl;
        }
    }
});
