from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Dummy model (replace with real model if available)
def predict_loyalty(input_data):
    umur, gender, frekuensi, total_pengeluaran, skor_kepuasan = input_data
    # Sederhana: jika frekuensi > 3 dan skor > 7 maka loyal
    if frekuensi > 3 and skor_kepuasan > 7:
        return "Loyal"
    else:
        return "Tidak Loyal"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        umur = int(data['umur'])
        gender = 1 if data['gender'].lower() == 'laki-laki' else 0
        frekuensi = int(data['frekuensi'])
        total_pengeluaran = float(data['pengeluaran'])
        skor_kepuasan = int(data['kepuasan'])

        prediksi = predict_loyalty([umur, gender, frekuensi, total_pengeluaran, skor_kepuasan])
        return jsonify({'prediksi': prediksi})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)