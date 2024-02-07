document.addEventListener('DOMContentLoaded', function () {
    // Simulated user data
    const user = {
        name: 'John Doe',
        playlists: [
            {
                name: "Today's Top Hits",
                image: 'Today\'s Top Hits.jpg',
                description: 'Olivia Rodrigo is on top of the Hottest 50!',
            },
            // Add more playlist objects as needed
        ],
    };

    // Function to display user information
    function displayUserInfo() {
        const userNameElement = document.querySelector('.navbar ul li a');
        userNameElement.textContent = user.name;
    }

    // Function to display playlists
    function displayPlaylists() {
        const playlistsContainer = document.querySelector('.spotify-playlists .list');

        user.playlists.forEach(playlist => {
            const playlistItem = document.createElement('div');
            playlistItem.classList.add('item');

            playlistItem.innerHTML = `
                <img src="${playlist.image}" />
                <div class="play">
                    <span class="fa fa-play"></span>
                </div>
                <h4>${playlist.name}</h4>
                <p>${playlist.description}</p>
            `;

            playlistsContainer.appendChild(playlistItem);
        });
    }

    // Simulated login functionality
    function loginUser() {
        alert('Simulated login. You can add your authentication logic here.');
    }

    // Event listeners
    const loginButton = document.querySelector('.navbar button');
    loginButton.addEventListener('click', loginUser);

    // Initial setup
    displayUserInfo();
    displayPlaylists();
});
