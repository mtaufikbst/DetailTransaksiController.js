import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduk = () => {
    const [nama, setNamaPelanggan] = useState([]);
    const [alamat,setAlamat] = useState("");
    const [telepon,setTelepon] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
  
// Fungsi untuk mengelola perubahan input pada elemen form
const handleInputChange = (event, setter) => {
setter(event.target.value);
};

// Fungsi untuk menyimpan data pelanggan
  const updatePelanggan = async (event) => {
    event.preventDefault();
    try {
        await axios.put(`http://localhost:2526/pelanggan/${id}`, {
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


useEffect(() => {
    //Fungsi untuk mendapatkan data pelanggan berdasarkan ID
    const getPelangganById = async () => {
        try {
            const response = await axios.get(`http://localhost:2526/pelanggan/${id}`);
            setNamaPelanggan(response.data.nama);
            setAlamat(response.data.alamat);
            setTelepon(response.data.telepon);
        } catch (error) {
            console.error(error);
        }
    };
    // Panggil fungsi getPelangganById saat komponen dimount
    getPelangganById();
},[id]);

return (
    <div className="columns">
        <div className="column">
        {/* Form untuk memperbarui pelanggan */}
        <form onSubmit={updatePelanggan}>
            <div className="field">
                <label className="label">Nama Pelanggan</label>
                {/* Input untuk nama pelanggan*/}
                <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(event) => handleInputChange(event, setNamaProduk)}
                    placeholder='Nama Produk'
                    />
            </div>
            <div className="field">
                <label className="label">Alamat</label>
                {/* Input untuk alamat */}
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
                {/* Tombol submit untuk menyimpan data pelanggan*/}
                <button type="submit" className="button">Simpan</button>
            </div>
        </form>
        </div>
    </div>
);
};

export default UpdateProduk;