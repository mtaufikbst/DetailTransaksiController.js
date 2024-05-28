import express from 'express';
import DetailTransaksi from '../models/DetailTransaksiModel.js';

const DetailTransaksiController = {};

// Mendapatkan semua detail transaksi
DetailTransaksiController.getAllDetailTransaksi = async (reg, ress) => {
    try {
        const detailtransaksi = await DetailTransaksi.findAll();
        ress.json(detailtransaksi);  
    } catch (err) {
        console.error('Gagal mendapatkan detail transaksi:',err);
        ress.status(500).json({error: 'Gagal mendapatkan detail transaksi'});
    }
};

// Mendapatkan detail transaksi bedasarkan ID
DetailTransaksiController.getDetailTransaksiById = async (reg, res) => {
    const { id } = req.params;
    try {
        const detailtransaksi = await DetailTransaksi.findByPk(id);
        if (detailtransaksi) {
            res.json(detailtransaksi);
        }else {
            res.status(404).json({error: 'Detail transaksi tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal mendapatkan detail transaksi',err);
        res.status(500).json({error: 'Gagal mendapatkan detail transaksi'});
    }
};

// Menambahkan Detail transaksi baru
DetailTransaksiController.createDetailTransaksi = async (req, res) => {
    const { transaksi_id, produk_id, harga, total, sub_total, metode_pembayaran } = req.body ;
    try {
        const newDetailTransaksi = await DetailTransaksi.create({transaksi_id, produk_id, harga, total, sub_total, metode_pembayaran});
        res.status(201).json(newDetailTransaksi);
    } catch (err) {
        console.error('Gagal menambahkan detail transaksi',err);
        res.status(500).json({error: 'Gagal menambahkan detail transaksi'});
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

export default DetailTransaksiController;