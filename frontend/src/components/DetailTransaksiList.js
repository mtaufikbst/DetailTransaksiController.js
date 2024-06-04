import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailTransaksiList = () => {
  const [produk, setdetailtransaksi] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getDetailTransaksi();
  },[]);

const getDetailTransaksi= async () => {
  try {
    const response = await axios.get("http://localhost:2526/detailtransaksi");
    setDetailTransaksi(response.data);
    console.log("Data detail transaksi:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const deleteDetailTransaksi = async (id) => {
  try {
    await axios.delete(`http://localhost:2526/detailtransaksi/${id}`);
    console.log("Detail transaksi berhasil dihapus");
    getDetailTransaksi();
  } catch (error) {
    console.error("Error deleting detail transaksi", error);
  }
};

const handleSearch = (event) => {
  setSearchQuery(event.target.value);
};

const filterDetailTransaksi = (detailtransaksis) => {
  return detailtransaksis.filter(
    (detailtransaksi) =>
    detailtransaksi.id.toString().include(searchQuery) ||
    detailtransaksi.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

  return (
    <div className="columns">
      <div className="column">
      <h1>Detail Transaksi List</h1>
      <h2>Selamat Datang Di Program Magang Guru Tamu SMK N 7 Batam Di PT Pundi Mas Berjaya</h2>
      <div style={{marginBottom:"20px"}}>
        <Link to={'add'}>Tambah Data</Link>
    </div>
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Cari berdasarkan ID atau nama barang"
      />
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>ID</th>
          <th>Transaksi Id</th>
          <th>Produk Id</th>
          <th>Jumlah</th>
          <th>Harga</th>
          <th>Total</th>
          <th>Sub Total</th>
          <th>Metode Pembayaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filterProduk(produk).map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.transaksi_id}</td>
            <td>{item.produk_id}</td>
            <td>{item.harga}</td>
            <td>{item.total}</td>
            <td>{item.sub_total}</td>
            <td>{item.metode_pembayaran}</td>
            <td>
              <Link to={`edit/${item.id}`}>Edit</Link>
              <button onClick={() => deleteDetailTransaksi(item.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
};

export default DetailTransaksiList;
