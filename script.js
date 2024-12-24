 // Data dummy untuk daftar komik
 const comics = [
    { title: 'Naruto', genre: 'Action',  img: 'https://via.placeholder.com/250x350?text=Naruto' },
    { title: 'One Piece', genre: 'Action', img: 'https://via.placeholder.com/250x350?text=One+Piece' },
    { title: 'A Silent Voice', genre: 'Romance', img: 'https://via.placeholder.com/250x350?text=A+Silent+Voice' },
    { title: 'Your Name', genre: 'Romance', img: 'https://via.placeholder.com/250x350?text=Your+Name' },
    { title: 'One Punch Man', genre: 'Comedy', img: 'https://via.placeholder.com/250x350?text=One+Punch+Man' },
    { title: 'Attack on Titan', genre: 'Fantasy', img: 'https://via.placeholder.com/250x350?text=Attack+on+Titan' },
    { title: 'Dragon Ball', genre: 'Action', img: 'https://via.placeholder.com/250x350?text=Dragon+Ball' },
    { title: 'Fairy Tail', genre: 'Fantasy', img: 'https://via.placeholder.com/250x350?text=Fairy+Tail' },
    { title: 'Demon Slayer', genre: 'Action', img: 'https://via.placeholder.com/250x350?text=Demon+Slayer' },
    { title: 'Blue Lock', genre: 'Action', img: 'https://via.placeholder.com/250x350?text=Blue+Lock' },
];

// Variabel untuk menyimpan hasil filter
let filteredComics = [...comics];

// Menampilkan daftar komik ke dalam carousel
function displayComics(comicsToDisplay) {
    const container = document.getElementById('carousel-container');
    container.innerHTML = ''; // Menghapus konten sebelumnya

    if (comicsToDisplay.length === 0) {
        container.innerHTML = '<p>Tidak ada komik tersedia.</p>';
        return;
    }

    // Membuat elemen HTML untuk setiap komik
    comicsToDisplay.forEach(comic => {
        const comicCard = document.createElement('div');
        comicCard.className = 'comic-card';
        comicCard.innerHTML = `
            <img src="${comic.img}" alt="${comic.title}">
            <h3>${comic.title}</h3>
        `;
        container.appendChild(comicCard);
    });
}

// Memfilter komik berdasarkan genre
function filterComics(genre) {
    if (genre === 'All') {
        filteredComics = [...comics]; // Tampilkan semua genre
    } else {
        filteredComics = comics.filter(comic => comic.genre === genre);
    }
    displayComics(filteredComics);
}

// Mencari komik berdasarkan judul
function searchComics() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const searchResults = filteredComics.filter(comic =>
        comic.title.toLowerCase().includes(searchQuery)
    );
    displayComics(searchResults);
}

// Menggulir carousel ke kiri atau kanan
function scrollCarousel(amount) {
    const container = document.getElementById('carousel-container');
    container.scrollBy({ left: amount, behavior: 'smooth' });
}

// Tampilkan semua komik saat halaman dimuat
displayComics(comics);
