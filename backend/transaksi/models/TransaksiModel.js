import { DataTypes, Sequelize } from "sequelize";
import koneksidb from "../../config/Database.js";

const Transaksi = koneksidb.define('transaksi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pelanggan_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal: {
        type: DataTypes.DATE
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate:Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    freezeTableName:true
});

Transaksi.belongsTo(Pelanggan, {foreignKey:'pelanggan_id'});

// Membuat tabel transaksi jika belum ada
Transaksi.sync().then(() => {
    console.log('Tabel transaksi telah dibuat atau sudah ada.');
}).catch(err => {
    console.error('Gagal membuat tabel transaksi', err);
});

export default Transaksi;
