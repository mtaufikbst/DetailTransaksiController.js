import express from 'express';
import DetailTransaksiController from '../controller/DetailTransaksiController.js';

const router = express.Router();

// Rute untuk mendapatkan semua transaksi
router.get('/detailtransaksi', DetailTransaksiController.getAllDetailTransaksi);

// Rute untuk mendapatkan transaksi berdasarkan ID
router.get('/detailtransaksi/:id', DetailTransaksiController.getDetailTransaksiById);

// Rute untuk mendapatkan transaksi baru
router.post('/detailtransaksi', DetailTransaksiController.createDetailTransaksi);

// Rute untuk mengupdate detail transaksi berdasarkan ID
//router.put('/detailtransaksi/:id', TransaksiController.updateTransaksiById);

// Rute untuk menghapus detail transaksi berdasarkan ID
//router.delete('/detailtransaksi/:id', TransaksiController.deleteTransaksiById);

export default router;