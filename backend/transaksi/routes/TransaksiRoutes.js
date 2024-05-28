import express from 'express';
import TransaksiController from '../controller/TransaksiController.js';

const router = express.Router();

// Rute untuk mendapatkan semua transaksi
router.get('/transaksi', TransaksiController.getAllTransaksi);

// Rute untuk mendapatkan transaksi berdasarkan ID
router.get('/transaksi/:id', TransaksiController.getTransaksiById);

// Rute untuk mendapatkan transaksi baru
router.post('/transaksi', TransaksiController.createTransaksi);

// Rute untuk mengupdate transaksi berdasarkan ID
//router.put('/transaksi/:id', TransaksiController.updateTransaksiById);

// Rute untuk menghapus transaksi berdasarkan ID
//router.delete('/transaksi/:id', TransaksiController.deleteTransaksiById);

export default router;