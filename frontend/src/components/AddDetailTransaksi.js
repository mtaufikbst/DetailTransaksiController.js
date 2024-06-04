import React, {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDetailTransaksi= () => {
    const [transaksi_id, setTransaksi_id] = useState([]);
    const [produk_id,setProduk_id] = useState("");
    const [jumlah,setJumlah] = useState("");
    const [harga,setHarga] = useState("");
    const [total,setTotal] = useState("");
    const [sub_total,setSub_total] = useState("");
    const [metode_pembayaran,setSMetode_pembayaran] = useState("");
    const navigate = useNavigate();
  
// Fungsi untuk mengelola perubahan input pada elemen form
  const saveDetailTransaksi = async (event) => {
    event.preventDefault();
    try {
        await axios.post('http://localhost:2526/detailtransaksi', {
            transaksi_id,
            produk_id,
            jumlah,
            harga,
            total,
            sub_total,
            metode_pembayaran
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
        {/* Form untuk menambahkan detail transaksi */}
        <form onSubmit={saveDetailTransaksi}>
            <div className="field">
                <label className="label">Transaksi Id</label>
                <input
                    type="number"
                    className="input"
                    value={transaksi_id}
                    onChange={(event) => handleInputChange(event, setTransaksi_id)}
                    placeholder='Transaksi Id'
                    />
            </div>
            <div className="field">
                <label className="label">Produk Id</label>
                {/* Input untuk menambahkan produk id*/}
                <input
                    type="number"
                    className="input"
                    value={produk_id}
                    onChange={(event) => handleInputChange(event, setProduk_id)}
                    placeholder='Produk Id'
                />
            </div>
            


            <div className="field">
                <label className="label">Jumlah</label>
                {/* Input untuk jumlah*/}
                <input
                    type="number"
                    className="input"
                    value={jumlah}
                    onChange={(event) => handleInputChange(event, setJumlah)}
                    placeholder='Jumlah'
                />
            </div>
            <div className="field">
                <label className="label">Harga</label>
                {/* Input untuk harga*/}
                <input
                    type="number"
                    className="input"
                    value={harga}
                    onChange={(event) => handleInputChange(event, setHarga)}
                    placeholder='Harga'
                />
            </div>


            <div className="field">
                <label className="label">Total</label>
                {/* Input untuk total*/}
                <input
                    type="number"
                    className="input"
                    value={total}
                    onChange={(event) => handleInputChange(event, setTotal)}
                    placeholder='Total'
                />
            </div>
            <div className="field">
                <label className="label">Sub Total</label>
                {/* Input untuk sub total*/}
                <input
                    type="number"
                    className="input"
                    value={sub_total}
                    onChange={(event) => handleInputChange(event, setSub_total)}
                    placeholder='Sub Total'
                />
            </div>

            <div className="field">
                <label className="label">Metode Pembayaran</label>
                {/* Input untuk metode pembayaran*/}
                <input
                    type="text"
                    className="input"
                    value={metode_pembayaran}
                    onChange={(event) => handleInputChange(event, setSMetode_pembayaran)}
                    placeholder='Metode Pembayaran'
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

export default AddDetailTransaksi;
