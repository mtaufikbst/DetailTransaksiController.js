import React, {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTransaksi = () => {
    const [produk_id, setProduk_id] = useState([]);
    const [tanggal,setTanggal] = useState("");
    const navigate = useNavigate();
  
// Fungsi untuk mengelola perubahan input pada elemen form
  const saveTransaksi = async (event) => {
    event.preventDefault();
    try {
        await axios.post('http://localhost:2526/transaksi', {
            pelanggan_id,
            tanggal
        });
        //Mengarahkan pengguna kembali ke halaman utama setelah penyimpanan berhasil
        navigate("/");
    } catch (error) {
    // Menangkap dan menampilkan error jika terjadi kesalahan
    console.error(error);
    }
  };

return (
    <div className="columns">
        <div className="column">
        {/* Form untuk menambahkan transaksi */}
        <form onSubmit={saveTransaksi}>
            <div className="field">
                <label className="label">Pelanggan Id</label>
                <input
                    type="number"
                    className="input"
                    value={pelanggan_id}
                    onChange={(event) => handleInputChange(event, setPelanggan_id)}
                    placeholder='Pelanggan Id'
                    />
            </div>
            <div className="field">
                <label className="label">Tanggal</label>
                {/* Input untuk tanggal transaksi*/}
                <input
                    type="date"
                    className="input"
                    value={tanggal}
                    onChange={(event) => handleInputChange(event, setTanggal)}
                    placeholder='Tanggal'
                />
            </div>
            
            <div className="field">
                {/* Tombol submit untuk menyimpan data transaksi*/}
                <button type="submit" className="button">Simpan</button>
            </div>
        </form>
        </div>
    </div>
);
};

export default AddTransaksi;
