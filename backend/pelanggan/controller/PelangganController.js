import express from 'express';
import Produk from '../models/PelangganModel.js';

const PelangganController = {};

// Mendapatkan semua pelanggan
PelangganController.getAllPelanggan = async (reg, ress) => {
    try {
        const pelanggan = await Pelanggan.findAll();
        ress.json(pelanggan);  
    } catch (err) {
        console.error('Gagal mendapatkan pelanggan:',err);
        ress.status(500).json({error: 'Gagal mendapatkan pelanggan'});
    }
};

// Mendapatkan pelanggan bedasarkan ID
PelangganController.getPelangganById = async (reg, res) => {
    const { id } = req.params;
    try {
        const pelanggan = await Pelanggan.findByPk(id);
        if (pelanggan) {
            res.json(pelanggan);
        }else {
            res.status(404).json({error: 'Pelanggan tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal mendapatkan pelanggan',err);
        res.status(500).json({error: 'Gagal mendapatkan pelanggan'});
    }
}

// Menambahkan pelanggan baru
PelangganController.createPelanggan = async (req, res) => {
    const { nama, alamat, telepon } = req.body ;
    try {
        const newPelanggan = await Pelanggan.create({nama, alamat, telepon});
        res.status(201).json(newPelanggan);
    } catch (err) {
        console.error('Gagal menambahkan pelanggan',err);
        res.status(500).json({error: 'Gagal menambahkan pelanggan'});
    }
};

// Mengupdate pelanggan bedasarkan ID
PelangganController.updatePelangganById = async (reg, res) => {
    const { id } = req.params;
    const { nama, alamat, telepon } = req.body ;
    try {
        const pelanggan = await Pelanggan.findByPk(id);
        if (pelanggan) {
            await pelanggan.update({nama, alamat, telepon});
            res.json(pelanggan);
        }else {
            res.status(404).json({error: 'Pelanggan tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal mengupdate pelanggan',err);
        res.status(500).json({error: 'Gagal mengupdate produk'});
    }
};

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

export default PelangganController;