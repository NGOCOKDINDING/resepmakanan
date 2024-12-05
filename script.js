function showRecipe(recipe) {
    const recipeDetail = document.getElementById('recipe-detail');
    
    let recipeContent = '';

    if (recipe === 'nasi-goreng') {
        recipeContent = `
            <h2>Resep Nasi Goreng</h2>
            <p><strong>Bahan-bahan:</strong></p>
            <ul>
                <li>2 piring nasi putih</li>
                <li>2 siung bawang putih, cincang</li>
                <li>1 butir telur</li>
                <li>2 sdm kecap manis</li>
                <li>Minyak goreng</li>
                <li>Garam dan merica secukupnya</li>
            </ul>
            <p><strong>Cara Memasak:</strong></p>
            <ol>
                <li>Tumis bawang putih hingga harum.</li>
                <li>Masukkan telur dan aduk hingga setengah matang.</li>
                <li>Tambahkan nasi putih dan kecap manis, aduk rata.</li>
                <li>Beri garam dan merica sesuai selera.</li>
                <li>Sajikan nasi goreng dengan lauk tambahan sesuai selera.</li>
            </ol>
        `;
    } else if (recipe === 'capcay') {
        recipeContent = `
            <h2>Capcay</h2>
            <p><strong>Bahan-bahan:</strong></p>
            <ul>
                <li>50 gram daging ayam yang sudah dipotong kecil-kecil</li>
                <li>200 gram sawi putih yang sudah dipotong</li>
                <li>5 buah bakso, diiris sesuai selera</li>
                <li1 ikat sawi hijau yang sudah dipotong</li>
                <li>150 gram kembang kol yang dsudah dipotong</li>
                <li>1 buah wortel, dipotong memanjang</li>
                <li>1 sendok teh kecap ikan</li>
                <li>2 siung bawang putih yang dicincang kasar</li>
                <li>1 sendok makan saus tiram</li>
            </ul>
            <p><strong>Cara Memasak:</strong></p>
            <ol>
                <li>Bawang putih ditumis hingga harum lalu tambahkan ayam dan daging bakso. Aduk hingga berubah warna</li>
                <li>Tambahkan kecap ikan, saus tiram, garam dan merica, aduk rata sebentar lalu tambahkan sedikit air</li>
                <li>Tambahkan wortel, sawi hijau, sawi putih dan kembang kol yang sudah dipotong-potong, aduk sampai rata</li>
                <li>Tambahkan larutan maizena dan aduk kembali hingga masakan mengental.</li>
                <li>Angkat dan cap cay goreng siap disajikan.</li>
            </ol>
        `;
    } else if (recipe === 'sate-ayam') {
        recipeContent = `
            <h2>Resep Sate Ayam</h2>
            <p><strong>Bahan-bahan:</strong></p>
            <ul>
                <li>500g daging ayam, potong dadu</li>
                <li>3 siung bawang putih, cincang</li>
                <li>2 sdm kecap manis</li>
                <li>1 sdm minyak wijen</li>
                <li>Garam dan merica secukupnya</li>
                <li>Tusuk sate</li>
            </ul>
            <p><strong>Cara Memasak:</strong></p>
            <ol>
                <li>Campurkan ayam dengan bawang putih, kecap manis, minyak wijen, garam, dan merica. Diamkan selama 30 menit.</li>
                <li>Tusukkan ayam ke tusuk sate dan panggang di atas bara api hingga matang.</li>
                <li>Sajikan sate ayam dengan bumbu kacang dan nasi.</li>
            </ol>
        `;
    }

    recipeDetail.innerHTML = recipeContent;
    recipeDetail.style.display = 'block';
}
