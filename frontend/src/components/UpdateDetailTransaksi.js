import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDetailTransaksi = () => {
    const [transaksi_id, setTransaksi_id] = useState([]);
    const [produk_id,setProduk_id] = useState("");
    const [jumlah,setJumlah] = useState("");
    const [harga,setHarga] = useState("");
    const [total,setTotal] = useState("");
    const [sub_total,setSub_total] = useState("");
    const [metode_pembayaran,setMetode_pembayaran] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();


// Fungsi untuk mengelola perubahan input pada elemen form
const handleInputChange = (event, setter) => {
setter(event.target.value);
};

// Fungsi untuk menyimpan data detail transaksi
  const updateDetailTransaksi = async (event) => {
    event.preventDefault();
    try {
        await axios.put(`http://localhost:2526/detailtransaksi/${id}`, {
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


useEffect(() => {
    //Fungsi untuk mendapatkan data produk berdasarkan ID
    const getDetailTransaksiById = async () => {
        try {
            const response = await axios.get(`http://localhost:2526/detailtransaksi/${id}`);
            setTransaksi_id(response.data.transaksi_id);
            setProduk_id(response.data.produk_id);
            setJumlah(response.data.jumlah);
            setHarga(response.data.harga);
            setTotal(response.data.total);
            setSub_total(response.data.sub_total);
            setMetode_pembayaran(response.data.metode_pembayaran);
        } catch (error) {
            console.error(error);
        }
    };
    // Panggil fungsi getProdukById saat komponen dimount
    getDetailTransaksiById();
},[id]);

return (
    <div className="columns">
        <div className="column">
        {/* Form untuk memperbarui produk */}
        <form onSubmit={updateDetailTransaksi}>
            <div className="field">
                <label className="label">Transaksi Id</label>
                {/* Input untuk pelanggan id*/}
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
                {/* Input untuk Produk Id*/}
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
                    placeholder='jumlah'
                />  
            </div>
            <div className="field">
                <label className="label">Harga</label>
                {/* Input untuk harga */}
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
                {/* Input untuk total */}
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
                {/* Input untuk sub total */}
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
                {/* Input untuk metode pembayaran */}
                <input
                    type="text"
                    className="input"
                    value={metode_pembayaran}
                    onChange={(event) => handleInputChange(event, setMetode_pembayaran)}
                    placeholder='Metode Pembayaran'
                />
            </div>

           <div className="field">
                {/* Tombol submit untuk menyimpan detail transaksi*/}
                <button type="submit" className="button">Simpan</button>
            </div>
        </form>
    </div>
    </div>
);
};

export default UpdateDetailTransaksi;