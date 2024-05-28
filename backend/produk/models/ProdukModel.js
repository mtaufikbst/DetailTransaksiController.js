import { DataTypes, Sequelize } from "sequelize";
import koneksidb from "../../config/Database.js";

const Produk = koneksidb.define('produk', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING(255)
    },
    kategori: {
        type: DataTypes.STRING(100)
    },
    harga: {
        type: DataTypes.DECIMAL(10,2)
    },
    stok: {
        type: DataTypes.INTEGER
    },
    created_at: {
        type:"TIMESTAMP",
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    update_at: {
        type:"TIMESTAMP",
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull:false
    }
}, {
    freezeTableName:true
});

// Membuat tabel produk jika belum ada
Produk.sync().then(() => {
    console.log('Tabel produk telah dibuat atau sudah ada.');
}).catch(err => {
    console.error('Gagal membuat tabel produk', err);
});

export default Produk;
