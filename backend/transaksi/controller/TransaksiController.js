import express from 'express';
import Transaksi from '../models/TransaksiModel.js';

const TransaksiController = {};

// Mendapatkan semua transaksi
TransaksiController.getAllTransaksi = async (reg, ress) => {
    try {
        const transaksi = await Transaksi.findAll();
        ress.json(transaksi);  
    } catch (err) {
        console.error('Gagal mendapatkan transaksi:',err);
        ress.status(500).json({error: 'Gagal mendapatkan transaksi'});
    }
};

// Mendapatkan transaksi bedasarkan ID
TransaksiController.getTransaksiById = async (reg, res) => {
    const { id } = req.params;
    try {
        const transaksi = await Transaksi.findByPk(id);
        if (transaksi) {
            res.json(transaksi);
        }else {
            res.status(404).json({error: 'Transaksi tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal mendapatkan transaksi',err);
        res.status(500).json({error: 'Gagal mendapatkan transaksi'});
    }
}

// Menambahkan transaksi baru
TransaksiController.createTransaksi = async (req, res) => {
    const { pelanggan_id, tanggal } = req.body ;
    try {
        const newTransaksi = await Transaksi.create({pelanggan_id, tanggal});
        res.status(201).json(newTransaksi);
    } catch (err) {
        console.error('Gagal menambahkan transaksi',err);
        res.status(500).json({error: 'Gagal menambahkan transaksi'});
    }
};

// Mengupdate pelanggan bedasarkan ID
// PelangganController.updatePelangganById = async (reg, res) => {
   // const { id } = req.params;
    //const { nama, alamat, telepon } = req.body ;
    //try {
       // const pelanggan = await Pelanggan.findByPk(id);
       // if (pelanggan) {
      //      await pelanggan.update({nama, alamat, telepon});
       //     res.json(pelanggan);
      //  }else {
       //     res.status(404).json({error: 'Pelanggan tidak ditemukan'});
     //   }
   // } catch (err) {
     //   console.error('Gagal mengupdate pelanggan',err);
       // res.status(500).json({error: 'Gagal mengupdate produk'});
 //   }
//};

// Menghapus pelanggan bedasarkan ID
// PelangganController.deletePelangganById = async (reg, res) => {
 //   const { id } = req.params;
  //  try {
   //     const pelanggan = await Pelanggan.findByPk(id);
   //     if (pelanggan) {
    //        await pelanggan.destroy();
     //       res.json({ message: 'Pelanggan berhasil dihapus'});
      //  }else {
          //  res.status(404).json({error: 'Pelanggan tidak ditemukan'});
       // }
   // } catch (err) {
     //   console.error('Gagal menghapus pelanggan',err);
    //    res.status(500).json({error: 'Gagal menghapus pelanggan'});
  //  }
//};

export default TransaksiController;