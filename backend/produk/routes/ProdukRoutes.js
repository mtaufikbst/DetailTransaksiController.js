import express from 'express';
import ProdukController from '../controller/ProdukController.js';

const router = express.Router();

// Rute untuk mendapatkan semua produk
router.get('/produk', ProdukController.getAllProduk);

// Rute untuk mendapatkan produk berdasarkan ID
router.get('/produk/:id', ProdukController.getProdukById);

// Rute untuk mendapatkan produk baru
router.post('/produk', ProdukController.createProduk);

// Rute untuk mengupdate produk berdasarkan ID
router.put('/produk/:id', ProdukController.updateProdukById);

// Rute untuk menghapus produk berdasarkan ID
router.delete('/produk/:id', ProdukController.deleteProdukById);

export default router;