export default function ArtikelBuah(){
    return (
        <div>
            <h1>Supermarket: Tempat Terbaik untuk Membeli Kebutuhan Anda</h1>
            <GreetingBinjai/>
            <FreshFruits/>
            <HealthyFruits/>
            <FruitSelectionTips/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>
            <img src="./img/foto.jpg" className="small" alt="logo"/>

            <p>Buah adalah salah satu makanan alami yang kaya akan nutrisi dan memberikan banyak manfaat bagi kesehatan tubuh. Dengan beragam rasa, warna, dan tekstur, 
               buah tidak hanya lezat tetapi juga mengandung berbagai vitamin, mineral, serat, dan antioksidan yang sangat dibutuhkan oleh tubuh</p>
            
            <p>Secara umum, buah bermanfaat untuk menjaga kesehatan tubuh. Kandungan serat dalam buah membantu melancarkan sistem pencernaan, sementara vitamin dan
               mineralnya mendukung fungsi organ tubuh. Selain itu, buah juga dapat meningkatkan daya tahan tubuh, menjaga kesehatan kulit, serta mengurangi risiko
               berbagai penyakit kronis seperti diabetes dan penyakit jantung.</p>
            
            <p>Agar mendapatkan manfaat maksimal, penting untuk memilih buah yang segar dan mencucinya sebelum dikonsumsi. Buah bisa dimakan langsung atau diolah 
               menjadi jus, salad, dan berbagai hidangan lainnya. Mengonsumsi buah secara rutin merupakan bagian dari pola hidup sehat yang dapat memberikan
               energi dan mendukung kesehatan tubuh secara keseluruhan.</p></small>
    )
}

function FreshFruits() {
    return (
        <div className="card3">
        <small>
        <p style={{ fontSize: '15px', fontWeight: 'bold'}}>🌱 Mulailah Hidup Sehat Dengan Mengkonsumsi Buah-buahan </p>
        </small>
        </div>
    );
}

function HealthyFruits() {
    return (
        <div>
            <p>Selain memiliki rasa yang lezat dan menyegarkan, buah juga memiliki beragam manfaat kesehatan yang tidak dapat diabaikan, yaitu:</p>
            <ul>
                <li>Apel - Kaya akan serat dan antioksidan yang membantu menurunkan kadar kolesterol.</li>
                <li>Alpukat - Mengandung lemak tak jenuh tunggal yang baik untuk jantung.</li>
                <li>Mangga - Kaya akan vitamin A yang baik untuk penglihatan.</li>
                <li>Pepaya - Kaya akan vitamin C dan A.</li>
                <li>Semangka - Kandungan kalium dan magnesium membantu mengontrol tekanan darah.</li>
            </ul>
        </div>
    );
}


function FruitSelectionTips() {
    return (
        <div>
            <p>🌼 Beberapa tips memilih buah segar agar mendapatkan kualitas terbaik:</p>
            <ul>
                <li>✅ Warna buah harus cerah dan merata, tanpa bercak kehitaman atau kusam.</li>
                <li>✅ Tekan perlahan buah dengan tangan, pastikan tidak terlalu keras atau terlalu lembek.</li>
                <li>✅ Buah segar biasanya memiliki aroma yang khas dan harum.</li>
                <li>✅ Pilih buah yang kulitnya mulus, tanpa memar, retak, atau lubang.</li>
                <li>✅ Hindari Buah yang Terlalu Matang atau Belum Matang.</li>
            </ul>
        </div>
    );
}





