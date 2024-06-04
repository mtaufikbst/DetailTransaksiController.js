import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTransaksi = () => {
    const [pelanggan_id, setPelanggan_id] = useState([]);
    const [tanggal,setTanggal] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
  
// Fungsi untuk mengelola perubahan input pada elemen form
const handleInputChange = (event, setter) => {
setter(event.target.value);
};

// Fungsi untuk menyimpan data transaksi
  const updateTransaksi = async (event) => {
    event.preventDefault();
    try {
        await axios.put(`http://localhost:2526/transaksi/${id}`, {
            pelanggan_id,
            tanggal,
        });
        //Mengarahkan pengguna kembali ke halaman utama setelah penyimpanan berhasil
        navigate("/");
    } catch (error) {
    // Menangkap dan menampilkan error jika terjadi kesalahan
    console.error(error);
    }
  };


useEffect(() => {
    //Fungsi untuk mendapatkan data transaksi berdasarkan ID
    const getTransaksiById = async () => {
        try {
            const response = await axios.get(`http://localhost:2526/transaksi/${id}`);
            setPelanggan_id(response.data.pelanggan_id);
            setTanggal(response.data.tanggal);
        } catch (error) {
            console.error(error);
        }
    };
    // Panggil fungsi getProdukById saat komponen dimount
    getTransaksiById();
},[id]);

return (
    <div className="columns">
        <div className="column">
        {/* Form untuk memperbarui transaksi */}
        <form onSubmit={updateTransaksi}>
            <div className="field">
                <label className="label">Pelanggan Id</label>
                {/* Input untuk nama pelanggan*/}
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

export default UpdateTransaksi;