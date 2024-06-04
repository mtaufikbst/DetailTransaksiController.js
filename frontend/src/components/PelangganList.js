import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PelangganList = () => {
  const [pelanggan, setpelanggan] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getPelanggan();
  },[]);

const getPelanggan = async () => {
  try {
    const response = await axios.get("http://localhost:2526/pelanggan");
    setPelanggan(response.data);
    console.log("Data pelanggan:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const deletePelanggan = async (id) => {
  try {
    await axios.delete(`http://localhost:2526/pelanggan/${id}`);
    console.log("Pelanggan berhasil dihapus");
    getPelanggan();
  } catch (error) {
    console.error("Error deleting pelanggan", error);
  }
};

const handleSearch = (event) => {
  setSearchQuery(event.target.value);
};

const filterPelanggan = (pelanggans) => {
  return pelanggans.filter(
    (pelanggan) =>
    pelanggan.id.toString().include(searchQuery) ||
    pelanggan.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

  return (
    <div className="columns">
      <div className="column">
      <h1>Pelanggan List</h1>
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
          <th>Nama Pelanggan</th>
          <th>Alamat</th>
          <th>Telepon</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filterProduk(produk).map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.nama}</td>
            <td>{item.alamat}</td>
            <td>{item.telepon}</td>
            <td>
              <Link to={`edit/${item.id}`}>Edit</Link>
              <button onClick={() => deletePelanggan(item.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
};

export default PelangganList;
