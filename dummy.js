// Data dummy untuk daftar komik
const comics = [
    { title: 'DENGAN SURAT AL IKHLAS',genre: ['Islamic'], img: 'img/sholat/1.jpg', link: 'komik1.html' },
    { title: 'CERAMAH', genre: ['Action','Islamic','Romance'], img: 'img/ceramah/1.jpg', link: 'komik2.html' },
    { title: 'Ujian Sekolah', genre: ['Fantasy','Romance','Horor','Comedy','School'], img: 'img/ujian/1.jpg', link: 'komik3.html' },
    { title: 'Cuci Piring', genre: ['Action','Horor'], img: 'img/piring/1.jpg', link: 'komik4.html' },
    { title: 'Puasa', genre: ['Islamic','Comedy'], img: 'img/puasa/1.jpg', link: 'komik5.html' },
    { title: 'WC SEKOLAH', genre: ['Horor','Comedy','School'], img: 'img/wc_sekolah/1.jpg', link: 'komik6.html' },
    { title: 'Duit Hilang', genre: ['Action','Comedy','School'], img: 'img/duit/1.jpg', link: 'komik7.html' },
    { title: 'Kena Tilang', genre: ['Romance','Horor','Action'], img: 'img/tilang/1.jpg', link: 'komik8.html' },
    { title: 'Demon Slayer', genre: ['Action'], img: 'https://via.placeholder.com/250x350?text=Demon+Slayer', link: 'https://example.com/demon-slayer' },
    { title: 'Blue Lock', genre: ['Action'], img: 'https://via.placeholder.com/250x350?text=Blue+Lock', link: 'https://example.com/blue-lock' },
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
        
        // Membungkus gambar dengan elemen <a> yang memiliki href
        const anchor = document.createElement('a');
        anchor.href = comic.link;  // Menetapkan link yang sesuai
        anchor.target = '_blank';   // Membuka link di tab baru

        anchor.innerHTML = `
            <img src="${comic.img}" alt="${comic.title}">
            <h3>${comic.title}</h3>
        `;
        
        // Menambahkan elemen anchor ke comic card
        comicCard.appendChild(anchor);
        container.appendChild(comicCard);
    });
}

// Memfilter komik berdasarkan genre
function filterComics(genre) {
    if (genre === 'All') {
        filteredComics = [...comics]; // Tampilkan semua genre
    } else {
        filteredComics = comics.filter(comic => comic.genre.includes(genre));
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
