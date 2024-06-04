import React, {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduk = () => {
    const [nama, setNamaProduk] = useState([]);
    const [kategori,setKategori] = useState("");
    const [harga,setHarga] = useState("");
    const [stok,setStok] = useState("");
    const navigate = useNavigate();
  
// Fungsi untuk mengelola perubahan input pada elemen form
  const saveProduk = async (event) => {
    event.preventDefault();
    try {
        await axios.post('http://localhost:2526/produk', {
            nama,
            kategori,
            harga,
            stok
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
        {/* Form untuk menambahkan produk */}
        <form onSubmit={saveProduk}>
            <div className="field">
                <label className="label">Nama Produk</label>
                <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(event) => handleInputChange(event, setNamaProduk)}
                    placeholder='Nama Produk'
                    />
            </div>
            <div className="field">
                <label className="label">Kategori</label>
                {/* Input untuk kategori produk*/}
                <input
                    type="text"
                    className="input"
                    value={kategori}
                    onChange={(event) => handleInputChange(event, setKategori)}
                    placeholder='Kategori'
                />
            </div>
            


            <div className="field">
                <label className="label">Harga</label>
                {/* Input untuk harga Produk*/}
                <input
                    type="text"
                    className="input"
                    value={harga}
                    onChange={(event) => handleInputChange(event, setHarga)}
                    placeholder='Harga'
                />
            </div>
            <div className="field">
                <label className="label">Stok</label>
                {/* Input untuk stok Produk*/}
                <input
                    type="number"
                    className="input"
                    value={stok}
                    onChange={(event) => handleInputChange(event, setStok)}
                    placeholder='Stok'
                />
            </div>
            <div className="field">
                {/* Tombol submit untuk menyimpan data produk*/}
                <button type="submit" className="button">Simpan</button>
            </div>
        </form>
        </div>
    </div>
);
};

export default AddProduk;
