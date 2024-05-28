import { DataTypes, Sequelize } from "sequelize";
import koneksidb from "../../config/Database.js";

const Pelanggan = koneksidb.define('pelanggan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING(255)
    },
    alamat: {
        type: DataTypes.STRING(255)
    },
    telepon: {
        type: DataTypes.STRING(20)
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

// Membuat tabel pelanggan jika belum ada
Pelanggan.sync().then(() => {
    console.log('Tabel pelanggan telah dibuat atau sudah ada.');
}).catch(err => {
    console.error('Gagal membuat tabel pelanggan', err);
});

export default Pelanggan;
