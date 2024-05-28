import express from 'express';
import PelangganController from '../controller/PelangganController.js';

const router = express.Router();

// Rute untuk mendapatkan semua pelanggan
router.get('/pelanggan', PelangganController.getAllPelanggan);

// Rute untuk mendapatkan pelanggan berdasarkan ID
router.get('/pelanggan/:id', PelangganController.getPelangganById);

// Rute untuk mendapatkan pelanggan baru
router.post('/pelanggan', PelangganController.createPelanggan);

// Rute untuk mengupdate pelanggan berdasarkan ID
router.put('/pelanggan/:id', PelangganController.updatePelangganById);

// Rute untuk menghapus pelanggan berdasarkan ID
//router.delete('/pelanggan/:id', PelangganController.deletePelangganById);

export default router;