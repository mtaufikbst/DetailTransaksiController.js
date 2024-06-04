import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduk = () => {
    const [nama, setNamaProduk] = useState([]);
    const [kategori,setKategori] = useState("");
    const [harga,setHarga] = useState("");
    const [stok,setStok] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
  
// Fungsi untuk mengelola perubahan input pada elemen form
const handleInputChange = (event, setter) => {
setter(event.target.value);
};

// Fungsi untuk menyimpan data produk
  const updateProduk = async (event) => {
    event.preventDefault();
    try {
        await axios.put(`http://localhost:2526/produk/${id}`, {
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


useEffect(() => {
    //Fungsi untuk mendapatkan data produk berdasarkan ID
    const getProdukById = async () => {
        try {
            const response = await axios.get(`http://localhost:2526/produk/${id}`);
            setNamaProduk(response.data.nama);
            setKategori(response.data.kategori);
            setHarga(response.data.harga);
            setStok(response.data.stok);
        } catch (error) {
            console.error(error);
        }
    };
    // Panggil fungsi getProdukById saat komponen dimount
    getProdukById();
},[id]);

return (
    <div className="columns">
        <div className="column">
        {/* Form untuk memperbarui produk */}
        <form onSubmit={updateProduk}>
            <div className="field">
                <label className="label">Nama Produk</label>
                {/* Input untuk nama produk*/}
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
                {/* Input untuk merek Produk*/}
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

export default UpdateProduk;