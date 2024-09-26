onload = () =>{
        document.body.classList.remove("container");
};

// Fungsi untuk menampilkan bunga dan tombol Spotify
function showFlowerAndButton() {
    document.getElementById('flowerImage').style.display = 'block'; // Menampilkan bunga
    document.getElementById('spotifyButton').style.display = 'block'; // Menampilkan tombol Spotify
}

// Panggil fungsi ini saat bunga muncul (misalnya setelah 3 detik)
setTimeout(showFlowerAndButton, 3000);
