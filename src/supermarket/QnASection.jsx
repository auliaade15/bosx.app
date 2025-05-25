export default function QnASection() {
    return (
        <div>
            <hr />
            <div className="card3">
                <h1>QnA Buah</h1>
            </div>
            <UserCard 
                Q="Mengapa penting mengonsumsi buah setiap hari?" 
                A="Buah kaya akan vitamin, mineral, dan serat yang membantu menjaga kesehatan tubuh dan sistem pencernaan." 
            />
            <UserCard 
                Q="Bagaimana cara memilih buah yang segar?" 
                A="Pilih buah dengan warna cerah, tekstur tidak lembek, dan tanpa bercak atau tanda busuk." 
            />
            <UserCard 
                Q="Apa keuntungan membeli buah di supermarket?" 
                A="Supermarket menyediakan buah dengan sistem penyimpanan modern untuk menjaga kesegaran dan kualitasnya." 
            />
            <UserCard 
                Q="Apa perbedaan buah organik dan non-organik?" 
                A="Buah organik bebas dari pestisida dan bahan kimia, sementara non-organik mungkin menggunakan pestisida dalam proses pertumbuhan." 
            />
            <UserCard 
                Q="Buah apa saja yang baik untuk dikonsumsi setiap hari?" 
                A="Apel, pisang, alpukat, jeruk, dan semangka adalah beberapa buah yang baik dikonsumsi setiap hari karena kaya nutrisi." 
            />
            <FeedbackForm/>

            <div className="review-section">
                <h4>Ulasan Pelanggan</h4>
                <CustomerReview 
                    name="Artika Azzarah" 
                    review="Buah di supermarket ini sangat segar dan bervariasi. Saya selalu mendapatkan buah terbaik di sini!" 
                    rating={5}
                />
                <CustomerReview 
                    name="Marisa Haura" 
                    review="Banyak pilihan buah impor dan lokal dengan kualitas premium. Harganya juga cukup terjangkau!" 
                    rating={4}
                />
                <CustomerReview 
                    name="Irandha Salsabila" 
                    review="Pelayanan di bagian buah sangat baik. Saya bisa mendapatkan buah segar dengan mudah!" 
                    rating={5}
                />
            </div>
        </div>
    );
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Q: {props.Q}</h3>
            <p>A: {props.A}</p>
        </div>
    );
}

function FeedbackForm() {
    return (
        <div className="feedback-form">
            <h2>Beri Pendapat Anda</h2>
            <input type="text" placeholder="Masukkan pendapat Anda tentang buah di sini..." className="input-box stylish-input" style={{ width: '95%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}/>
            <div className="button-container" style={{ display: 'flex', gap: '10px' }}>
            <button className="submit-button enhanced-button stylish-button small-button" style={{ backgroundColor: '#8B4513', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '14px', flex: '1' }}>🍎 Kirim Pendapat</button>
            <button className="submit-button enhanced-button stylish-button small-button" style={{ backgroundColor: '#A0522D', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '14px', flex: '1' }}>📩 Masukkan</button>
            </div>
        </div>
    );
}

function CustomerReview({ name, review, rating }) {
    return (
        <div className="review-card">
            <h3>{name}</h3>
            <p>"{review}"</p>
            <p>Rating: {'⭐'.repeat(rating)}</p>
        </div>
    );
}
