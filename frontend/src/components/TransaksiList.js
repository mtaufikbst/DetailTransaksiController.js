import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TransaksiList = () => {
  const [transaksi, settransaksi] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getTransaksi();
  },[]);

const getTransaksi = async () => {
  try {
    const response = await axios.get("http://localhost:2526/transaksi");
    setTransaksi(response.data);
    console.log("Data transaksi:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const deleteTransaksi = async (id) => {
  try {
    await axios.delete(`http://localhost:2526/transaksi/${id}`);
    console.log("Transaksi berhasil dihapus");
    getTransaksi();
  } catch (error) {
    console.error("Error deleting transaksi", error);
  }
};

const handleSearch = (event) => {
  setSearchQuery(event.target.value);
};

const filterTransaksi = (transaksis) => {
  return transaksis.filter(
    (transaksi) =>
    transaksi.id.toString().include(searchQuery) ||
    transaksi.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

  return (
    <div className="columns">
      <div className="column">
      <h1>Transaksi List</h1>
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
          <th>Pelanggan ID</th>
          <th>Tanggal</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filterProduk(transaksi).map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.pelanggan_id}</td>
            <td>{item.tanggal}</td>
            <td>
              <Link to={`edit/${item.id}`}>Edit</Link>
              <button onClick={() => deleteTransaksi(item.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
};

export default TransaksiList;
