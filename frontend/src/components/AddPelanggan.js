import React, {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduk = () => {
    const [nama, setNamaPelanggan] = useState([]);
    const [alamat,setAlamat] = useState("");
    const [telepon,setTelepon] = useState("");
    const navigate = useNavigate();
  
// Fungsi untuk mengelola perubahan input pada elemen form
  const savePelanggan = async (event) => {
    event.preventDefault();
    try {
        await axios.post('http://localhost:2526/pelanggan', {
            nama,
            alamat,
            telepon
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
        {/* Form untuk menambahkan pelanggan */}
        <form onSubmit={savePelanggan}>
            <div className="field">
                <label className="label">Nama Pelanggan</label>
                <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(event) => handleInputChange(event, setNamaPelanggan)}
                    placeholder='Nama Pelanggan'
                    />
            </div>
            <div className="field">
                <label className="label">Alamat</label>
                {/* Input untuk alamat*/}
                <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(event) => handleInputChange(event, setAlamat)}
                    placeholder='Alamat'
                />
            </div>
            


            <div className="field">
                <label className="label">Telepon</label>
                {/* Input untuk telepon*/}
                <input
                    type="text"
                    className="input"
                    value={telepon}
                    onChange={(event) => handleInputChange(event, setTelepon)}
                    placeholder='Telepon'
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
