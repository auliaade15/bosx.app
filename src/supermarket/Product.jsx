export default function ProductSection() {
    return (
        <div>
            <div className="card2">
                <h1>Produk Buah-Buahan</h1>
            </div>
            <ProductItem 
                nama="Apel"
                harga="Rp 30.000 / kg"
                deskripsi="Renyah, manis, tinggi serat, baik untuk jantung."
                gambar="/img/apel.jpg"
            />
            <ProductItem 
                nama="Alpukat"
                harga="Rp 20.000 / kg"
                deskripsi="Lembut, kaya lemak sehat, baik untuk kulit."
                gambar="/img/alpukat.jpeg"
            />
            <ProductItem 
                nama="Mangga"
                harga="Rp 25.000 / ikat"
                deskripsi="Manis, juicy, kaya vitamin A & C."
                gambar="/img/Mangga.jpg"
            />
            <ProductItem 
                nama="Pepaya"
                harga="Rp 10.000 / kg"
                deskripsi="Lembut, bantu pencernaan, tinggi serat."
                gambar="/img/pepaya.jpg"
            />
             <ProductItem 
                nama="Semangka"
                harga="Rp 35.000 / ikat"
                deskripsi="Segar, berair, bantu hidrasi tubuh."
                gambar="/img/semangka.jpg"
            />
            <center><BestSeller /></center>
            <center>< HealthyTips /></center>
        </div>
    );
}

function ProductItem(props) {
    return (
        <div style={styles.card3}>
            <img src={props.gambar} alt={props.nama} style={styles.image} />
            <h3>{props.nama}</h3>
            <p>{props.deskripsi}</p>
            <strong>{props.harga}</strong>
        </div>
    );
}

function BestSeller() {
    return (
        <div>
            <h3>🔥 Best Seller</h3>
            <p>Buah yang paling banyak diminati pelanggan kami karena kualitas premium dan kesegarannya.</p>
            <strong>Promo: Diskon 10% untuk pembelian kedua!</strong>
        </div>
    );
}

function HealthyTips() {
    return (
        <div>
            <h3>🌱 Tips Sehat dengan Buah</h3>
            <p>Konsumsi berbagai jenis buah setiap hari untuk nutrisi seimbang dan kesehatan optimal.</p>
            <strong>Tips: Pilih buah dengan warna berbeda untuk mendapatkan manfaat vitamin yang beragam!</strong>
        </div>
    );
}

function SpecialOfferFruit() {
    return (
        <div>
            <h3>🎉 Penawaran Spesial</h3>
            <p>Diskon eksklusif untuk pelanggan setia! Dapatkan harga spesial untuk berbagai buah segar setiap akhir pekan.</p>
            <strong>Gunakan kode: BUAHSEHAT untuk potongan harga 15%.</strong>
        </div>
    );
}

const styles = {
    card3: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    },
    image: {
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px"
    },
}
