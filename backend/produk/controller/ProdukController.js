import express from 'express';
import Produk from '../models/ProdukModel.js';

const ProdukController = {};

// Mendapatkan semua produk
ProdukController.getAllProduk = async (reg, ress) => {
    try {
        const produk = await Produk.findAll();
        ress.json(produk);  
    } catch (err) {
        console.error('Gagal mendapatkan produk:',err);
        ress.status(500).json({error: 'Gagal Mendapatkan Produk'});
    }
};

// Mendapatkan produk bedasarkan ID
ProdukController.getProdukById = async (reg, res) => {
    const { id } = req.params;
    try {
        const produk = await Produk.findByPk(id);
        if (produk) {
            res.json(produk);
        }else {
            res.status(404).json({error: 'Produk tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal mendapatkan produk',err);
        res.status(500).json({error: 'Gagal mendapatkan produk'});
    }
}

// Menambahkan produk baru
ProdukController.createProduk = async (req, res) => {
    const { nama, kategori, harga, stok } = req.body ;
    try {
        const newProduk = await Produk.create({nama, kategori,harga,stok});
        res.status(201).json(newProduk);
    } catch (err) {
        console.error('Gagal menambahkan produk',err);
        res.status(500).json({error: 'Gagal menambahkan produk'});
    }
};

// Mengupdate produk bedasarkan ID
ProdukController.updateProdukById = async (reg, res) => {
    const { id } = req.params;
    const { nama, kategori, harga, stok } = req.body ;
    try {
        const produk = await Produk.findByPk(id);
        if (produk) {
            await produk.update({nama, kategori,harga,stok});
            res.json(produk);
        }else {
            res.status(404).json({error: 'Produk tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal mengupdate produk',err);
        res.status(500).json({error: 'Gagal mengupdate produk'});
    }
};

// Menghapus produk bedasarkan ID
ProdukController.deleteProdukById = async (reg, res) => {
    const { id } = req.params;
    try {
        const produk = await Produk.findByPk(id);
        if (produk) {
            await produk.destroy();
            res.json({ message: 'Produk berhasil dihapus'});
        }else {
            res.status(404).json({error: 'Produk tidak ditemukan'});
        }
    } catch (err) {
        console.error('Gagal menghapus produk',err);
        res.status(500).json({error: 'Gagal menghapus produk'});
    }
};

export default ProdukController;