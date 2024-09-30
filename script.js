document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens4.jpeg",
        "02-10-rotativo2.jpeg",
        "02-10.jpeg",
        "04-10.jpeg",
        "05-10.jpeg",
        "09-10.jpeg",
        "09-10-rotativo.jpeg",
        "13-10.jpeg",
        "16-10.jpeg",
        "21-10.jpeg",
        "22-10.jpeg",
        "23-10.jpeg",
        "23-10-vlm.jpeg",
        "24-10.jpeg",
        "26-10.jpeg",
        "29-10.jpeg",
        "29-10-Rotativo.jpeg",
        "30-10.jpeg",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
