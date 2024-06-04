import React, {useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProdukList = () => {
  const [produk, setproduk] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProduk();
  },[]);

const getProduk = async () => {
  try {
    const response = await axios.get("http://localhost:2526/produk");
    setProduk(response.data);
    console.log("Data produk:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const deleteProduk = async (id) => {
  try {
    await axios.delete(`http://localhost:2526/produk/${id}`);
    console.log("Produk berhasil dihapus");
    getProduk();
  } catch (error) {
    console.error("Error deleting produk", error);
  }
};

const handleSearch = (event) => {
  setSearchQuery(event.target.value);
};

const filterProduk = (produks) => {
  return produks.filter(
    (produk) =>
    produk.id.toString().include(searchQuery) ||
    produk.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

  return (
    <div className="columns">
      <div className="column">
      <h1>Produk List</h1>
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
          <th>Nama Barang</th>
          <th>Kategori</th>
          <th>Harga</th>
          <th>Stok</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filterProduk(produk).map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.kategori}</td>
            <td>{item.nama}</td>
            <td>{item.harga}</td>
            <td>{item.stok}</td>
            <td>
              <Link to={`edit/${item.id}`}>Edit</Link>
              <button onClick={() => deleteProduk(item.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
};

export default ProdukList;
